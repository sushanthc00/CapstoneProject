import React, { Component } from 'react';
import './mugs.css';
import Typography from '@mui/material/Typography';
import {Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { BsFillStarFill } from "react-icons/bs";
import axios from "axios";
import ProductService from '../../services/productservice';


export default class Mugs extends Component {
    constructor(props){
        super(props)
        this.state = {
            products:[],
            i:0, j:0,
            quantity: [0,0,0,0,0],
            remove: false
    };
  }

  Add = i =>
    {
      this.setState(state => {
        const quantity = state.quantity.map((item, j) => {
          if (j === i) {
            return item + 1;
          } else {
            return item;
          }
        });
  
        return {
          quantity,
        };
      });

      this.setState({remove : false})

    };
    Remove = i =>
    {
    if(this.state.quantity[i] > 0)
    {

         this.setState(state => {
          const quantity = state.quantity.map((item, j) =>{
            if (j===i){
              return item - 1;
            }
            else{
              return item;
            }
          });

          return{
            quantity
          }

         })
    }
    else
    {
        this.setState({remove : true})
    }
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
        <img src={product.images} width="200px" height="200px"></img>
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
              <Button size="small" onClick={() => this.Remove(product.productId - 1)} disabled={this.state.remove}><RemoveIcon/></Button>
              <Typography variant="body3" color="red">
              Add to Cart ({this.state.quantity[product.productId -1]})
                            </Typography>
              <Button size="small" onClick={() =>this.Add(product.productId- 1)}><AddIcon/></Button>
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

