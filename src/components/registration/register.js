import React from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import Navbar from '../Navbar';
import Footer from '../Footer';
import axios from 'axios';
import Notification from 'rc-notification/es/Notifications';
import {Link, Navigate} from 'react-router-dom';

class Register extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username : "",
            password : "",
            confirm_password : "",
            username_helpertext : false,
            password_helpertext : false,
            confirmPass_helpertext : false,
            enable_registration : 0,
        }
    }

    setusername = (e)  =>{
        let user_id = e.target.value;
        let user_helpertext = this.state.username_helpertext;
        if(e.target.value)
        {
            user_helpertext = false
        }
        else{
           user_helpertext = true
        }
        this.setState({
            username : user_id,
            username_helpertext : user_helpertext
        })
    }

    setPassword = (e) => {
        let password = e.target.value;
        let pass_helpertext = this.state.password_helpertext;
        if(e.target.value)
        {
            pass_helpertext = false
        }
        else{
            pass_helpertext = true
        }
        this.setState({
            password : password,
            password_helpertext : pass_helpertext
        })
    }
    
    setConfirmPassword = (e) => {
        debugger;
        let confirm_password = e.target.value;
        let confirmpassword_helpertext = this.state.confirmPass_helpertext;
        if(e.target.value)
        {
            confirmpassword_helpertext = false
        }
        else{
            confirmpassword_helpertext = true
        }
        this.setState({
            confirm_password : confirm_password,
            confirmPass_helpertext : confirmpassword_helpertext
        })
    }

    handleRegister = () => {
        debugger;
        if(this.state.password !== "" && this.state.username !== "" && this.state.confirm_password !== "")
        {
           axios.post("http://localhost:7656/userApi/Register",{
            username : this.state.username,
            password : this.state.password
           }).then(data => 
            {
                return (<Link to="/"/>);
            //     if(data.data.length > 0){

            //         localStorage.setItem("enable_registration" , 1);
            //         localStorage.setItem("username", data.data[0].username);
            //         return <Navigate to="/"/>;
            //     }
            
            
            // else{
            //     localStorage.setItem("enable_registration", 0);
                
            //     Notification.newInstance({}, notification => {
            //         notification.notice({
            //           content: 'Invalid Credentials'
            //         });
            //       });

            // }
        }

            )
        }
        else
        {
            if(this.state.username == "")
            {
                this.setState({username_helpertext : true})
            }
            if(this.state.password == "")
            {
                this.setState({password_helpertext : true})
            }
            if(this.state.confirm_password == "")
            {
                this.setState({confirmPass_helpertext : true})
            }
           
        }
    }
    render()
    {
        return(
            <>
            <Navbar/>
            <Footer />
            <Card sx={{  justifyContent: 'center', 
                         width: '30%',
                         height: '22vw', 
                         marginLeft:'35%', 
                         marginTop : '6%',
                         paddingTop: '40px',
                         backgroundImage: 'conic-gradient(thistle, lavender)'  }}>
            <div style={{textAlign: 'center'}}>
            <div>
            <TextField
            value = {this.state.username}
          id="standard-error-helper-text"
          label="Username"
          variant="standard"
          sx={{width : '40%'}}
          error = {this.state.username_helpertext}
          onChange={this.setusername}
        />
        </div>
        <br/>
            <div>
            <TextField
            value = {this.state.password}
          label="Password"
          id="standard-error-helper-text"
          variant="standard"
          sx={{width : '40%'}}
          error = {this.state.password_helpertext}
          onChange={this.setPassword}
        />
            </div>
            <br/>
            <div>
            <TextField
            value={this.state.confirm_password}
          label="Re-Enter Password"
          id="standard-error-helper-text"
          variant="standard"
          sx={{width : '40%'}}
          error = {this.state.confirmPass_helpertext}
          onChange={this.setConfirmPassword}
          />
            </div>
            <br/>
            <div>
                <Button variant="contained" sx={{width : '40%'}} onClick={this.handleRegister}>Register</Button>
            </div>
            <br/>
    </div>
    </Card>
           
            </>
        );
    }
}

export default Register;