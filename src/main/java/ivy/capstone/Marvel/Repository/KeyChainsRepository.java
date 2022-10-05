package ivy.capstone.Marvel.Repository;

import ivy.capstone.Marvel.Model.KeyChains;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KeyChainsRepository extends JpaRepository<KeyChains, Long> {
}
