package com.svfu.backend_diplom.services;

import com.svfu.backend_diplom.models.Booking;
import com.svfu.backend_diplom.models.DTO.BookingDTO;
import com.svfu.backend_diplom.models.Hotel;
import com.svfu.backend_diplom.repositories.BookingRepository;
import com.svfu.backend_diplom.repositories.HotelRepository;
import com.svfu.backend_diplom.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HotelService {
    @Autowired
    HotelRepository hotelRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    BookingRepository bookingRepository;

    public Hotel getHotelById(long id) {
        return hotelRepository.findById(id).orElseThrow(() ->
                new RuntimeException(String.format("Hotel with ID %d not found", id)));

    }

    public void addBooking(BookingDTO bookingDTO) {
        Booking booking = new Booking();
        Long newUserId = (long) bookingDTO.getUserId();
        Long newHotelId = (long) bookingDTO.getHotelId();

        booking.setUser(userRepository.findById(newUserId).orElseThrow(() ->
                new RuntimeException(String.format("User with ID %d not found", newUserId))));

        booking.setHotel(hotelRepository.findById(newHotelId).orElseThrow(() ->
                new RuntimeException(String.format("Hotel with ID %d not found", newHotelId))));

        booking.setPrice(bookingDTO.getPrice());
        booking.setDate_to(bookingDTO.getDate_to());
        booking.setDate_from(bookingDTO.getDate_from());
        bookingRepository.save(booking);
    }

    public List<Booking> getBookingsByUserId(Long userId) {
        return bookingRepository.findAll().stream().filter(p -> p.getUser().getId() == userId).toList();
    }
}
