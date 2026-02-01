package de.ait.javaproglessonspro59.controllers;

import de.ait.javaproglessonspro59.dto.TestDriveConfirmationEmailRequest;
import de.ait.javaproglessonspro59.service.TestDriveEmailService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/email/test-drive")
@RequiredArgsConstructor
@Slf4j
public class TestDriveEmailController {

    private final TestDriveEmailService testDriveEmailService;

    @PostMapping("/confirmation")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void sendConfirmation(@RequestBody @Valid TestDriveConfirmationEmailRequest request) {
        log.info("Sending test drive confirmation email: {}", request);
        testDriveEmailService.sendConfirmationEmail(request);
    }

    @PostMapping("/reminder")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void sendReminder(@RequestBody @Valid TestDriveConfirmationEmailRequest request) {
        log.info("Sending test drive reminder email: {}", request);
        testDriveEmailService.sendReminderEmail(request);
    }
}
