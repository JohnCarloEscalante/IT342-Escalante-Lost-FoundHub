package edu.cit.escalante.lostfoundhub.users;

import edu.cit.escalante.lostfoundhub.users.UpdateUserRequest;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // GET PROFILE
    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    // UPDATE PROFILE
    public User updateUser(Long id, UpdateUserRequest request) {
        User user = getUserById(id);

        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setProfileImage(request.getProfileImage());

        return userRepository.save(user);
    }
}