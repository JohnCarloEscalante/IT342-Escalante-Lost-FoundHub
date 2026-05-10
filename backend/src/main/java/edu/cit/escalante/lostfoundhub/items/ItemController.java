package edu.cit.escalante.lostfoundhub.items;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/items")
@CrossOrigin(origins = "http://localhost:5173")
public class ItemController {

    @Autowired
    private ItemService itemService;

    @PostMapping
    public Item createItem(@RequestBody Item item) {
        return itemService.createItem(item);
    }

    @GetMapping
    public List<Item> getAllItems() {
        return itemService.getAllItems();
    }

    @GetMapping("/user/{email}")
    public List<Item> getUserItems(
            @PathVariable String email
    ) {
        return itemService.getUserItems(email);
    }

    @PutMapping("/{id}/status")
    public Item updateStatus(
            @PathVariable Long id,
            @RequestParam String status
    ) {
        return itemService.updateStatus(id, status);
    }

    @DeleteMapping("/{id}")
    public void deleteItem(
            @PathVariable Long id
    ) {
        itemService.deleteItem(id);
    }
}