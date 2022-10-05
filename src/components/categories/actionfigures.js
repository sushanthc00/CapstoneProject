import React, { Component } from 'react';
import './mugs.css';
import Typography from '@mui/material/Typography';
import {Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { BsFillStarFill } from "react-icons/bs";
import Thanos from "../images/thanosaf.jpg"
import CapMarvel from "../images/marvelaf.jpg"
import Groot from "../images/grootaf.jpg"
import Thor from "../images/thoraf.jpg"
import Infinity from "../images/infinityaf.jpg"
import axios from 'axios';


export default class ActionFigures extends Component {
    constructor(props){
        super(props)
        this.state = {
          figures:[],
          images:[{key : 1, value : Thanos}, {key : 2, value: Thor}, {key : 3, value : Groot},
                  {key : 4, value : CapMarvel}, {key : 5, value: Infinity}],
          i:0, j:0
  };
}

  componentDidMount(){

    axios.get("http://localhost:7658/api/Product/actionfigures").then((res)=>{
      this.setState({figures:res.data});
          });
      }

render() {
return (
  <>
  <Navbar />
  
  
    <div className='box'>

      {this.state.figures.map(
        (figure) =>

        <>
        <div className="container">
        <div className='image'>
      <img src={this.state.images[this.state.i++].value} width="200px" height="200px"></img>
      <Typography gutterBottom variant="h5" component="div">
             {figure.name}
            </Typography>
            <Typography variant="body3" color="text.secondary">
              <div className='rating'>
                  <BsFillStarFill /> {figure.ratings}
              </div>
              </Typography>
              
              <Typography variant="body3" color="text.primary">
                 MRP : Rs. {figure.price}<br/>
                 
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
        

