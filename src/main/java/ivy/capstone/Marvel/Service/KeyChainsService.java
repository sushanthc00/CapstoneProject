package ivy.capstone.Marvel.Service;

import ivy.capstone.Marvel.Model.KeyChains;
import ivy.capstone.Marvel.Repository.KeyChainsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KeyChainsService {

    @Autowired
    private KeyChainsRepository keyChainsRepo;

    public KeyChainsRepository getKeyChainsRepo() {
        return keyChainsRepo;
    }

    public void setKeyChainsRepo(KeyChainsRepository keyChainsRepo) {
        this.keyChainsRepo = keyChainsRepo;
    }

    public List<KeyChains> getKeyChains() {
        return keyChainsRepo.findAll();
    }
}
