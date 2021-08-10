import React, {Component} from 'react';
import PoolBack from '../../Images/poolback.jpeg';
import './FoodMenu.css';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import {Redirect} from "react-router-dom";
import Icon from '@material-ui/core/Icon';
import Navbar from '../Navbar/Navbar1';
import UserDashboardNav from '../UserDashboardNav/UserDashboardNav';

import { Divide as Hamburger } from 'hamburger-react'

export default class FoodMenu extends Component {
    constructor(props, context) {
        super(props, context);
       this.state={
       children:[],
       menuStatus: 0,
       openMenu:false

       }
    
this.handleClick=this.handleClick.bind(this);
this.handleClose=this.handleClose.bind(this);



    }
     today = new Date();

    date =  this.today.getDate()  + '/' + (this.today.getMonth() + 1) + '/' +this.today.getFullYear();
     handleClick = (event) => {
      this.setState({anchorEl:event.currentTarget});
    };
  
     handleClose = () => {
       this.setState({anchorEl:null});
      
    };
 

      render() {
        // if(this.props.user===null)
        // return <Redirect to={'/'}/>;
     
    return (
      
    <div  className='FoodMenu'>
    
<UserDashboardNav user={this.props.user}/>

<div className='Menu'>
    <h3>התפריט ליום {this.date}</h3>
</div>
    </div>

    );
  }
}
