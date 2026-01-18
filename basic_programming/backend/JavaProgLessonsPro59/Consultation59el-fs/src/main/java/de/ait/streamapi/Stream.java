package de.ait.streamapi;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

public class StreamApiExamples {
    public static void main(String[] args) {
        /**
         1. только положительные
         2. берем только четные
         3. умножаем их на 2
         4. собираем результат в новый список
         */

        Predicate<Integer> isEven = number -> number % 2 == 0;

        List<Integer> result = new ArrayList<>();

        List<Integer> numbers = List.of(-2, -1, 0, 1, 2, 3, 4, 5);
        for (Integer number : numbers) {
            if (number > 0) {
                if (number % 2 == 0) {
                    int doubledNumber = number * 2;
                    result.add(doubledNumber);
                }
            }
        }
        System.out.println(result);

        List<Integer> resultStreamApi = numbers.stream() //source
                .filter(number -> number >0) //pipeline
                .filter(number -> number%2 == 0)
                .map(number -> number * 2) //--> lazy evaluation ленивое выполнение
                .toList(); //terminal operation запуск
        System.out.println(resultStreamApi);

        Stream<Integer> stream = numbers.stream();
        stream.forEach(System.out::println);
        //stream.forEach(System.out::println);  //stream одноразовый

        List<String> list = List.of("Anna", "Boris", "Catharina");
        List<String> upperNames = list.stream()
                .filter(name -> name.length() > 5)
                .filter(name -> name.startsWith("C"))
                .map(name -> name.toUpperCase())
                .toList();
        System.out.println(upperNames);

        List<Integer> numbers2 = List.of(145, 2, 33, 4, 5, 66, 7, 8766, 9, 10);
        List<Integer> sorted = numbers2.stream()
                .sorted((a,b)-> b-a)
                .limit(3)
                //.skip(3)
                .toList();
        System.out.println(sorted);

        long count = numbers2.stream()
                .filter(number ->number > 50)
                .count();
        System.out.println("Count --> " + count);

        Optional<Integer> first = numbers2.stream()
                .filter(number -> number > 500)
                .findFirst();
        if(first.isPresent()){
            System.out.println("Fing first " + first.get());
        }
        else {
            System.out.println("No element found");
        }

        numbers.stream()
                .forEach(number -> {
                    System.out.print(number + " ");
                });

    }


}