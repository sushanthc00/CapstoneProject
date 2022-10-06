import React, { Component } from 'react';
import './mugs.css';
import Typography from '@mui/material/Typography';
import {Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { BsFillStarFill } from "react-icons/bs";
import MoonKnight from "../images/mnkc.jpg"
import BlackPanther from "../images/bpkc.jpg"
import DrStrange from "../images/dskc.jpg"
import IronMan from "../images/imkc.jpg"
import Spidey from "../images/spideykc.jpg";
import axios from 'axios';


export default class Keychains extends Component {
    constructor(props){
        super(props)
        this.state = {
            chains: [],
            // images:[{key : 1, value : DrStrange}, {key : 2, value: IronMan}, {key : 3, value : Spidey},
            //   {key : 4, value : BlackPanther}, {key : 5, value: MoonKnight}],
            images: [DrStrange, IronMan, Spidey, BlackPanther, MoonKnight],
            i:0,
            j:0,
            quantity : [0,0,0,0,0],
            remove : false
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

      axios.get("http://localhost:7658/api/Product/keychains").then((res)=>{
        this.setState({chains:res.data});
            });
        }

render() {
  return (
    <>
    <Navbar />
    
    <div className='box'>

      {this.state.chains.map(
        (chain) =>

        <>
        <div className="container">
        <div className='image'>
   
      <img src={this.state.images[chain.id - 1]} width="200px" height="200px"></img>
      <Typography gutterBottom variant="h5" component="div">
             {chain.chainName}
            </Typography>
            <Typography variant="body3" color="text.secondary">
              <div className='rating'>
                  <BsFillStarFill /> {chain.ratings}
              </div>
              </Typography>
              
              <Typography variant="body3" color="text.primary">
                 MRP : Rs. {chain.price}<br/>
                 
            </Typography>

            <div className='buttons'>
             <Button size="small" onClick={() => this.Remove(chain.id - 1)} disabled={this.state.remove}><RemoveIcon/></Button>
            <Typography variant="body3" color="red">
            Add to Cart ({this.state.quantity[chain.id -1]})
                          
                          
            {/* {this.state.quantity.map((item, index) => ( */}
              <Button size="small" onClick={() =>this.Add(chain.id - 1)}><AddIcon/></Button>
            {/* ))} */}
            </Typography>
            
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

