import React, {Component} from 'react';
import PoolBack from '../../Images/poolback.jpeg';
import './Users.css';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import {Redirect} from "react-router-dom";
import Icon from '@material-ui/core/Icon';
import Navbar from '../Navbar/Navbar1';
import { Divide as Hamburger } from 'hamburger-react'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export default class Users extends Component {
    constructor(props, context) {
        super(props, context);
       this.state={
  
        userType:this.props.user.role,
        toggle:false,
        saveButoon:false,

       }
    
this.handleClick=this.handleClick.bind(this);
this.handleChangeSelect=this.handleChangeSelect.bind(this);
this.updateUser=this.updateUser.bind(this);



    }

     handleClick = (event) => {
       this.setState({toggle:!this.state.toggle})
    };
  
    handleChangeSelect(event){
      if(event.target.value==this.props.user.role)
      this.setState({saveButoon:false});
      else this.setState({saveButoon:true});

      this.setState({userType:event.target.value});


    }
   
    updateUser(){
console.log('update user')
    }

      render() {
        // if(this.props.user===null)
        // return <Redirect to={'/'}/>;
     
    return (
      
    <div  className='Users'>
     <button className='user-btn' onClick={this.handleClick}>{this.props.user.name}</button>
     {this.state.toggle?(<div className='user-details'>
       <p>מייל : {this.props.user.email}</p>
       <div style={{display:'flex'}}>
       <p>סוג משתמש :  </p>
       <FormControl  variant="standard" id='userType-select-user'>
        <Select
        required
        labelId="demo-simple-select-placeholder-label-label"
        id="demo-simple-select-placeholder-label"
          value={this.state.userType}
          onChange={this.handleChangeSelect}
          displayEmpty
        >
    {/* <MenuItem value="parent">
            <em>הורה</em>
          </MenuItem> */}
          <MenuItem value='parent'>הורה</MenuItem>

          <MenuItem value='מדריך'>מדריך</MenuItem>
        </Select>
      </FormControl>
      {this.state.saveButoon?<button onClick={this.updateUser} className='save'>     <span class="iconify" data-icon="dashicons:saved" data-inline="false"></span>
</button>:''}
      </div>
     

     </div>):''}


    </div>

    );
  }
}
