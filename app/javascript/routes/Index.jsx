import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Restaurants from "../components/Restaurants";

export default (

    <Router>
      
      <div>
        <br></br>
        <nav>
          <ul>
            <li>
              <Link to="/">Show All Restaurants</Link>
            </li>
            <li>
              <Link to="/new_restaurant">Add Restaurant</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <br></br>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/new_restaurant">
            <AddRes />
          </Route>
          <Route path="/" exact component={Restaurants}/>
        </Switch>
      </div>
    </Router>
  );

function Home() {
  return <h2>Your Restaurants</h2>;
}

function About() {
  return <h2>About</h2>;
}

function AddRes() {
  return <h2>Add a Restaurant</h2>;
}