import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/registration/login';
import Register from './components/registration/register';
import AboutUs from './components/AboutUs';



class App extends React.Component{
  constructor(props){
  super(props)
}

  render()
  {
    return (
    <>      
      <Routes>
          <Route path="/" element={<Homepage {...this.props} />}/>
          <Route path="/Login" element={<Login  {...this.props}/>} />
          <Route path="/Register" element={<Register  {...this.props}/>} />
          <Route path="/AboutUs" element={<AboutUs  {...this.props}/>} />
      </Routes>
      

    </>
  );
  }
}

export default App;
