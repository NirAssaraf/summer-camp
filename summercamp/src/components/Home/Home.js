import React, {Component} from 'react';
import PoolBack from '../../Images/poolback.jpeg';
import './Home.css';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import {Redirect} from "react-router-dom";

export default class Home extends Component {
    constructor(props, context) {
        super(props, context);
       this.state={
        username:'',
        password:'',
        loginStatus:false,
       }
    
this.handelSubmit=this.handelSubmit.bind(this);
    }

handelSubmit(){
  this.setState({loginStatus:true});
  this.props.setUser(this.state.username)

console.log('send')
}


      render() {
        if(this.state.loginStatus)
        return <Redirect to={'/UserDashboard'}/>;

    return (
    <div className='Home' >
      <div className='background_home'>        </div>

        <h1 className='h1'> קייטנת עושים גלים <span className='summer_txt'>חלום של קיץ</span></h1>
        <p id='pText'  className='h1'>18 שנה ברציפות</p>

        <form onSubmit={this.handelSubmit} id='login' >
        <FormControl className='login' onSubmit={this.handelSubmit} >
  <InputLabel id="input-user"  htmlFor="input-user"  >שם משתמש</InputLabel>
  <Input  required type='text' id="input-user" aria-describedby="my-helper-text" value={this.state.username} onChange={(e)=>this.setState({username:e.target.value})}/>
  
</FormControl>
<br/>

        <FormControl onSubmit={this.handelSubmit} >
 
  <InputLabel id="input-pass" htmlFor="input-pass">סיסמא</InputLabel>

  <Input id="input-pass"  required type='password'  id="input-pass" aria-describedby="my-helper-text" value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})}/>

</FormControl>
<br/>
<Button id='login-submit' type="submit" value="Submit" variant="outlined" color="primary"  >
  התחבר
    </Button>

</form>
<a href='/Register' className='register-link'> לא משתמש רשום? לחץ כדי להירשם</a>
    </div>

    );
  }
}
