package com.svfu.backend_diplom.controllers;

import com.svfu.backend_diplom.models.Booking;
import com.svfu.backend_diplom.models.DTO.AuthorizationDTO;
import com.svfu.backend_diplom.models.DTO.BookingDTO;
import com.svfu.backend_diplom.models.Hotel;
import com.svfu.backend_diplom.models.Room;
import com.svfu.backend_diplom.repositories.HotelRepository;
import com.svfu.backend_diplom.repositories.Hotel_ImageRepository;
import com.svfu.backend_diplom.repositories.RoomRepository;
import com.svfu.backend_diplom.services.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/hotel")
@CrossOrigin(origins="*")
public class HotelController {

    @Autowired
    private Hotel_ImageRepository hotelImageRepository;

    @Autowired
    private HotelService hotelService;

    @Autowired
    private HotelRepository hotelRepository;

    @Autowired
    private RoomRepository roomRepository;

    @GetMapping
    List<Hotel> getHotels() {
        return hotelRepository.findAll();
    }

    @GetMapping("/{id}")
    Hotel getHotelById(@PathVariable Long id) {
        return hotelService.getHotelById(id);
    }

    @GetMapping("/rooms")
    List<Room> getHotelRooms() {
        return roomRepository.findAll();
    }

    @GetMapping("/image/{id}")
    List<Room> getHotelImagesById(@PathVariable Long id) {
        return roomRepository.findAll();
    }

    @PostMapping("/book")
    ResponseEntity<String> createBooking(@RequestBody BookingDTO bookingDTO) {
        hotelService.addBooking(bookingDTO);
        return new ResponseEntity<>("Booking is added", HttpStatus.OK);
    }

    @GetMapping("/book/{userId}")
    List<Booking> getBookingsByUserId(@PathVariable Long userId) {
        return hotelService.getBookingsByUserId(userId);
    }

}
