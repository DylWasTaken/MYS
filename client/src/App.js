import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alert from "./components/layout/Alert";
import Dashboard from "./components/dashboard/dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";
import Tutorial from "./components/profile-forms/tutorial";
import Profiles from "./components/profiles/Profiles";
import Posts from "./components/posts/Posts";
import Profile from "./components/profile/Profile";
import Team from  "./components/team/Team";
//import Map from './components/map/Map';
//Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/leaderboard" component={Profiles} />
              <PrivateRoute exact path="/profile/:id" component={Profile} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/tutorial" component={Tutorial} />
              <PrivateRoute exact path="/posts" component={Posts} />
              <PrivateRoute exact path="/team" component={Team} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
