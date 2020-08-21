import React, { Fragment, useState } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Map from "../map/Map";
import { createProfile } from "../../actions/profile";

const Tutorial = ({ createProfile, history }) => {
  const totalStats = useState({
    walk: 0,
    run: 0,
    cycle: 0,
    swim: 0,
    horseRiding: 0,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(totalStats, history);
  };

  return (
  
    <Fragment>
      <div>
        <Map />
        <form onSubmit={(e) => onSubmit(e)}>
          <div
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <div style={{ display: "inline-block", padding: "1em" }}>
              <i className="fas fa-walking"></i>
              <input type="number" name="walk" min="1" max="43" />
            </div>
            <div style={{ display: "inline-block", padding: "1em" }}>
              <i className="fas fa-running"></i>
              <input type="number" name="run" min="1" max="43" />
            </div>
            <div style={{ display: "inline-block", padding: "1em" }}>
              <i className="fas fa-biking"></i>
              <input type="number" name="cycle" min="1" max="43" />
            </div>
            <div style={{ display: "inline-block", padding: "1em" }}>
              <i className="fas fa-swimmer"></i>
              <input type="number" name="swim" min="1" max="43" />
            </div>
            <div style={{ display: "inline-block", padding: "1em" }}>
              <i className="fas fa-horse"></i>
              <input type="number" name="horseRiding" min="1" max="43" />
            </div>
          </div>
          <input type="submit" className="btn btn-primary" value="Submit" />
        </form>
      </div>
    </Fragment> 
  );
};

Tutorial.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(Tutorial));
