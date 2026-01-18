package de.ait.faker;

import net.datafaker.Faker;

import java.util.Locale;

public class FakerDemo {
    public static void main(String[] args) {
        Faker faker = new Faker(Locale.GERMANY);

        for (int i = 0; i < 10000; i++) {
            String firstname = faker.name().firstName();

            String lastname = faker.name().lastName();

            String email = faker.internet().emailAddress();

            int age = faker.number().numberBetween(18, 65);

            String phoneNumberMobile = faker.phoneNumber().cellPhone();
            String phoneNumber = faker.phoneNumber().phoneNumber();

            String streetAddress = faker.address().streetAddress();
            String city = faker.address().cityName();
            //String country = faker.address().country();
            String zipCode = faker.address().zipCode();


            System.out.println(firstname + " " + lastname + " " + email + " " + phoneNumberMobile + " " + phoneNumber + " " + age);
            System.out.println(streetAddress + " " + city + " "  + " " + zipCode);
            System.out.println("-----------------------------------------------");
        }

    }
}