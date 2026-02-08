package de.ait.exceptions;

public class DivisionExample {

    public int divide(int a, int b) {

        if (a < 0 || b < 0) {
            throw new NegativeNumberException("Negative numbers are not allowed!");
        }


        try {
            int result = a / b;

            System.out.println(result);

            return result;
        } catch (ArithmeticException e) {
            System.out.println("Can't divide by zero!");
            return -1;
        } catch (NullPointerException e) {
            System.out.println("Null pointer exception!");
            return -2;
        } catch (Exception e) {
            return -3;
        }

    }
}
