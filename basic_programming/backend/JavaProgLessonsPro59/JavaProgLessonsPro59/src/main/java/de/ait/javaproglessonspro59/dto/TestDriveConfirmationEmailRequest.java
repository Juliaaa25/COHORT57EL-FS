package de.ait.javaproglessonspro59.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TestDriveConfirmationEmailRequest {

    @Email(message = "Invalid email format")
    @NotBlank(message = "Client email is mandatory")
    private String clientEmail;

    @NotBlank(message = "Client name is mandatory")
    private String clientName;

    @NotNull(message = "Car ID is mandatory")
    private Long carId;

    @NotBlank(message = "Test drive date time is mandatory")
    private String testDriveDateTime;

    @NotBlank(message = "Dealer address is mandatory")
    private String dealerAddress;

    @NotBlank(message = "Dealer phone is mandatory")
    private String dealerPhone;
}
