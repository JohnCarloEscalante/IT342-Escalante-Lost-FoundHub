package edu.cit.escalante.lostfoundhub.repository;

import edu.cit.escalante.lostfoundhub.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ItemRepository extends JpaRepository<Item, Long> {

    List<Item> findByOwnerEmail(String ownerEmail);

}