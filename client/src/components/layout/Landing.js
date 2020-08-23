import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Map from "../map/Map";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <div style={{ position: "relative" }}>
            <Map />
          </div>
          <h1 className="x-large">Mind Your Step: Distance Tracker</h1>
          <div style={{ display: "inline-flex", justifyContent: "space-evenly" }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/MindYourStepUK"
            >
              <span style={{ color: "#3c5a99" }}>
                <i
                  className="fab fa-facebook-square fa-3x"
                  style={{ colour: "Blue" }}
                ></i>
              </span>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.mind.org.uk/"
              style={{ padding: "0%", margin: "0%" }}
            >
              <img
                src="mind-logo.svg"
                alt="Minds charity"
                style={{ maxHeight: "3em", maxWidth:"7em" }}
              />
            </a>
   
          </div>
          <p className="lead">
            Track your walks, runs, swims, bike rides, and horse rides and compete for badges
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
