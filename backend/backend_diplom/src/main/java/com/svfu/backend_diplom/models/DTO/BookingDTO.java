package com.svfu.backend_diplom.models.DTO;

import jakarta.persistence.Column;
import lombok.Data;

import java.util.Date;
@Data
public class BookingDTO {
    private int userId;
    private int hotelId;
    private Date date_from;
    private Date date_to;
    private int price;

}

