import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import NoMatch from './components/NoMatch/NoMatch/NoMatch';
import PrivateRoute from './components/PrivateRoute/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login/Login';
import ClientOrAdmin from './components/ClientOrAdmin/ClientOrAdmin';


export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser]= useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
    <Router>
      <Switch>
        <Route exact path ="/">
          <Home></Home>
        </Route>
        <Route  path ="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
            <Login></Login>
          </Route>
        <PrivateRoute  path ="/adminOrclient">
          <ClientOrAdmin></ClientOrAdmin>
        </PrivateRoute>
        <Route  path="*">
            <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>  
  );
}

export default App;
