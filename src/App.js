import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Shop from './pages/Shop/shop.component';
import Homepage from './pages/Homepage/homepage.components';
import Header from './components/Header/header.component';
import SigninSignup from './pages/Signin-Signup/signin-signup.component';
import { auth, createUserProfileDocument } from './Firebase/firebase.utils';
import { setCurrentUser } from './Redux/User/user.action';
import { connect } from 'react-redux';



class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data
            }
          })
        });
      }
      setCurrentUser(userAuth);
    });

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
}




const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
