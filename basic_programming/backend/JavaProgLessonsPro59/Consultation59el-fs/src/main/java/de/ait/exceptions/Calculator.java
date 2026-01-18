package de.ait.exceptions;

public class Calculator {
    public static void main(String[] args) {
        DivisionExample divisionExample = new DivisionExample();
        try {
            divisionExample.divide(10, -2);
        }
        catch (NegativeNumberException exception){
            System.out.println("Negative numbers are not allowed!");
        }
    }
}
