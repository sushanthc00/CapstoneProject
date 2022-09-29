import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Switch } from '@material-ui/core';
import Footer from './components/Footer';
import Marvel from './components/Marvel';



function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact />
      </Routes>
      <Marvel />
      <Footer />
    </Router>
    </>
  );
}

export default App;
