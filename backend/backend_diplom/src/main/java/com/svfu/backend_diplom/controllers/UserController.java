package com.svfu.backend_diplom.controllers;

import com.svfu.backend_diplom.models.DTO.AuthorizationDTO;
import com.svfu.backend_diplom.models.DTO.ParkingDTO;
import com.svfu.backend_diplom.models.DTO.UserDTO;
import com.svfu.backend_diplom.models.User;
import com.svfu.backend_diplom.repositories.UserRepository;
import com.svfu.backend_diplom.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins="*")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @GetMapping
    List<User> getUsers() {
        return userRepository.findAll();
    }

    @PostMapping("/signup")
    ResponseEntity<String> signUp(@RequestBody UserDTO userDTO) {
        if(!userService.doesUserExist(userDTO.getName())) {
            User user = userService.addUser(userDTO);
            return new ResponseEntity<>("Registered: " + user.getName(), HttpStatus.CREATED);
        }
        else return new ResponseEntity<>("This username is already taken", HttpStatus.UNPROCESSABLE_ENTITY);
    }

    @PostMapping("/signin")
    ResponseEntity<String> signIn(@RequestBody AuthorizationDTO authorizationDTO){
        if(userService.doesUserExist(authorizationDTO.getName())) {
            User user = userRepository.findByName(authorizationDTO.getName());
            String userId = Long.toString(user.getId());

            if (userService.checkPassword(authorizationDTO)) {
                return new ResponseEntity<>(userId, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Incorrect Password", HttpStatus.BAD_REQUEST);
            }
        } else return new ResponseEntity<>("Incorrect login", HttpStatus.UNPROCESSABLE_ENTITY);
    }

    @PostMapping("/parking")
    ResponseEntity<String> addParking(@RequestBody ParkingDTO parkingDTO) {
        userService.addParking(parkingDTO);
        return new ResponseEntity<>("Parking is added", HttpStatus.OK);
    }
}
