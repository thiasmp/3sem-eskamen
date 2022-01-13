package dtos;

public class BoatDTO {
    private String name;
    private String brand;
    private int year;

    public BoatDTO() {
    }

    public BoatDTO(String name, String brand, int year)  {
        this.name = name;
        this.brand = brand;
        this.year = year;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }
}
