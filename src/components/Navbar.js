import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
import { Link, Router } from 'react-router-dom';
import './Navbar.css';
import Image from '../components/images/MadOverMarvel Logo.png';
import { logout } from "../actions/auth"
import { clearMessage } from "../actions/message";
import { history } from '../helpers/history';
import EventBus from "../common/EventBus";


class Navbar extends React.Component{

    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
    
        this.state = {
          currentUser: undefined,
        };
    
        history.listen((location) => {
          props.dispatch(clearMessage()); 
        });
      }
    
      componentDidMount() {
        const user = this.props.user;
    
        if (user) {
          this.setState({
            currentUser: user
          });
        }
    
        EventBus.on("logout", () => {
          this.logOut();
        });
      }
    
      componentWillUnmount() {
        EventBus.remove("logout");
      }
    
      logOut() {
        this.props.dispatch(logout());
        this.setState({
          currentUser: undefined,
        });
        //window.location.reload(true);
      }
    
    render(){

        const { currentUser} = this.state;

    return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo'>
                <div className='logo-mom-container'>
                <img className= 'logo-mom' src={Image}></img>
                </div>
            </Link>

            <Link to = '/' style={{textDecoration: 'none'}} className='navbar-name'>
                <div className='name-mom'>
                    <h2>MAD OVER MARVEL</h2>
                </div>
            </Link>

            <Link to = '/profile' style={{textDecoration: 'none'}} className='navbar-profile'>
            <div className= 'profile-mom'>
                <h3>My Profile</h3>
            </div>
            </Link>

            <Link to = '/AboutUs' style={{textDecoration: 'none'}} className='navbar-about'>
            <div className= 'about-mom'>
                <h3>About Us</h3>
            </div>
            </Link>

        </div>
        
    </nav>
    
    <nav className='navbar'>
        <div className='navbar-container-two'>
            <Link to='/Mugs' style={{textDecoration: 'none'}}  className='navbar-mugs'>
                <div className='mugs-mom'>
                <h3>Mugs</h3>
                </div>
            </Link>

            <Link to = '/Keychains' style={{textDecoration: 'none'}} className='navbar-keychains'>
                <div className='keychains-mom'>
                    <h3>Keychains</h3>
                </div>
            </Link>

            <Link to = '/ActionFigures' style={{textDecoration: 'none'}} className='navbar-action-figures'>
            <div className= 'action-figures-mom'>
                <h3> Action Figures</h3>
            </div>
            </Link>

            <Link to = '/Miscellaneous' style={{textDecoration: 'none'}} className='navbar-misc'>
            <div className= 'misc-mom'>
                <h3>Miscellaneous</h3>
            </div>
            </Link>


            {currentUser ? (
              <div className='profile-logout'>
                
                  <Link to='/Login' onClick={this.logOut} className='log-out' style={{ textDecoration: 'none' }} >
                    <div className= 'logout-mom'>
                      <h3>LogOut</h3>
                      </div> 
                  </Link>
             
              </div>
            ) : (
            <><Link to='/Login' style={{ textDecoration: 'none' }} className='navbar-login'>
                                <div className='login-mom'>
                                    <h3>Login</h3>
                                </div>
                            </Link>
                    
                            <Link to='/Register' style={{ textDecoration: 'none' }} className='navbar-register'>
                                    <div className='register-mom'>
                                        <h3>Register</h3>
                                    </div>
                                </Link></>
            )}
            <Link to = '/Cart' style={{textDecoration: 'none'}} className='navbar-cart'>
            <div className= 'cart-mom'>
            <h3> Cart</h3>    
            </div>
            </Link>

        </div>
        
    </nav>

    </>
    
  )
}
}

function mapStateToProps(state) {
    const { user } = state.auth;
    return {
      user,
    };
  }
  
  export default connect(mapStateToProps)(Navbar);