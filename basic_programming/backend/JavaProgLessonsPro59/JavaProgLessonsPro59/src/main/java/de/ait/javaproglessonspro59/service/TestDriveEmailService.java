package de.ait.javaproglessonspro59.service;

import de.ait.javaproglessonspro59.dto.TestDriveConfirmationEmailRequest;
import de.ait.javaproglessonspro59.model.Car;
import de.ait.javaproglessonspro59.repository.CarRepository;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import java.nio.charset.StandardCharsets;

@Service
@Slf4j
public class TestDriveEmailService {

    private final JavaMailSender javaMailSender;
    private final TemplateEngine templateEngine;
    private final CarRepository carRepository;

    @Value("${app.mail.from}")
    private String from;

    @Value("${app.public.base-url}")
    private String baseUrl;

    public TestDriveEmailService(JavaMailSender javaMailSender,
                                 TemplateEngine templateEngine,
                                 CarRepository carRepository) {
        this.javaMailSender = javaMailSender;
        this.templateEngine = templateEngine;
        this.carRepository = carRepository;
    }

    public void sendConfirmationEmail(TestDriveConfirmationEmailRequest request) {
        sendEmail(request, "test-drive-confirmation.html", "Подтверждение тест-драйва");
    }

    public void sendReminderEmail(TestDriveConfirmationEmailRequest request) {
        sendEmail(request, "test-drive-reminder", "Напоминание о тест-драйве");
    }

    private void sendEmail(TestDriveConfirmationEmailRequest request,
                           String templateName,
                           String subject) {

        Car car = carRepository.findById(request.getCarId())
                .orElseThrow(() ->
                        new IllegalArgumentException("Car with id " + request.getCarId() + " not found"));

        String cancelUrl = baseUrl + "/cancel-test-drive?carId=" + car.getId();

        Context context = new Context();
        context.setVariable("clientName", request.getClientName());
        context.setVariable("carBrand", car.getBrand());
        context.setVariable("carModel", car.getModel());
        context.setVariable("testDriveDateTime", request.getTestDriveDateTime());
        context.setVariable("dealerAddress", request.getDealerAddress());
        context.setVariable("dealerPhone", request.getDealerPhone());
        context.setVariable("cancelUrl", cancelUrl);

        String html = templateEngine.process(templateName, context);

        MimeMessage mimeMessage = javaMailSender.createMimeMessage();

        try {
            MimeMessageHelper helper = new MimeMessageHelper(
                    mimeMessage,
                    MimeMessageHelper.MULTIPART_MODE_RELATED,
                    StandardCharsets.UTF_8.name()
            );

            helper.setFrom(from);
            helper.setTo(request.getClientEmail());
            helper.setSubject(subject);
            helper.setText(html, true);

            log.info("Sending {} email to {} for carId {} at {}",
                    subject,
                    request.getClientEmail(),
                    request.getCarId(),
                    request.getTestDriveDateTime()
            );

            javaMailSender.send(mimeMessage);

            log.info("Email successfully sent to {}", request.getClientEmail());

        } catch (MessagingException e) {
            log.error("Failed to send email to {}", request.getClientEmail(), e);
            throw new RuntimeException("Email sending failed", e);
        }
    }
}
