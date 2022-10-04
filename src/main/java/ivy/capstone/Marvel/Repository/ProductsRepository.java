package ivy.capstone.Marvel.Repository;

import ivy.capstone.Marvel.Model.Products;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductsRepository extends JpaRepository<Products, Integer> {
}
