package de.ait.javaproglessonspro59;

import de.ait.javaproglessonspro59.model.Car;
import de.ait.javaproglessonspro59.repository.CarRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
@ActiveProfiles("test")
class LiquibaseSeedTestIT {

    @Autowired
    private CarRepository carRepository;

    @Test
    void testSeedOnlyInTestProfile() {
        List<Car> cars = carRepository.findAll();
        System.out.println(cars.size());
        assertTrue(cars.size() == 2);
    }
}
