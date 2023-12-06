package com.svfu.backend_diplom.repositories;

import com.svfu.backend_diplom.models.Hotel_Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Hotel_ImageRepository extends JpaRepository<Hotel_Image,Long> {
}
