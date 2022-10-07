import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import './cart.css';
import Product from '../components/images/groooot.jpg';
import Navbar from './Navbar';
import Footer from './Footer';
import Payment from './Payment';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
            defaultprice : 499,
            newprice : 499,
            quantity : 1,
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

render() {
  return (
    <div className="cart-main">
        <Navbar />
        <div className='cart-container'>
        <h2> CHECKOUT</h2>
        <img src={Product} width="200px" height="200px" alt='ROG PHONE 5'></img>
        <Typography gutterBottom variant="h5" component="div">
               Groot Action Figure
              </Typography>
              <Typography variant="body2" color="text.primary">
                   MRP : Rs. {this.state.defaultprice}<br/>
                   <Typography variant="body2" color="text.primary">
                   Total Price : Rs. &nbsp;
                   {this.state.newprice}
                   </Typography>
              </Typography>

              <div className='buttons'>
                <div className='icon-container'>
              <Button size="small" onClick={this.Remove} disabled={this.state.remove}><RemoveIcon/></Button>
                </div>
              <Typography variant="body2" color="text.primary">
                                 {this.state.quantity}
                            </Typography>
                <div className='icon-container'>
              <Button size="small"  onClick={this.Add}><AddIcon/></Button>
                </div>
              </div>

              <br />
              <Payment />
              

        </div>
        <Footer />
    </div>
  );
}
}

export default Cart;
