package de.ait.exceptions;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class FileExample {
    public void readFile() {
        BufferedReader br;
        try {
            br= new BufferedReader(new FileReader("file.txt"));
            String line = br.readLine();
            System.out.println(line);
            br.close();
        }
        catch (FileNotFoundException exception){
            System.out.println("File not found!");
        }
        catch (IOException exception){
            System.out.println("Error reading file!");
        }
        finally {
            System.out.println("This always executes!");
        }

    }
}
