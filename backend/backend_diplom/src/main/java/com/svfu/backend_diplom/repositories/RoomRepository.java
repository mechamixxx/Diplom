package com.svfu.backend_diplom.repositories;

import com.svfu.backend_diplom.models.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface RoomRepository extends JpaRepository<Room,Long> {
}
