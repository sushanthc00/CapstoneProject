package ivy.capstone.Marvel.Service;


import ivy.capstone.Marvel.Model.Products;
import ivy.capstone.Marvel.Repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.imageio.spi.ServiceRegistry;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductsRepository productsRepo;

    public ProductsRepository getProductsRepo() {
        return productsRepo;
    }

    public void setProductsRepo(ProductsRepository productsRepo) {
        this.productsRepo = productsRepo;
    }

    public List<Products> getProducts() {
        return productsRepo.findAll();
    }
}

