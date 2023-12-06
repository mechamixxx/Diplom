package com.svfu.backend_diplom.repositories;

import com.svfu.backend_diplom.models.User;
import com.svfu.backend_diplom.models.VipZone;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VipZoneRepository extends JpaRepository<VipZone,Long> {
}
