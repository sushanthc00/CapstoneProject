import React from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import Navbar from '../Navbar';
import Footer from '../Footer';
import axios from 'axios';


class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username_helpertext : false,
            password_helpertext : false,
            username : "",
            password : ""
        }
    }

    setusername = (e) =>{
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
    
    handleSubmit = () => {
        if(this.state.password != "" && this.state.username != "")
        {

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
           
        }
    }

    render()
    {
        return(
            <>
            <Navbar />
            <Footer />
            <Card sx={{ justifyContent: 'center',  
                        width: '25%', 
                        marginLeft:'35%', 
                        marginTop : '10%', 
                        backgroundColor: 'lavender'}}>
                <div style={{textAlign: 'center'}}>
            <div>
            <TextField
            value = {this.state.username}
          id="standard-error-helper-text"
          label="Username"
          variant= "standard"
          sx={{width : '40%'}}
          error = {this.state.username_helpertext}
          onChange = {this.setusername}
        />
        </div>
        <br/>
            <div>
            <TextField
            value={this.state.password}
          label="Password"
          id="standard-error-helper-text"
          variant="standard"
          sx={{width : '40%'}}
          error = {this.state.password_helpertext}
          onChange = {this.setPassword}
        />
            </div>
            <br/>
            <div>
                <Button variant="contained" sx={{width : '40%'}} onClick={this.handleSubmit}>Login</Button>
            </div>
            <br/>
            </div>
    
    </Card>
           
            </>
        );
    }
}

export default Login;