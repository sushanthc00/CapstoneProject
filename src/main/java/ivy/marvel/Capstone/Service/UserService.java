package ivy.marvel.Capstone.Service;

import ivy.marvel.Capstone.Model.User;
import ivy.marvel.Capstone.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;

    public UserService(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    public UserRepository getUserRepo() {
        return userRepo;
    }

    public void setUserRepo(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    public void registerNewUser(User newUser) {
        userRepo.save(newUser);
    }
}
