import React, { Component } from 'react';
import { Card, Typography } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';
import { padding } from '@mui/system';

export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <>
            <Navbar />
            <Footer />
            <Card sx={{ justifyContent: 'center',  
                        width: '75%', 
                        marginLeft:'13%', 
                        marginTop : '3%',
                        boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.8)',
                        padding: '10px',
                        backgroundColor: 'lavender'
                         }}>

            <div style={{textAlign: 'center'}}>
            <Typography sx={{fontSize : '30px'}}>About Us</Typography>
           <Typography>What started out as a simple eagerness to get our hands on the 
            Marvel Merchandise has now grown into a full scale business. Let us explain </Typography>
            <br/>
           <Typography>Back in 2013, one of our co-founders Rahul Sahay who had just become a huge 
            Marvel fan after watching The Avengers Movie wanted to collect Marvel goodies, 
            but unfortunately there were little to no online stores to get the goodies.
            So, he tried shipping them from other countries. But it was evident that he would
             run out of cash 
            if this is continued. </Typography>
            <br />
           <Typography>But thanks to smart choices and backing from some of his friends, Rahul started 
            making his own merch in small quantities and 9 years later, here we are with overr a 
            million orders and counting, we are committed to improve our products and customer
             satisfaction at all times.
              </Typography>
            <br />
           <Typography>Our Products are eco-friendly and we intend to go completely carbon neutral 
            by the end of 2025. We strive to improve our quality and customer service everyday and hence
            we provide a 15-day replacement and moneyback guarantee on all our products.
             </Typography>
            <br/>
             <Typography>For any queries or any merchandise related issues, please feel free to reach out to us
                at merchmom@gmail.com and we will reach back out to you as soon as possible.
             </Typography>
           <br/>
           </div>
    
            </Card>
           
            </>
      </div>
    )
  }
}
