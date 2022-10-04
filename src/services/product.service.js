import axios from "axios";

const API_URL_PRODUCT = "http://localhost:7658/api/Product/";

class ProductService{
    products(){
        return axios
        .get(API_URL_PRODUCT + "newproduct/{product_id}");
    }
}

export default ProductService;

