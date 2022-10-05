package ivy.capstone.Marvel.Service;

import ivy.capstone.Marvel.Model.Misc;
import ivy.capstone.Marvel.Repository.MiscRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MiscService {

    @Autowired
    public MiscRepository miscRepository;

    public MiscRepository getMiscRepository() {
        return miscRepository;
    }

    public void setMiscRepository(MiscRepository miscRepository) {
        this.miscRepository = miscRepository;
    }

    public List<Misc> getMisc() {
        return miscRepository.findAll();
    }
}
