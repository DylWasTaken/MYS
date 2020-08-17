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
          <i class="fas fa-fire-alt"></i>
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
          <i className={"fas fa-sign-out-alt"}></i>
          <span className="hide-sm"> Logout</span>
        </Link>
      </li>
    </ul>
  );

  const guestlinks = (
    <ul>
      <li>
        <i className="hide-sm" class="fas fa-fire-alt"></i>
        <Link to="/leaderboard">Leaderboard</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
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
