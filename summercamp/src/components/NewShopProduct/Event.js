import React, { Component } from 'react';
import './NewShopProduct.css';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import { Redirect } from "react-router-dom";
import DatePicker from "react-datepicker";
import UserDashboardNav from '../UserDashboardNav/UserDashboardNav';
import ImageUploading from '../ImageUploading/SingleFileUploadComponent';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { Divide as Hamburger } from 'hamburger-react'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import CloseIcon from '@material-ui/icons/Close';
import Config from '../../config/config';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
import { Alert, AlertTitle } from '@material-ui/lab';
import IconButton from '@material-ui/core/IconButton';
import {isAuth} from '../../actions/auth';

registerLocale('es', es)
export default class Event extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
     

delete:false,
alert:false,
edit:false,

    }

  
this.deleteProduct=this.deleteProduct.bind(this);
this.addCart=this.addCart.bind(this);


  }

  addCart(){
    axios.get(Config.getServerPath()+'product/'+this.props.user._id+'/'+this.props.product._id)
    .then(res => {
      console.log(res.data.status)
  if(res.data.status===404){
  return
  }
  this.setState({alert:true})
  this.props.updateUser();

    })
    .catch(() => {}   );
  
  }
  deleteProduct(){
   
  axios.delete(Config.getServerPath()+'product/'+this.props.product._id)
  .then(res => {
    console.log(res.data.status)
if(res.data.status===404){
return
}
this.props.updateUser();
this.setState({delete:true})


  })
  .catch(() => {}   );
}


  render() {
    if(this.state.edit)
    return <Redirect to={{pathname:'/NewShopProduct' ,update:true, product:this.props.product}} />;
    if (this.state.exit)
      return <Redirect to={'/shop'} />;
      if(this.state.delete) return '';
    return (

      <div className='event-product'  dir="rtl">
        
        <img className='product-img'src={this.props.product.url} />
        <div className='product-details'>
            <p className='product-details-name'>{this.props.product.name} </p>
            <p className='product-details-price'>  {this.props.product.price} ₪</p>
            </div>
            {(isAuth().type=='0'||isAuth().type=='3')? <button onClick={this.deleteProduct} className='delete-product'><span class="iconify" data-icon="fluent:delete-dismiss-24-regular" data-inline="false" ></span></button>:      <button onClick={this.addCart} className='add-cart-product'><span class="iconify" data-icon="iconoir:shopping-bag-add" data-inline="false" ></span></button>
  }
      {(isAuth().type=='0'||isAuth().type=='3')?  <button onClick={()=>this.setState({edit:true})} className='update-product'><span class="iconify" data-icon="tabler:edit" data-inline="false" ></span></button>:''}

      <br/>
     {this.state.alert?( <div className='success-alert-div'><Alert id='success-alert' severity="success"    action={
            <IconButton id='close-icon'
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                this.setState({alert:false});
              }}
            >
              <CloseIcon  fontSize="inherit" />
            </IconButton>
          }>
        <AlertTitle  id='success-alert-title'>הפריט נוסף  </AlertTitle>
        למעבר לסל — <strong>לחץ כאן!</strong>
      </Alert></div>):''}


      

     
      </div>
    );
  }
}
