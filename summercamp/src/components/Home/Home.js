import React, {Component} from 'react';
import PoolBack from '../../Images/poolback.jpeg';
import './Home.css';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import {Redirect} from "react-router-dom";
import axios from 'axios';

export default class Home extends Component {
    constructor(props, context) {
        super(props, context);
       this.state={
        username:'',
        password:'',
        loginStatus:false,
        error:'',
       }
    
this.handelSubmit=this.handelSubmit.bind(this);
    }

handelSubmit(){

  
    this.setState({error:''})
    if(this.state.username===''){
    this.setState({error:"חסר שם משתמש"})
    return
    }


    if(this.state.password===''){
      this.setState({error:"חסר סיסמא"})
      return
      }
  

    const postData = {
      password: this.state.password,
      email:this.state.username,
  };
    axios.get('http://10.100.102.21:8080/api/user/'+postData.email+'/'+postData.password)
    .then(res => {

      console.log(res.data)
      this.props.setUser(res.data)


    })
    .catch(() => {}   );
    console.log('send')
  }




      render() {
        if(this.props.loginStatus)
        return <Redirect to={'/UserDashboard'}/>;

    return (
    <div className='Home' >
      <div className='background_home'>        </div>

        <h1 className='h1'> קייטנת עושים גלים <span className='summer_txt'>חלום של קיץ</span></h1>
        <p id='pText'  className='h1'>18 שנה ברציפות</p>

        <div  id='login' >
        <FormControl className='login'  >
  <InputLabel id="input-user"  htmlFor="input-user"  >מייל</InputLabel>
  <Input  required type='text' id="input-user" aria-describedby="my-helper-text" value={this.state.username} onChange={(e)=>this.setState({username:e.target.value})}/>
  
</FormControl>
<br/>

        <FormControl  >
 
  <InputLabel id="input-pass" htmlFor="input-pass">סיסמא</InputLabel>

  <Input id="input-pass"  required type='password'  id="input-pass" aria-describedby="my-helper-text" value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})}/>

</FormControl>
<br/>
<Button id='login-submit'  onClick={this.handelSubmit} type="submit" value="Submit" variant="outlined" color="primary"  >
  התחבר
    </Button>

</div>
<a href='/Register' className='register-link'> לא משתמש רשום? לחץ כדי להירשם</a>
    </div>

    );
  }
}
