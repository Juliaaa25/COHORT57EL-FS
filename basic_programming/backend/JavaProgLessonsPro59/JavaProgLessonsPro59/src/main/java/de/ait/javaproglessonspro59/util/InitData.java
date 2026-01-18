package de.ait.javaproglessonspro59.util;

import de.ait.javaproglessonspro59.model.Car;
import de.ait.javaproglessonspro59.repository.CarRepository;
import de.ait.javaproglessonspro59.enums.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class InitData {
    @Bean
    CommandLineRunner initDatabase(CarRepository carRepository) {
        return args -> {
            if(carRepository.count() == 0){

                carRepository.save(new Car(
                        "BMW", "X5",
                        2019,
                        50000,
                        85000,
                        CarStatus.AVAILABLE,
                        FuelType.DIESEL,
                        Transmission.AUTOMATIC,
                        "Black",
                        300
                ));

                carRepository.save(new Car(
                        "BMW", "M3",
                        2021,
                        30000,
                        120000,
                        CarStatus.AVAILABLE,
                        FuelType.PETROL,
                        Transmission.AUTOMATIC,
                        "Blue",
                        200
                ));

                carRepository.save(new Car(
                        "Audi", "A4",
                        2018,
                        70000,
                        45000,
                        CarStatus.AVAILABLE,
                        FuelType.PETROL,
                        Transmission.MANUAL,
                        "White",
                        120
                ));

                carRepository.save(new Car(
                        "Audi", "Q7",
                        2020,
                        60000,
                        90000,
                        CarStatus.SOLD,
                        FuelType.DIESEL,
                        Transmission.AUTOMATIC,
                        "Gray",
                        400
                ));

                carRepository.save(new Car(
                        "Mercedes", "C-Class",
                        2020,
                        40000,
                        60000,
                        CarStatus.AVAILABLE,
                        FuelType.HYBRID,
                        Transmission.AUTOMATIC,
                        "Silver",
                        333
                ));

                carRepository.save(new Car(
                        "Mercedes", "GLE",
                        2022,
                        25000,
                        110000,
                        CarStatus.AVAILABLE,
                        FuelType.DIESEL,
                        Transmission.AUTOMATIC,
                        "Black",
                        222
                ));

                carRepository.save(new Car(
                        "Tesla", "Model 3",
                        2023,
                        15000,
                        55000,
                        CarStatus.AVAILABLE,
                        FuelType.ELECTRIC,
                        Transmission.AUTOMATIC,
                        "Red",
                        128
                ));

                carRepository.save(new Car(
                        "Toyota", "Corolla",
                        2017,
                        90000,
                        25000,
                        CarStatus.SOLD,
                        FuelType.PETROL,
                        Transmission.MANUAL,
                        "White",
                        200
                ));

                carRepository.save(new Car(
                        "Volkswagen", "Golf",
                        2019,
                        65000,
                        30000,
                        CarStatus.AVAILABLE,
                        FuelType.PETROL,
                        Transmission.MANUAL,
                        "Blue",
                        180
                ));

            }
        };
    }
}