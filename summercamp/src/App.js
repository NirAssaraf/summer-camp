import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import UserDashboard from './components/UserDashboard/UserDashboard';
import Navbar from './components/Navbar/Navbar1';


import React, {Fragment} from 'react';
class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
       user: 'דניאל',
        


      };
      this.getAppContent=this.getAppContent.bind(this);
      this.setUser=this.setUser.bind(this);
    }

    setUser(user){
      this.setState({user})
    }
   getAppContent() { 
 
    return (
        
        <div className={''}>

            <Switch>

                <Route path={'/'} exact
                       render={(props) =>
                           <Home {...props}
                           setUser={this.setUser}
                                 />} />
                                  <Route path={'/Register'} exact
                       render={(props) =>
                           <Register {...props}
                           setUser={this.setUser}
                                 />} />
                                        <Route path={'/UserDashboard'} exact
                       render={(props) =>
                           <UserDashboard {...props}
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
