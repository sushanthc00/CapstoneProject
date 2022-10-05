import axios from "axios";

const API_URL_PRODUCT = "http://localhost:7658/api/Product/newproduct";

class ProductService{
    getproducts(){

        return axios.get(API_URL_PRODUCT);
    }
}

export default new ProductService();

