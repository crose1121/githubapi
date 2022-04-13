import './App.css';
import {
  Switch, 
  Route
} from "react-router-dom";
import Search from './components/Search';
import Repos from './components/Repos';
import Details from './components/Details';
import Error from './components/Error';
import React, {useState} from 'react';
import NavBar from './components/NavBar';
//import Component from path

function App() {

  const [newSubmit, setNewSubmit] = useState(false);

  return (
      <div className="App">
        <NavBar/>
        <div className="container">
          <Search newSubmit={newSubmit} setNewSubmit={setNewSubmit}></Search>

          <Switch>

            <Route exact path = "/search/:name">
              <Repos newSubmit={newSubmit} setNewSubmit={setNewSubmit}/>
            </Route>

            <Route exact path = "/repos/:orgName/:repoName">
              <Details/>
            </Route>

            <Route exact path = "/error">
              <Error/>
            </Route>

          </Switch>
        </div>

      </div>
  )
}

export default App;
