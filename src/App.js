import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Shop from './pages/Shop/shop.component';
import Homepage from './pages/Homepage/homepage.components';
import Header from './components/Header/header.component';
import SigninSignup from './pages/Signin-Signup/signin-signup.component';
import { auth } from './Firebase/firebase.utils';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user);
    })

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
 
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route path='/signin' component={SigninSignup} />
        </Switch>
      </div>
    );
  }
}



export default App;
