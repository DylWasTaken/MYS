import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to="/leaderboard">
          {" "}
          <i className="fas fa-fire-alt"></i>
          <span className="hide-sm"> Leaderboard</span>
        </Link>
      </li>
      <li>
        <Link to="/Posts">
          <i className={"fas fa-plus"}></i>
          <span className="hide-sm"> Post</span>
        </Link>
      </li>
      <li>
        <Link to="/dashboard">
          {" "}
          <i className={"fas fa-user"}></i>
          <span className="hide-sm"> Dashboard</span>
        </Link>
      </li>
      <li>
        <Link onClick={logout} to="#!">
          <i className={"fas fa-sign-out-alt fa-flip-horizontal"}></i>
          <span className="hide-sm"> Logout</span>
        </Link>
      </li>
    </ul>
  );

  const guestlinks = (
    <ul>
      <li>
        <Link to="/leaderboard">
          <i className="fas fa-fire-alt"></i>
          <b className="hide-sm">Leaderboard</b>
        </Link>
      </li>
      <li>
        <Link to="/register">
          <i className="far fa-address-card"></i>
          <b className="hide-sm">Register</b>
        </Link>
      </li>
      <li>
        <Link to="/login">
          <i className={"fas fa-sign-out-alt "}></i>
          <b className="hide-sm">Login</b>
        </Link>
      </li>
    </ul>
  );
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">Mind your Step: Step tracker</Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestlinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStatetoProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStatetoProps, { logout })(Navbar);
