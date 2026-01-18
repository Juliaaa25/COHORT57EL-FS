package de.ait.faker;

import net.datafaker.Faker;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class AgeValidatorTest {
    private final Faker faker = new Faker();

    AgeValidator ageValidator = new AgeValidator();

    @Test
    @DisplayName("Валидация возраста между 18 и 65")
    void testAgeIsValid() {
        int age = faker.number().numberBetween(18, 65);
        assertTrue(ageValidator.isValid(age));
    }

    @Test
    @DisplayName("Валидация возраста между 0 и 17")
    void testAgeIsNotValid() {
        int age = faker.number().numberBetween(0, 17);
        assertFalse(ageValidator.isValid(age));
    }

}