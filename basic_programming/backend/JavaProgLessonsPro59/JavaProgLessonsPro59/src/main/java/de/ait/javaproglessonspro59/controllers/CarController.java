package de.ait.javaproglessonspro59.controllers;

import de.ait.javaproglessonspro59.enums.FuelType;
import de.ait.javaproglessonspro59.model.Car;
import de.ait.javaproglessonspro59.repository.CarRepository;
import de.ait.javaproglessonspro59.validation.CarValidator;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Tag(name = "Car management API")
@RestController
@RequestMapping("/api/cars")
@Slf4j
public class CarController {

    private final CarRepository carRepository;
    private final CarValidator carValidator;

    @Value("${app.dealership.name:Welcome to AIT Gr.59 API}")
    private String dealershipName;

    public CarController(CarRepository carRepository,
                         CarValidator carValidator) {
        this.carRepository = carRepository;
        this.carValidator = carValidator;
    }


    @GetMapping("/info")
    public ResponseEntity<String> getInfo() {
        return ResponseEntity.ok(
                "Welcome to the " + dealershipName + " car dealership!"
        );
    }


    @Operation(summary = "Get all cars")
    @GetMapping
    public ResponseEntity<List<Car>> getAllCars() {
        return ResponseEntity.ok(carRepository.findAll());
    }


    @GetMapping("/{id}")
    public ResponseEntity<Car> getCarById(@PathVariable Long id) {
        return carRepository.findById(id)
                .map(car -> {
                    log.info("Car with id {} found", id);
                    return ResponseEntity.ok(car);
                })
                .orElseGet(() -> {
                    log.warn("Car with id {} not found", id);
                    return ResponseEntity.notFound().build();
                });
    }


    @Operation(summary = "Delete a car by id")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCar(@PathVariable Long id) {
        if (!carRepository.existsById(id)) {
            log.warn("Car with id {} not found", id);
            return ResponseEntity.notFound().build();
        }
        carRepository.deleteById(id);
        log.info("Car with id {} deleted", id);
        return ResponseEntity.noContent().build();
    }


    // /api/cars/search?brand=BMW
    @GetMapping("/search")
    public ResponseEntity<List<Car>> searchCars(
            @RequestParam String brand) {
        return ResponseEntity.ok(
                carRepository.findByBrandIgnoreCase(brand)
        );
    }


    @Operation(summary = "Add a new car")
    @PostMapping
    public ResponseEntity<?> addCar(@RequestBody Car car) {

        List<String> errors = carValidator.validateWithErrors(car);
        if (!errors.isEmpty()) {
            log.warn("Invalid car: {}", errors);
            return ResponseEntity.badRequest().body(
                    Map.of("errors", errors)
            );
        }

        Car savedCar = carRepository.save(car);
        log.info("Car with id {} saved", savedCar.getId());
        return ResponseEntity.status(201).build();
    }


    @Operation(summary = "Update car by id")
    @PutMapping("/{id}")
    public ResponseEntity<?> updateCar(@PathVariable Long id, @RequestBody Car car) {

        if (!carRepository.existsById(id)) {
            log.warn("Car with id {} not found", id);
            return ResponseEntity.notFound().build();
        }

        if (!carValidator.isValid(car)) {
            log.warn("Invalid car object received for update: {}", car);
            return ResponseEntity.badRequest().body("Car is invalid");
        }

        Car carToUpdate = carRepository.findById(id).get();

        // Обновляем все поля
        carToUpdate.setBrand(car.getBrand());
        carToUpdate.setModel(car.getModel());
        carToUpdate.setProductionYear(car.getProductionYear());
        carToUpdate.setMileage(car.getMileage());
        carToUpdate.setPrice(car.getPrice());
        carToUpdate.setStatus(car.getStatus());
        carToUpdate.setColor(car.getColor());
        carToUpdate.setHorsepower(car.getHorsepower());
        carToUpdate.setFuelType(car.getFuelType());
        carToUpdate.setTransmission(car.getTransmission());

        carRepository.save(carToUpdate);
        log.info("Car with id {} updated successfully", id);

        return ResponseEntity.ok().build();
    }



    @GetMapping("/by-price")
    public ResponseEntity<List<Car>> searchByPriceBetween(
            @RequestParam int min,
            @RequestParam int max) {
        return ResponseEntity.ok(
                carRepository.findByPriceBetween(min, max)
        );
    }


    @GetMapping("/by-color")
    public ResponseEntity<List<Car>> getCarByColor(
            @RequestParam String color) {

        List<Car> cars =
                carRepository.findByColorIgnoreCase(color);

        if (cars.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(cars);
    }


    @GetMapping("/by-fuel")
    public ResponseEntity<List<Car>> getCarByFuelType(
            @RequestParam FuelType fuelType) {

        List<Car> cars =
                carRepository.findByFuelType(fuelType);

        if (cars.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(cars);
    }


    @GetMapping("/by-power")
    public ResponseEntity<List<Car>> searchByHorsePower(
            @RequestParam int minHp,
            @RequestParam int maxHp) {

        if (minHp < 0 || maxHp < 0 || minHp > maxHp) {
            return ResponseEntity.badRequest().build();
        }

        List<Car> cars =
                carRepository.findByHorsepowerBetween(minHp, maxHp);

        if (cars.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(cars);
    }

}
