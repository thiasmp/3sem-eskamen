package dtos;

import entities.Auction;

import java.time.Clock;
import java.util.Date;

public class AuctionDTO {
    private String name;
    private String date;
    private String time;
    private String location;

    public AuctionDTO() {
    }

    public AuctionDTO(String name, String date, String time, String location) {
    this.name = name;
    this.date = date;
    this.time = time;
    this.location = location;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}


