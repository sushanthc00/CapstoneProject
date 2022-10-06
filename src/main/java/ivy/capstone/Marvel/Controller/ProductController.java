package ivy.capstone.Marvel.Controller;

import ivy.capstone.Marvel.Model.ActionFigures;
import ivy.capstone.Marvel.Model.KeyChains;
import ivy.capstone.Marvel.Model.Misc;
import ivy.capstone.Marvel.Model.Products;
import ivy.capstone.Marvel.Service.ActionFiguresService;
import ivy.capstone.Marvel.Service.KeyChainsService;
import ivy.capstone.Marvel.Service.MiscService;
import ivy.capstone.Marvel.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/Product")
public class ProductController {

    @Autowired
    private ProductService productService;

    @Autowired
    private KeyChainsService keyChainsService;

    @Autowired
    private ActionFiguresService actionFiguresService;

    @Autowired
    private MiscService miscService;

    public ProductService getProductService() {
        return productService;
    }

    public void setProductService(ProductService productService) {
        this.productService = productService;
    }

    public KeyChainsService getKeyChainsService() {
        return keyChainsService;
    }

    public void setKeyChainsService(KeyChainsService keyChainsService) {
        this.keyChainsService = keyChainsService;
    }

    public ActionFiguresService getActionFiguresService() {
        return actionFiguresService;
    }

    public void setActionFiguresService(ActionFiguresService actionFiguresService) {
        this.actionFiguresService = actionFiguresService;
    }

    public MiscService getMiscService() {
        return miscService;
    }

    public void setMiscService(MiscService miscService) {
        this.miscService = miscService;
    }

    @CrossOrigin
    @GetMapping("/newproduct")
    public List<Products> list(){
        return productService.getProducts();
    }

    @CrossOrigin
    @GetMapping("/keychains")
    public List<KeyChains> chains(){
        return keyChainsService.getKeyChains();
    }

    @CrossOrigin
    @GetMapping("/actionfigures")
    public List<ActionFigures> figures(){
        return actionFiguresService.getActionFigures();
    }

    @CrossOrigin
    @GetMapping("/misc")
    public List<Misc> misc(){
        return miscService.getMisc();
    }
}

