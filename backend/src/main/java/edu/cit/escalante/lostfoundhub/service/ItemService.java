package edu.cit.escalante.lostfoundhub.service;

import edu.cit.escalante.lostfoundhub.model.Item;
import edu.cit.escalante.lostfoundhub.repository.ItemRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService {

    @Autowired
    private ItemRepository itemRepository;

    public Item createItem(Item item) {

        item.setStatus("Open");

        return itemRepository.save(item);
    }

    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    public List<Item> getUserItems(String ownerEmail) {
        return itemRepository.findByOwnerEmail(ownerEmail);
    }

    public Item updateStatus(Long id, String status) {

        Item item = itemRepository.findById(id).orElseThrow();

        item.setStatus(status);

        return itemRepository.save(item);
    }

    public void deleteItem(Long id) {
        itemRepository.deleteById(id);
    }
}