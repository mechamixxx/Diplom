package com.svfu.backend_diplom.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="booking")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private int id;

    @ManyToOne
    @JoinColumn(name="hotel_id", nullable=false)
    private Hotel hotel;

    @Column(name = "date_from")
    private Date date_from;

    @Column(name = "date_to")
    private Date date_to;

    @Column(name = "price")
    private int price;

    @ManyToOne
    @JoinColumn(name="user_id", nullable=false)
    private User user;

}
