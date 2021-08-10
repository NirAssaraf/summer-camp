import React, {Component} from 'react';
import PoolBack from '../../Images/poolback.jpeg';
import './ChildRegistration.css';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import {Redirect} from "react-router-dom";
import Icon from '@material-ui/core/Icon';
import Navbar from '../Navbar/Navbar1';
import UserDashboardNav from '../UserDashboardNav/UserDashboardNav';
import ImageUploading from '../ImageUploading/imageUploading';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { Divide as Hamburger } from 'hamburger-react'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

export default class ChildRegistration extends Component {
    constructor(props, context) {
        super(props, context);
       this.state={
        childName:'',
       menuStatus: 0,
       childId:'',
       childClass:'',
       childSchool:'',
       childPerantName:'',
       childPerantPhone:'',
       childPerantMail:'',
       childDifficulties:'',
       Collection:'Pickup'

       }
    
this.handleClick=this.handleClick.bind(this);
this.handleClose=this.handleClose.bind(this);
this.handleChangeSelect=this.handleChangeSelect.bind(this);



    }

     handleClick = (event) => {
      this.setState({anchorEl:event.currentTarget});
    };
  
     handleClose = () => {
       this.setState({anchorEl:null});
      
    };
    handleChangeSelect(event){
      this.setState({Collection:event.target.value});

    }

   
      render() {
        // if(this.props.user===null)
        // return <Redirect to={'/'}/>;
     
    return (
      
    <div  className='ChildRegistration'>

      <h3 className='titel-ChildReg'><u>טופס רישום ילד</u> </h3>

          <FormControl id='form' >

<InputLabel id="child" htmlFor="child-name">שם הילד</InputLabel>

<Input required type='text'  id="child-name"  value={this.state.mail} onChange={(e) => this.setState({ childName: e.target.value })} />

</FormControl>
<br/>
<FormControl   id='form'>

<InputLabel id="child" htmlFor="child-id">תעודת זהות</InputLabel>

<Input required type='text'  id="child-id"  value={this.state.childId} onChange={(e) => this.setState({ childId: e.target.value })} />

</FormControl>
<br/>
<FormControl   id='form'>

<InputLabel id="child" htmlFor="child-class">כיתה</InputLabel>

<Input required type='text'  id="child-class"  value={this.state.childClass} onChange={(e) => this.setState({ childClass: e.target.value })} />

</FormControl>
<br/>

<FormControl   id='form'>

<InputLabel id="child" htmlFor="child-School">בית ספר</InputLabel>

<Input required type='text'  id="child-School"  value={this.state.childSchool} onChange={(e) => this.setState({ childSchool: e.target.value })} />

</FormControl>
<br/>

<FormControl   id='form'>

<InputLabel id="child" htmlFor="child-perant-name">שם הורה</InputLabel>

<Input required type='text'  id="child-perant-name"  value={this.state.childPerantName} onChange={(e) => this.setState({ childPerantName: e.target.value })} />

</FormControl>

<br/>

<FormControl   id='form'>

<InputLabel id="child" htmlFor="child-perant-phone">טלפון הורה</InputLabel>

<Input required type='number'  id="child-perant-phone"  value={this.state.childPerantPhone} onChange={(e) => this.setState({ childPerantPhone: e.target.value })} />

</FormControl>

<br/>

<FormControl   id='form'>

<InputLabel id="child" htmlFor="child-perant-mail">מייל הורה</InputLabel>

<Input required type='text'  id="child-perant-mail"  value={this.state.childPerantMail} onChange={(e) => this.setState({ childPerantMail: e.target.value })} />

</FormControl>
<br/>
<FormControl  variant="standard" id='form'>
<InputLabel shrink id='child'>דרך איסוף</InputLabel>

        <Select
        required
        labelId="demo-simple-select-placeholder-label-label"
        id="demo-simple-select-placeholder-label"
          value={this.state.Collection}
          onChange={this.handleChangeSelect}
          displayEmpty
        >

          <MenuItem value='Pickup'>עצמי</MenuItem>

          <MenuItem value='transportation'>הסעה</MenuItem>
        </Select>
      </FormControl>
<br/>

<FormControl   id='form'>


<span>קשיים חברתיים</span>
<TextareaAutosize aria-label="empty textarea" placeholder="קשייים חברתיים" minRows={3}/>

</FormControl>
<br/>
<ImageUploading></ImageUploading>

    </div>

    );
  }
}
