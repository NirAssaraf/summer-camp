import React, {Component} from 'react';
import PoolBack from '../../Images/poolback.jpeg';
import './FoodMenuPlan.css';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import {Redirect} from "react-router-dom";
import Icon from '@material-ui/core/Icon';
import FoodMenuEvent from '../FoodMenuEvent/FoodMenuEvent';
import UserDashboardNav from '../UserDashboardNav/UserDashboardNav';
import Config from '../../config/config';
import axios from 'axios';
import { Divide as Hamburger } from 'hamburger-react'
import { isAuth } from '../../actions/auth';

export default class FoodMenuPlan extends Component {
    constructor(props, context) {
        super(props, context);
       this.state={
        FoodMenu:[],
        newFoodMenu:false,
      

       }
    
this.handleClickAddFoodMenu=this.handleClickAddFoodMenu.bind(this);



    }
     today = new Date();

    date =  this.today.getDate()  + '/' + (this.today.getMonth() + 1) + '/' +this.today.getFullYear();

    handleClickAddFoodMenu = (event) => {
       this.setState({newFoodMenu:true})
    };
  
   
    // componentDidMount(){
    //   axios.get(Config.getServerPath()+'menu')
    //   .then(res => {
    //     console.log(res.data.day)
    //     this.setState({FoodMenu:res.data.day})
  
    //   })
    // }

      render() {
        if(this.props.user===null){
        this.props.updateUser();
        return '';
        }
        // return <Redirect to={'/'}/>;
       if(this.state.newFoodMenu)
        return <Redirect to={'/NewFoodMenuEvent'}/>;
    return (
      
    <div  className='DailyPlan'>
<UserDashboardNav user={this.props.user}/>
<div className='daily-plan'>
<p className='shop-titles'> מה אוכלים?</p>

{(isAuth().type==='0'||isAuth().type==='2')?<button onClick={this.handleClickAddFoodMenu} className='DailyPlan-add-btn'>הוסף תפריט יומי </button>:''}

</div>
<div className='all-menu'>
{ this.props.menuEvent.map((item,index)=>{
          
          return <FoodMenuEvent day={item} />

        })}
</div>

    </div>

    );
  }
}
