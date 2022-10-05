import React, { Component } from 'react';
import './mugs.css';
import Typography from '@mui/material/Typography';
import {Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { BsFillStarFill } from "react-icons/bs";
import Avengers from "../images/avengersmug.jpg"
import Marvel from "../images/marvelmug.jpg"
import Cap from "../images/capmug.jpg"
import IronMan from "../images/ironmanmug.jpg"
import Spidey from "../images/spidermanmug.jpg"
import axios from "axios";
import ProductService from '../../services/productservice';


export default class Mugs extends Component {
    constructor(props){
        super(props)
        this.state = {
            products:[],
            images:[{key : 1, value : Cap}, {key : 2, value: IronMan}, {key : 3, value : Spidey},
                    {key : 4, value : Marvel}, {key : 5, value: Avengers}],
            i:0, j:0
    };
  }
  
    componentDidMount(){

      axios.get("http://localhost:7658/api/Product/newproduct").then((res)=>{
        this.setState({products:res.data});
            });
        }
  
render() {
  return (
    <>
    <Navbar />
    
    
      <div className='box'>

        {this.state.products.map(
          (product) =>

          <>
          <div className="container">
          <div className='image'>
        <img src={this.state.images[this.state.i++].value} width="200px" height="200px"></img>
        <Typography gutterBottom variant="h5" component="div">
               {product.productName}
              </Typography>
              <Typography variant="body3" color="text.secondary">
                <div className='rating'>
                    <BsFillStarFill /> {product.ratings}
                </div>
                </Typography>
                
                <Typography variant="body3" color="text.primary">
                   MRP : Rs. {product.price}<br/>
                   
              </Typography>

              <div className='buttons'>
              <Button size="small" onClick={this.Remove} disabled={this.state.remove}><RemoveIcon/></Button>
              <Typography variant="body3" color="red">
              Add to Cart ({this.state.quantity})
                            </Typography>
              <Button size="small"  onClick={this.Add}><AddIcon/></Button>
              </div>
              </div>
              </div>
              </>
              
        )}
        </div>
   
    <Footer />
    </>
  );
}
}

