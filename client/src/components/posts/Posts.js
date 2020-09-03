import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {Link, withRouter}  from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { addPost } from "../../actions/post";
import Map from "../map/Map";
import { createProfile, getCurrentProfile } from "../../actions/profile";

const Posts = ({ profile: {profile, loading}, addPost, setAlert, createProfile , history}) => {
  const [totalStats, setFormData] = useState({
    walk: 0,
    run: 0,
    cycle: 0,
    swim: 0,
    horseRiding: 0,
  });

  useEffect(()=> {
    getCurrentProfile();
  });

  const { walk, run, cycle, swim, horseRiding } = totalStats;
  const onSubmit = (e) => {
    addPost({ walk, run, cycle, swim, horseRiding });
    createProfile({totalStats, history});
    window.location.reload(false);
    setAlert("Activity added", "success");
  };

  const onChange = (e) =>
    setFormData({ ...totalStats, [e.target.name]: e.target.value });
  return (
    <Fragment>
      <div
        style={{
          width: "inherit",
          height: "50vh",
          margin: "5%",
          paddingBottom: "11%",
        }}
      >
         <h1 className="large text-primary">Add Activity</h1>
        <Map totalStats={totalStats} title={"Add Data"} />
      </div>
      <form onSubmit={(e) => onSubmit(e)}>
        <div
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "inline-block", paddingLeft: "1%" }}>
            Walking:
            <br />
            <i className="fas fa-walking"></i>
            <input
              type="number"
              step="0.01"
              value={walk}
              name="walk"
              onChange={(e) => onChange(e)}
              min="0"
              max="9999"
            />{" "}
            <small>km</small>
          </div>
          <div style={{ display: "inline-block", paddingLeft: "5%" }}>
            Running:
            <br />
            <i className="fas fa-running"></i>
            <input
              type="number"
              step="0.01"
              value={run}
              name="run"
              onChange={(e) => onChange(e)}
              min="0"
              max="9999"
            />{" "}
            <small>km</small>
          </div>
          <div style={{ display: "inline-block", paddingLeft: "5%" }}>
            Bike Riding:
            <br />
            <i className="fas fa-biking"></i>
            <input
              type="number"
              step="0.01"
              value={cycle}
              name="cycle"
              onChange={(e) => onChange(e)}
              min="0"
              max="9999"
            />{" "}
            <small>km</small>
          </div>
          <div style={{ display: "inline-block", paddingLeft: "5%" }}>
            Swimming:
            <br />
            <i className="fas fa-swimmer"></i>
            <input
              type="number"
              step="0.01"
              value={swim}
              name="swim"
              onChange={(e) => onChange(e)}
              min="0"
              max="9999"
            />{" "}
            <small>km</small>
          </div>
          <div style={{ display: "inline-block", paddingLeft: "5%" }}>
            Horse Riding:
            <br />
            <i className="fas fa-horse"></i>
            <input
              type="number"
              step="0.01"
              value={horseRiding}
              name="horseRiding"
              onChange={(e) => onChange(e)}
              min="0"
              max="9999"
            />{" "}
            <small>km</small>
          </div>
        </div>
        <input type="submit" className="btn btn-primary" value="Submit" />
      </form>
    </Fragment>
  );
};

Posts.propTypes = {
  addPost: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  createProfile: PropTypes.func.isRequired,
};

const mapStateToProps = state =>({
  profile: state.profile
});



export default connect(mapStateToProps, { addPost, setAlert, createProfile, getCurrentProfile})(withRouter(Posts));
