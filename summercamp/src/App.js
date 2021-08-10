import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import UserDashboard from './components/UserDashboard/UserDashboard';
import Navbar from './components/Navbar/Navbar1';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import FoodMenu from './components/FoodMenu/FoodMenu';
import ChildRegistration from './components/ChildRegistration/ChildRegistration';


import React, {Fragment} from 'react';
class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
       user: {name:'danielle'},
       loginStatus:false,

        


      };
      this.getAppContent=this.getAppContent.bind(this);
      this.setUser=this.setUser.bind(this);
    }

    setUser(user1){
      console.log(user1)
      console.log('setUser')

      this.setState({user:user1})
      this.setState({loginStatus:true});

    }
   getAppContent() { 
 
    return (
        
        <div className={''}>

            <Switch>

                <Route path={'/'} exact
                       render={(props) =>
                           <Home {...props}
                           setUser={this.setUser}
                           loginStatus={this.state.loginStatus}

                                 />} />
                                  <Route path={'/Register'} exact
                       render={(props) =>
                           <Register {...props}
                           setUser={this.setUser}
                           user={this.state.user}
                           loginStatus={this.state.loginStatus}
                                 />} />
                                        <Route path={'/UserDashboard'} exact
                       render={(props) =>
                           <UserDashboard {...props}
                           user={this.state.user}
                                 />} />
                                             <Route path={'/AdminDashboard'} exact
                       render={(props) =>
                           <AdminDashboard {...props}
                           user={this.state.user}
                                 />} />

<Route path={'/FoodMenu'} exact
                       render={(props) =>
                           <FoodMenu {...props}
                           user={this.state.user}
                                 />} />

<Route path={'/ChildRegistration'} exact
                       render={(props) =>
                           <ChildRegistration {...props}
                           user={this.state.user}
                                 />} />
  
            </Switch>
            
        </div>
    );
  }
 render(){
  return (
    <div className='App-background'>

   <Router>
   <div >
    <Fragment>
    {this.getAppContent()}
        </Fragment>
        </div>
        {/* <hr className='hr'/> */}
  </Router>

  </div>
  );
  

  }
}
export default App;
