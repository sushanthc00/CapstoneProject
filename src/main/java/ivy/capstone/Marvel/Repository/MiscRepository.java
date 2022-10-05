package ivy.capstone.Marvel.Repository;

import ivy.capstone.Marvel.Model.Misc;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MiscRepository extends JpaRepository<Misc, Long> {
}
