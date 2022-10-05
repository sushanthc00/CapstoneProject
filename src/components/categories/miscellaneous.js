import React, { Component } from 'react';
import './mugs.css';
import Typography from '@mui/material/Typography';
import {Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { BsFillStarFill } from "react-icons/bs";
import Book from "../images/book.png"
import Brushes from "../images/brushes.jpg"
import Cap from "../images/bracelet.jpg"
import Tchalla from "../images/tchalla.jpg"
import Hydra from "../images/hydrapedant.jpg";
import axios from 'axios';
import ProductService from '../../services/productservice';


export default class Miscellaneous extends Component {
    constructor(props){
        super(props)
        this.state = {
          misc:[],
          images:[{key : 1, value : Cap}, {key : 2, value: Book}, {key : 3, value : Tchalla},
                  {key : 4, value : Brushes}, {key : 5, value: Hydra}],
          i:0, j:0
  };
}

  componentDidMount(){

    axios.get("http://localhost:7658/api/Product/misc").then((res)=>{
      this.setState({misc:res.data});
          });
      }

render() {
return (
  <>
  <Navbar />
  
  
    <div className='box'>

      {this.state.misc.map(
        (miscs) =>

        <>
        <div className="container">
        <div className='image'>
      <img src={this.state.images[this.state.i++].value} width="200px" height="200px"></img>
      <Typography gutterBottom variant="h5" component="div">
             {miscs.name}
            </Typography>
            <Typography variant="body3" color="text.secondary">
              <div className='rating'>
                  <BsFillStarFill /> {miscs.ratings}
              </div>
              </Typography>
              
              <Typography variant="body3" color="text.primary">
                 MRP : Rs. {miscs.price}<br/>
                 
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