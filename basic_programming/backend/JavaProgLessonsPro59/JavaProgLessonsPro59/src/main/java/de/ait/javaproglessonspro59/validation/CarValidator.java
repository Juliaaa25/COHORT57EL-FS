package de.ait.javaproglessonspro59.validation;

import de.ait.javaproglessonspro59.model.Car;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class CarValidator {

    private static final Logger log = LoggerFactory.getLogger(CarValidator.class);

    public boolean isValid(Car car) {
        boolean valid =
                car != null &&
                        car.getBrand() != null && !car.getBrand().isBlank() &&
                        car.getModel() != null && !car.getModel().isBlank() &&
                        car.getProductionYear() >= 1900 &&
                        car.getMileage() >= 0 &&
                        car.getPrice() >= 1 &&
                        car.getStatus() != null &&
                        car.getColor() != null && !car.getColor().isBlank() &&
                        car.getHorsepower() >= 1 &&
                        car.getFuelType() != null &&
                        car.getTransmission() != null;

        if (!valid) {
            log.warn("Invalid car object received: {}", car);
        }

        return valid;
    }

    // ⭐
    public List<String> validateWithErrors(Car car) {
        List<String> errors = new ArrayList<>();

        if (car == null) {
            errors.add("Car object is null");
            return errors;
        }

        if (car.getBrand() == null || car.getBrand().isBlank())
            errors.add("Brand must not be empty");

        if (car.getModel() == null || car.getModel().isBlank())
            errors.add("Model must not be empty");

        if (car.getProductionYear() < 1900)
            errors.add("Production year must be >= 1900");

        if (car.getMileage() < 0)
            errors.add("Mileage must be >= 0");

        if (car.getPrice() < 1)
            errors.add("Price must be >= 1");

        if (car.getStatus() == null)
            errors.add("Status must not be null");

        if (car.getColor() == null || car.getColor().isBlank())
            errors.add("Color must not be empty");

        if (car.getHorsepower() < 1)
            errors.add("Horsepower must be >= 1");

        if (car.getFuelType() == null)
            errors.add("Fuel type must not be null");

        if (car.getTransmission() == null)
            errors.add("Transmission must not be null");

        if (!errors.isEmpty()) {
            log.error("Car validation failed: {}, errors: {}", car, errors);
        }

        return errors;
    }
}
