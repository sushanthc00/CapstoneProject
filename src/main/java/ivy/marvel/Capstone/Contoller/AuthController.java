package ivy.marvel.Capstone.Contoller;

import ivy.marvel.Capstone.Model.User;
import ivy.marvel.Capstone.Repository.UserRepository;
import ivy.marvel.Capstone.Request.LoginRequest;
import ivy.marvel.Capstone.Request.RegisterRequest;
import ivy.marvel.Capstone.Response.JwtResponse;
import ivy.marvel.Capstone.Response.MessageResponse;
import ivy.marvel.Capstone.Security.jwt.JwtUtils;
import ivy.marvel.Capstone.Security.service.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;

    @CrossOrigin
    @PostMapping("/Login")
    public ResponseEntity<?> authenticateuser(@RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

        return ResponseEntity
                .ok(new JwtResponse(jwt, userDetails.getId(), userDetails.getUsername()));
    }

    @CrossOrigin
    @PostMapping("/Register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterRequest registerRequest) {
        if (userRepository.existsByUsername(registerRequest.getUsername())) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: username is already taken!"));
        }

        // Create new user account
        User user = new User(registerRequest.getUsername(),
                encoder.encode(registerRequest.getPassword()));

        userRepository.save(user);

        return ResponseEntity.ok(new MessageResponse("user registered successfully!"));
    }
}
