import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Payment from './Components/Payment';
import Sucess from './Components/Sucess';
import Fail from './Components/Fail';
import Forgot from './Components/Forgot';


function App() {
  return (
    <Router>
    <div>
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Register" component={Register} />
      <Route exact path="/" component={Home} />
      <Route exact path="/Forgot" component={Forgot} />
      <Route exact path="/Payment" component={Payment} />
      <Route exact path="/Sucess" component={Sucess} />
      <Route exact path="/Fail" component={Fail} />
    </div>
  </Router>
  );
}

export default App;
