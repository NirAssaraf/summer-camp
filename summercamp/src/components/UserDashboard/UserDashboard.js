import React, {Component} from 'react';
import PoolBack from '../../Images/poolback.jpeg';
import './UserDashboard.css';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import {Redirect} from "react-router-dom";
import Icon from '@material-ui/core/Icon';
import Navbar from '../Navbar/Navbar1';
import UserDashboardNav from '../UserDashboardNav/UserDashboardNav';
import Child from '../Child/Child';

import { Divide as Hamburger } from 'hamburger-react'
import { ThemeProvider } from '@material-ui/core';
import { isAuth } from '../../actions/auth';

export default class UserDashboard extends Component {
    constructor(props, context) {
        super(props, context);
       this.state={
       children:[],
       menuStatus: 0,
       addChild:false,
       img:''

       }
    
this.handleClick=this.handleClick.bind(this);
this.handleClose=this.handleClose.bind(this);
this.image=this.image.bind(this);



    }

    componentDidMount(){
      if(isAuth()!==null)
this.setState({children:isAuth().childs})
    }
     handleClick = (event) => {
      this.setState({anchorEl:event.currentTarget});
    };
  
     handleClose = () => {
       this.setState({anchorEl:null});
      
    };
    image(url){
this.setState({img:url})
    }

   
      render() {
        if(isAuth()===null){
        return <Redirect to={'/'}/>;

        }
     if(this.state.addChild)
     {
       this.setState({addChild:false})
       return <Redirect to={'/ChildRegistration'}/>
     }
    return (
      
    <div  className='UserDashboard'>
    
<UserDashboardNav user={isAuth()}  ShopCart={false}/>
      <div className='my-children-user'> 
      <div className='title-children-user'>
        <h3 className='user-name' >הילדים שלי</h3>
        <Button onClick={()=>this.setState({addChild:true}) } id='add-child-btn' variant="outlined" color="primary"> <Icon id='plus'>add_circle</Icon>  רישום ילד חדש</Button>
        </div>
        {this.state.children.length===0?(<p>לא נמצאו ילדים</p>):''}
        <div style={{ width:'100%' ,alignItems:'center', textAlign:'center', marginTop:'10px'}}>
        {this.state.children.map((item,index)=>{
          return <Child child={item} user={this.props.user} />
        })}
</div>

      </div>

    </div>

    );
  }
}
