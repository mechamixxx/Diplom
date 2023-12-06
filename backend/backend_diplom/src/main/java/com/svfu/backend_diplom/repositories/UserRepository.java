package com.svfu.backend_diplom.repositories;

import com.svfu.backend_diplom.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    User findByName(String name);
    int countAllByName(String name);
}
