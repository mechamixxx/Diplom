package com.svfu.backend_diplom.repositories;

import com.svfu.backend_diplom.models.Parking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ParkingRepository extends JpaRepository<Parking,Long>{
}
