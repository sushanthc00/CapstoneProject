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
import ProductService from '../../services/product.service';


export default class Mugs extends Component {
    constructor(props){
        super(props)
        this.state = {
            defaultprice : 299,
            newprice : 0,
            quantity : 0,
            remove : false
    };
  }
    Add = () =>
    {
        this.setState({quantity : this.state.quantity + 1})
        this.setState({newprice : this.state.defaultprice * (this.state.quantity + 1)})
        this.setState({remove : false})
    }
    Remove = () =>
    {
    if(this.state.quantity > 0)
    {

         this.setState({quantity : this.state.quantity - 1})
        this.setState({newprice : this.state.newprice - ( this.state.defaultprice)})
    }
    else
    {
        this.setState({remove : true})
    }
    }

    componentDidMount(){
      ProductService.products().then((res)=>{
        this.setState({products:res.data});
            });
        }
  
render() {
  return (
    <>
    <Navbar />
    
    <div className="container">
        <div className='image'>
        
        <img src={Cap} width="200px" height="200px" alt='Captain America Mug'></img>
        <Typography gutterBottom variant="h5" component="div">
               Captain America
              </Typography>
              <Typography variant="body3" color="text.secondary">
                <div className='rating'>
                    <BsFillStarFill /> 4.4/5 (257 ratings)
                </div>
                </Typography>
                
                <Typography variant="body3" color="text.primary">
                   MRP : Rs. {this.state.defaultprice}<br/>
                   {/* <Typography variant="body3" color="text.secondary">
                   Total Price : Rs. &nbsp;
                   {this.state.newprice}
                   </Typography> */}
              </Typography>

              <div className='buttons'>
              <Button size="small" onClick={this.Remove} disabled={this.state.remove}><RemoveIcon/></Button>
              <Typography variant="body3" color="red">
              Add to Cart ({this.state.quantity})
                            </Typography>
              <Button size="small"  onClick={this.Add}><AddIcon/></Button>
              </div>
        </div>


        <div className='image'>
        
        <img src={IronMan} width="200px" height="200px" alt='Iron Man Mug'></img>
        <Typography gutterBottom variant="h5" component="div">
               Iron Man
              </Typography>
              <Typography variant="body3" color="text.secondary">
                   
              <div className='rating'>
                    <BsFillStarFill /> 4.5/5 (556 ratings)<br/>
                </div>
                </Typography>
                
                <Typography variant="body3" color="text.primary">

                   MRP : Rs. {this.state.defaultprice}<br/>
                   {/* <Typography variant="body3" color="text.secondary">
                   Total Price : Rs. &nbsp;
                   {this.state.newprice}
                   </Typography> */}
              </Typography>
              
            
              <div className='buttons'>
              <Button size="small" onClick={this.Remove} disabled={this.state.remove}><RemoveIcon/></Button>
              <Typography variant="body3" color="red">
                                 Add to Cart ({this.state.quantity})
                            </Typography>
              <Button size="small"  onClick={this.Add}><AddIcon/></Button>
              </div>   
            </div>


        <div className='image'>
        
        <img src={Spidey} width="200px" height="200px" alt='Spiderman Mug'></img>
        <Typography gutterBottom variant="h5" component="div">
               Spiderman
              </Typography>
              <Typography variant="body3" color="text.secondary">

              <div className='rating'>
                    <BsFillStarFill /> 4.3/5 (871 ratings) &nbsp;
                    &nbsp;
                </div>
                </Typography>
                
                <Typography variant="body3" color="text.primary">   
                   MRP : Rs. {this.state.defaultprice}<br/>
                   {/* <Typography variant="body3" color="text.secondary">
                   Total Price : Rs. &nbsp;
                   {this.state.newprice}
                   </Typography> */}
              </Typography>

              <div className='buttons'>
              <Button size="small" onClick={this.Remove} disabled={this.state.remove}><RemoveIcon/></Button>
              <Typography variant="body3" color="red">
                                 Add to Cart ({this.state.quantity})
                            </Typography>
              <Button size="small"  onClick={this.Add}><AddIcon/></Button>
              </div>   
        </div>

        <div className='image'>
        
        <img src={Marvel} width="200px" height="200px" alt='Marvel Mug'></img>
        <Typography gutterBottom variant="h5" component="div">
               Marvel
              </Typography>
              <Typography variant="body3" color="text.secondary">
                   
              <div className='rating'>
                    <BsFillStarFill /> 4.6/5 (228 ratings)
                </div>
                
                </Typography>
                
                <Typography variant="body3" color="text.primary">
                   MRP : Rs. {this.state.defaultprice}<br/>
                   {/* <Typography variant="body3" color="text.secondary">
                   Total Price : Rs. &nbsp;
                   {this.state.newprice}
                   </Typography> */}
              </Typography>
              
            
              <div className='buttons'>
              <Button size="small" onClick={this.Remove} disabled={this.state.remove}><RemoveIcon/></Button>
              <Typography variant="body3" color="red">
              Add to Cart ({this.state.quantity})
                            </Typography>
              <Button size="small"  onClick={this.Add}><AddIcon/></Button>
              </div>   
            </div>

            <div className='image'>
        
        <img src={Avengers} width="200px" height="200px" alt='Avengers Mug'></img>
        <Typography gutterBottom variant="h5" component="div">
               Avengers
              </Typography>
              <Typography variant="body3" color="text.secondary">
                   
              <div className='rating'>
                    <BsFillStarFill /> 4.4/5 (716 ratings)
                </div>
                </Typography>
                
                <Typography variant="body3" color="text.primary">

                   MRP : Rs. {this.state.defaultprice}<br/>
                   {/* <Typography variant="body3" color="text.secondary">
                   Total Price : Rs. &nbsp;
                   {this.state.newprice}
                   </Typography> */}
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
    <Footer />
    </>
  );
}
}

