import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <h1 className="large text-primary">Sign Up</h1>
      <div>
        Mind Your Step is an annual charity event in memory of Jamie Margetts,
        who took his own life in October 2016, aged 41. We want to raise
        awareness of mental health issues, bring people together and raise money
        for Mind. This year we’re asking you to get active in September and
        record the distances that you cover on foot, by bike, in water or on a
        horse, micro-scooter or whatever you can find, in the hope that together
        we can reach from Derby to the Moon (384,400km).
      </div>
      <div>
        We’ve set up this website to chart our collective progress. Register as
        a user, and manually enter how far you travel between 1st and 30th
        September. See how you stack up in the leader board, and how close we
        are to achieving our collective goal. If you want to take part, we’d be
        grateful for donations to Mind via our JustGiving page:
        <a
          target="_blank"
          href="https://www.justgiving.com/team/MindYourStep20"
          rel="noopener noreferrer"
        >
          {" "}
          https://www.justgiving.com/team/MindYourStep20{" "}
        </a>
      </div>{" "}
      <div>
        The more the merrier – please encourage your friends and family to join
        in, donate or sponsor you. (It’s a long way to the moon, after all.)
        Please visit our website at www.mindyourstepwalk.co.uk or visit our
        Facebook page for updates, including details of spot prizes we’re
        offering in September. We’d love you to share photos and stories of your
        activities through Facebook.
      </div>
      <div>
        Please do exercise with others, but consider the latest guidance on
        Covid-19.
      </div>
      <div>
        We’re taking your name and email address, by signing up you agree to us
        keeping this information for the duration of the event (September 2020).
        We will not share your contact details with anyone else. We will only
        contact you to provide updates on the collective progress of all those
        taking part as well as announcing any spot prize winners during the
        event.
      </div>
      <div>
        <b>
          We ask that you make a small donation of £5-10 to Mind for signing up,
          paid through the our just giving page:
        </b>
        <br />
        <a
          target="_blank"
          href="https://justgiving.com/fundraising/2020mys"
          rel="noopener noreferrer"
        >
          Justgiving.com/fundraising/2020mys
        </a>
      </div>
      <p className="lead">
        <i className="fas fa-user"></i> Create Your Account
      </p>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
            value={password2}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/Login"> Sign In</Link>
      </p>
    </Fragment>
  );
};
Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
