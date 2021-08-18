import React, {Component} from 'react';
import PoolBack from '../../Images/poolback.jpeg';
import './GalleryPlan.css';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import {Redirect} from "react-router-dom";
import Icon from '@material-ui/core/Icon';
import GalleryEvent from '../GalleryEvent/GalleryEvent';
import UserDashboardNav from '../UserDashboardNav/UserDashboardNav';
import Config from '../../config/config';
import axios from 'axios';
import { Divide as Hamburger } from 'hamburger-react'
import { isAuth } from '../../actions/auth';

export default class GalleryPlan extends Component {
    constructor(props, context) {
        super(props, context);
       this.state={
        GalleryPlan:[],
        newGalleryDay:false,
      

       }
    
this.handleClickAddGalleryDay=this.handleClickAddGalleryDay.bind(this);



    }
     today = new Date();

    date =  this.today.getDate()  + '/' + (this.today.getMonth() + 1) + '/' +this.today.getFullYear();

     handleClickAddGalleryDay = (event) => {
       this.setState({GalleryDay:true})
    };
  
   
    // componentDidMount(){
    //   axios.get(Config.getServerPath()+'photo')
    //   .then(res => {
    //     console.log(res.data.day)
    //     this.setState({GalleryPlan:res.data.day})
  
    //   })
    // }

      render() {
        if(this.props.user===null){
          this.props.updateUser();
          return '';
          }
       if(this.state.GalleryDay)
        return <Redirect to={'/NewGalleryEvent'}/>;
    return (
      
    <div  className='DailyPlan'>
<UserDashboardNav user={this.props.user}/>
<div className='daily-plan'>
{(isAuth().type=='0'||isAuth().type=='2')?<button onClick={this.handleClickAddGalleryDay} className='DailyPlan-add-btn'>הוסף יום גלרייה חדש</button>:''}

</div>
<div className='all-days'>
{ this.props.galleryEvent.map((item,index)=>{
          
          return <GalleryEvent day={item} />

        })}
</div>

    </div>

    );
  }
}
