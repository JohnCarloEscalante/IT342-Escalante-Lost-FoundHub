package edu.cit.escalante.lostfoundhub.repository;

import edu.cit.escalante.lostfoundhub.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    boolean existsByEmail(String email);

}