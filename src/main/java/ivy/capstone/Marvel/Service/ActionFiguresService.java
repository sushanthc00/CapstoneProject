package ivy.capstone.Marvel.Service;

import ivy.capstone.Marvel.Model.ActionFigures;
import ivy.capstone.Marvel.Repository.ActionFiguresRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ActionFiguresService {

    @Autowired
    public ActionFiguresRepository actionFiguresRepo;

    public ActionFiguresRepository getActionFiguresRepo() {
        return actionFiguresRepo;
    }

    public void setActionFiguresRepo(ActionFiguresRepository actionFiguresRepo) {
        this.actionFiguresRepo = actionFiguresRepo;
    }

    public List<ActionFigures> getActionFigures() {
        return actionFiguresRepo.findAll();
    }
}
