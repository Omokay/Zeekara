import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Shop from './pages/Shop/shop.component';
import Homepage from './pages/Homepage/homepage.components';
import Header from './components/Header/header.component';
import SigninSignup from './pages/Signin-Signup/signin-signup.component';



function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shop} />
        <Route path='/signin' component={SigninSignup} />
      </Switch>
    </div>
  );
}

export default App;
