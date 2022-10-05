package ivy.capstone.Marvel.Repository;

import ivy.capstone.Marvel.Model.ActionFigures;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ActionFiguresRepository extends JpaRepository<ActionFigures, Long> {
}
