import React, {Component} from 'react';
import PoolBack from '../../Images/poolback.jpeg';
import './UserDashboardNav.css';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import {Redirect} from "react-router-dom";
import Icon from '@material-ui/core/Icon';
import Navbar from '../Navbar/Navbar1';
import { Divide as Hamburger } from 'hamburger-react'
import {signout,isAuth} from '../../actions/auth';
import { useHistory } from 'react-router-dom'; // version 5.2.0

export default class UserDashboardNav extends Component {
    constructor(props, context) {
        super(props, context);
       this.state={
       children:[],
       menuStatus: 0,
       openMenu:false,
       goCart:false,
       logout:false,
       exit:false,
       userType:'',

       }
    
this.handleClick=this.handleClick.bind(this);
this.handleClose=this.handleClose.bind(this);
this.getMenuOptions=this.getMenuOptions.bind(this);
this.setMenuStatus=this.setMenuStatus.bind(this);
this.closeMenu=this.closeMenu.bind(this);
this.openMenu=this.openMenu.bind(this);
this.getMenu=this.getMenu.bind(this);
this.logout=this.logout.bind(this);


    }
    componentDidMount(){
      const user=isAuth();
      if(user.type==='0'){
        this.setState({userType:'מנהל'})
      } else if(user.type==='1'){
        this.setState({userType:'הורה'})
      } else if(user.type==='2'){
        this.setState({userType:'מדריך'})
      } else if(user.type==='3'){
        this.setState({userType:'אחראי מוצרים'})
      } else if(user.type==='4'){
        this.setState({userType:'אחרי לוז'})
      }
    }

     handleClick = (event) => {
      this.setState({anchorEl:event.currentTarget});
    };
  
     handleClose = () => {
       this.setState({anchorEl:null});
      
    };
    getMenuOptions() {
      return [
          {
              name: 'עמוד ראשי',
              link: '/UserDashboard',
          },
         
          {
              name: 'תפריט',
              link: '/Foodmenu',
          },
        
          {
            name: 'תוכנית יומית',
            link: '/DailyPlan',
        },

        {
          name: 'תמונות',
          link: '/GalleryPlan',
      },
      (this.props.user.type!=='2')?
      {
        name: 'מוצרים',
        link: '/shop',
    }:'',
    (this.props.user.type=='1')?
    {
      name: 'עגלת קניות',
      link: '/shopcart',
  }
:''
        
      ];
  
}
logout(){
  console.log('logout')
signout(()=>this.setState({exit:true}))
}
setMenuStatus(status) {
  this.setState({menuStatus: status});
}
closeMenu() {
  this.setMenuStatus(3);
  this.setState({openMenu:false})

  setTimeout(() => this.setMenuStatus(0), 200);
}
openMenu() {
  if(!this.state.openMenu)   {
    this.setMenuStatus(1);
    setTimeout(() => this.setMenuStatus(2), 200);
  }
  else{
    this.closeMenu();
  }


  this.setState({openMenu:!this.state.openMenu})


}

getMenu() {
  if (this.state.menuStatus == 0) {
      return null;
  }
  return <Navbar  options={this.getMenuOptions()}  menuStatus={this.state.menuStatus}
  onClose={this.closeMenu}
/>
}

cartSize=isAuth().cart.length;


      render() {
      
        if(this.state.exit)
        return <Redirect to={'/'}/>;

        if(this.state.goCart)
        return <Redirect to={'/shopcart'}/>;
     
    return (
      
    <div  className='UserDashboard'>
      {console.log(this.props.showMenu)}
      {isAuth().type!='3'&&isAuth().type!='4'&&(this.props.showMenu||this.props.showMenu===undefined)?<>
      {this.getMenu()}
      <div id='Hamburger'>
      <Hamburger  color='rgb(49, 112, 136)' rounded direction="left" toggled={this.state.openMenu} toggle={this.openMenu} />
      </div>
     </> :''}
      <div className='menu'>
      {/* <div className='Dashboard-tool'>

      <h1 className='h1-Dashboard'> קייטנת עושים גלים </h1>
      <h1 className='summer_txt-Dashboard'> חלום של קיץ</h1>

      </div> */}
      </div >
      <p className='user-welcome-dash'>  {this.props.user.name}</p>
<div id='Dashboard-tool' >
    {this.props.user.type==='1'?<Button disabled={this.props.ShopCart} onClick={()=>this.setState({goCart:true})} className='shopcart-btn' id='Dashboard-tool-btn' ><span   id='Dashboard-tool-btn' class="iconify" data-icon="foundation:shopping-cart" data-inline="false" ></span><div className='dot' ><p className='dotp' >{this.cartSize}</p></div></Button>:''}
    </div>
  <Button onClick={this.logout} id='Dashboard-logout-btn'><span id='Dashboard-logout-btn-icon'class="iconify" data-icon="ri:user-shared-fill" data-inline="false" ></span></Button>

    <p className='type-Dashboard'>{this.state.userType}</p>

    </div>

    );
  }
}
