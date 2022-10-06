import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Marvel from './Marvel';
import Logo from '../components/images/MadOverMarvel Logo.png';
import './Homepage.css'


export default class Homepage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Marvel />
        <div className='intro-container'>
          <div className='logo-container'>
            <img src={Logo} width="400px" height="340px"></img>
          </div>

          <div className='message-container'>
            <h1>Hello, {localStorage.getItem("username")} welcome to Mad Over Mavrel</h1>
            <h4>Mad Over Marvel has been catering the marvel fans with top-notch Marvel Merchandise Since 
              2018.
            </h4>
            <h4>Over the past 4 years we have been able to serve the Marvel Fandom with great goodies
              and we have no plans of stopping anytime soon.
            </h4>
            <h4> We hope you have an amazing shopping experience!</h4>
            <h4> Please navigate through different categories on the Navbar to explore all our products</h4>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}
