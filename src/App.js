import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Shop from './pages/Shop/shop.component';
import Homepage from './pages/Homepage/homepage.components';
import Header from './components/Header/header.component';



function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
