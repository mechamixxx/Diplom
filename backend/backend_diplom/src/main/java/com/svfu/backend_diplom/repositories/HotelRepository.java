package com.svfu.backend_diplom.repositories;

import com.svfu.backend_diplom.models.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HotelRepository extends JpaRepository<Hotel,Long> {

}
