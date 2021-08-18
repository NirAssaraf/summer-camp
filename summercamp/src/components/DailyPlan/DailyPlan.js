import React, {Component} from 'react';
import PoolBack from '../../Images/poolback.jpeg';
import './DailyPlan.css';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import {Redirect} from "react-router-dom";
import Icon from '@material-ui/core/Icon';
import DayEvent from '../DayEvent/DayEvent';
import UserDashboardNav from '../UserDashboardNav/UserDashboardNav';
import Config from '../../config/config';
import axios from 'axios';
import { Divide as Hamburger } from 'hamburger-react'
import { isAuth } from '../../actions/auth';

export default class DailyPlan extends Component {
    constructor(props, context) {
        super(props, context);
       this.state={
        dailyPlan:[],
        newDay:false,
        update:false,
      

       }
    
this.handleClickAddDay=this.handleClickAddDay.bind(this);
this.UpdatePage=this.UpdatePage.bind(this);


    }
     today = new Date();

    date =  this.today.getDate()  + '/' + (this.today.getMonth() + 1) + '/' +this.today.getFullYear();

     handleClickAddDay = (event) => {
       this.setState({newDay:true})
    };
  
   
    componentDidMount(){
      console.log(this.props.dayEvent);
      // axios.get(Config.getServerPath()+'events')
      // .then(res => {
      //   console.log(res.data.day)
      //   this.setState({dailyPlan:res.data.day})
      //   this.setState({update:true})

  
      // })
    }
    UpdatePage(){
      if(this.props.location.update){
        axios.get(Config.getServerPath()+'events')
        .then(res => {
          
          this.setState({dailyPlan:res.data.day})
          this.setState({update:true})
    
        })
      }
    }
      render() {
        if(this.props.user===null){
          return <Redirect to={'/'}/>;
          }
       if(this.state.newDay)
        return <Redirect to={'/NewDayEvent'}/>;
    return (
      
    <div  className='DailyPlan'>
<UserDashboardNav user={this.props.user}/>
<div className='daily-plan'>
<p className='shop-titles'> מה עושים?</p>

{(isAuth()=='0'||isAuth().type=='4')?<button onClick={this.handleClickAddDay} className='DailyPlan-add-btn'>הוסף לוז יומי </button>:''}

</div>
<div className='all-day'>
{ this.props.dayEvent.map((item,index)=>{
          
          return <DayEvent key={index} day={item} />

        })}
</div>

    </div>

    );
  }
}
