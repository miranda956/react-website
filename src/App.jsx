import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar';
import Home from "./components/Home";
import About from "./components/About";
import Default from "./components/Default";
import News from "./components/News";
function  App() {
  return (
    <React.Fragment>
      <CustomNavbar/>
      <Switch>
        <Route exact path ="/"component={Home}/>
        <Route path="/About" component={About}/>
        <Route path ="/News"component={News}/>
        <Route component={Default}/>
      </Switch>


    </React.Fragment>
    
  );
}

export default App;
