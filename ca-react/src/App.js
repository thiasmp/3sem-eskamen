import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import "./style2.css";
import Home from './components/Home';
import Bored from "./components/Bored";
import Cat from './components/Cat';
import Dog from './components/Dog';
import Genderize from './components/Genderize';
import facade from './facade';
import AllAuctions from './components/AllAuctions';
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";





export default function BasicExample() {
  const [activity, setActivity] = useState("");
  const [type, setType] = useState("");
  const [fact, setFact] = useState("");
  const [auction, setAuction] = useState([]);
  const [message, setMessage] = useState("");

  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("");
  const [loggedInAdmin, setLoggedInAdmin] = useState("");
  const [errorMessage, setErrorMessage] = useState('All is good ... so far');

  
  const logout = () => {
    facade.logout();
    setLoggedIn(false);
    setErrorMessage('Logged out.')
  };
 
  
  useEffect(() => {
  fetch("https://thiasmeyer.dk/tomcat/exam-sp6/api/auctions/allauctions")
    .then(res => res.json())
    .then(data => {
      let temp = [];
       data.forEach(element => {
        const newAuction = {
          name: element.name,
          date: element.date,
          time: element.time,
          location: element.location
         }
         
         temp.push(newAuction);
       })
       setAuction(temp);
    })
},[]) 


  return (
    <Router>
      <div>
        <ul className="header">
          <li>
            <NavLink exact activeClassName="selected" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="selected" to="/AllAuctions">SP1</NavLink>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <div className="content">
        <Switch>
          <Route exact path="/">
            <Home 
                logout={logout}
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                facade={facade}
                setErrorMessage={setErrorMessage}
                loggedInUser={loggedInUser}
                setLoggedInUser={setLoggedInUser}
            />
          </Route>
          <Route path="/bored">
              {facade.hasUserAccess('user', loggedIn) && 
              <Bored facade={facade} setErrorMessage={setErrorMessage} activity={activity} type={type}/>}
          </Route>
            <Route path="/AllAuctions">
            {facade.hasUserAccess('user', loggedIn) && 
              <AllAuctions auction={auction} facade={facade} setErrorMessage={setErrorMessage}/>}
                
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}