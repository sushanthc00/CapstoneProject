import React, { Component } from 'react'
import './ForgotPassword.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default class ForgotPassword extends Component {
  render() {
    return (
      <>
      <Navbar />
      <div className='password-fg'>
        <h2 className='text'> Please reach out to our admins at helpdesk@merchmom.com 
            and they will help you with the login right away</h2>
      </div>
      <Footer />
      </>
    )
  }
}
