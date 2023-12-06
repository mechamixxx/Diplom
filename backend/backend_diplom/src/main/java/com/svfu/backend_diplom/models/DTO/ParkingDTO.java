package com.svfu.backend_diplom.models.DTO;

import jakarta.persistence.Column;
import lombok.Data;

import java.util.Date;

@Data
public class ParkingDTO {
    private int userId;
    private int price;
    private Date date_from;
    private Date date_to;
    private String car_number;
}
