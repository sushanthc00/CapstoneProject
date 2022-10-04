import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/registration/login';
import Register from './components/registration/register';
import AboutUs from './components/AboutUs';
import Mugs from './components/categories/mugs';
import Keychains from './components/categories/keychains';
import Profile from './components/registration/profile';



class App extends React.Component{
  constructor(props){
  super(props)
}

  render()
  {
    return (
    <>    
      <Routes>
          <Route path="/" exact element={<Homepage {...this.props} />}/>
          <Route path="/Login" element={<Login  {...this.props}/>} />
          <Route path="/Register" element={<Register  {...this.props}/>} />
          <Route path="/AboutUs" element={<AboutUs  {...this.props}/>} />
          <Route path="/Mugs" element={<Mugs   {...this.props}/>} />
          <Route path="/Keychains" element={<Keychains  {...this.props}/>} />
          <Route path="/profile" element={<Profile  {...this.props}/>} />
          
      </Routes>

    </>
  );
  }
}

export default App;
