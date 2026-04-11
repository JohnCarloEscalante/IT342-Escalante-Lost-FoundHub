package edu.cit.escalante.lostfoundhub.service;

import edu.cit.escalante.lostfoundhub.dto.LoginRequest;
import edu.cit.escalante.lostfoundhub.dto.RegisterRequest;
import edu.cit.escalante.lostfoundhub.model.User;
import edu.cit.escalante.lostfoundhub.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public String register(RegisterRequest request){

        if(userRepository.existsByEmail(request.getEmail())){
            return "Email already registered";
        }

        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());

        String hashedPassword = passwordEncoder.encode(request.getPassword());
        user.setPassword(hashedPassword);

        userRepository.save(user);

        return "User registered successfully";
    }

    public String login(LoginRequest request){

        User user = userRepository.findByEmail(request.getEmail())
                .orElse(null);

        if(user == null){
            return "Invalid email or password";
        }

        if(!passwordEncoder.matches(request.getPassword(), user.getPassword())){
            return "Invalid email or password";
        }

        return "Login successful";
    }

}