package ivy.marvel.Capstone.Contoller;


import ivy.marvel.Capstone.Model.User;
import ivy.marvel.Capstone.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/userApi")
public class UserController {

    @Autowired
    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @CrossOrigin
    @PostMapping("/Register")
    public void registerUser(@RequestBody User newUser){
    userService.registerNewUser(newUser);

    @CrossOrigin
    @GetMapping Mapping("/Login")


}
}
