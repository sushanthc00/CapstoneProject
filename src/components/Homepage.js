import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Marvel from './Marvel';

export default class Homepage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Marvel />
        <Footer />
      </>
    )
  }
}
