import React, { Component } from 'react';
import './mugs.css';
import Typography from '@mui/material/Typography';
import {Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { BsFillStarFill } from "react-icons/bs";
import axios from 'axios';


export default class Miscellaneous extends Component {
    constructor(props){
        super(props)
        this.state = {
          misc:[],
          quantity:[0,0,0,0,0],
          remove:false
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
      <img src={miscs.images} width="200px" height="200px"></img>
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
            <Button size="small"  onClick={() => this.Remove(miscs.id - 1)} disabled={this.state.remove}><RemoveIcon/></Button>
            <Typography variant="body3" color="red">
            Add to Cart ({this.state.quantity[miscs.id -1]})
                          </Typography>
            <Button size="small"  onClick={() =>this.Add(miscs.id - 1)}><AddIcon/></Button>
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