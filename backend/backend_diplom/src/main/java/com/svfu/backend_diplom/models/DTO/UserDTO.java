package com.svfu.backend_diplom.models.DTO;

import lombok.Data;

@Data
public class UserDTO {
    private String name;
    private String password;
    private String mail;
    private int phone_number;
    private int money;
    private String full_name;
}
