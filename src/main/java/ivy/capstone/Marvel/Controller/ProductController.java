package ivy.capstone.Marvel.Controller;


import ivy.capstone.Marvel.Model.Products;
import ivy.capstone.Marvel.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/Product")
public class ProductController {

    @Autowired
    private ProductService productService;

    public ProductService getProductService() {
        return productService;
    }

    public void setProductService(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/newproduct/{product_id}")
    public Products newProduct(@PathVariable("product_id") int product_id){
        return  productService.getProduct(product_id);
    }
}

