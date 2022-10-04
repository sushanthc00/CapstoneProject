package ivy.capstone.Marvel.Service;


import ivy.capstone.Marvel.Model.Products;
import ivy.capstone.Marvel.Repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.imageio.spi.ServiceRegistry;

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

    public Products getProduct(int product_id) {
        return productsRepo.findById(product_id).get();
    }
}

