package com.svfu.backend_diplom.services;

import com.svfu.backend_diplom.models.DTO.AuthorizationDTO;
import com.svfu.backend_diplom.models.DTO.ParkingDTO;
import com.svfu.backend_diplom.models.DTO.UserDTO;
import com.svfu.backend_diplom.models.Parking;
import com.svfu.backend_diplom.models.User;
import com.svfu.backend_diplom.repositories.ParkingRepository;
import com.svfu.backend_diplom.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ParkingRepository parkingRepository;
    public boolean doesUserExist(String name) {
        return userRepository.countAllByName(name) != 0;
    }

    public User addUser(UserDTO userDTO) {
        User user = new User();
        user.setName(userDTO.getName());
        user.setMail(userDTO.getMail());
        user.setPassword(userDTO.getPassword());
        user.setFull_name(userDTO.getFull_name());
        user.setPhone_number(userDTO.getPhone_number());
        user.setMoney(userDTO.getMoney());

        return userRepository.save(user);
    }
    public boolean checkPassword(AuthorizationDTO authorizationDTO) {
        try {
            User user = userRepository.findByName(authorizationDTO.getName());
            return authorizationDTO.getPassword().equals(user.getPassword());
        } catch (NullPointerException e) {
            return false;
        }

    }

    public Parking addParking(ParkingDTO parkingDTO) {
        Parking parking = new Parking();
        Long newId = (long) parkingDTO.getUserId();
        User user = userRepository.findById(newId).orElseThrow(() ->
                new RuntimeException(String.format("user with ID %d not found", newId)));

        parking.setUser(user);
        parking.setPrice(parkingDTO.getPrice());
        parking.setCar_number(parkingDTO.getCar_number());
        parking.setDate_to(parkingDTO.getDate_to());
        parking.setDate_from(parkingDTO.getDate_from());
        return parkingRepository.save(parking);
    }


}
