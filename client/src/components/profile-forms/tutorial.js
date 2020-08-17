import React, { Fragment, useState } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Map from "../map/Map";
import { createProfile } from "../../actions/profile";

const Tutorial = ({ createProfile, history }) => {
  const totalStats = useState({
    run: 0,
    cycle: 0,
    swim: 0,
  });

 //const [run, cycle, swim] = totalStats;

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(totalStats, history);
  };

  return (
    <Fragment>
      <div>
        <Map />
        <form
          className="form"
          onSubmit={(e) => onSubmit(e)}
          style={{ display: "inline-block" }}
        >
          <div className="form-group" style={{ display: "inline-block" }}>
            <label> Distance run in km:</label>
            <input type="number" name="run" min="1" max="43" />
          </div>
          <div className="form-group">
            <label>Distance cycled in km:</label>
            <input type="number" name="cycle" min="1" max="86" />
          </div>
          <div className="form-group">
            <label>Distance swam in km:</label>
            <input type="number" name="swim" min="1" max="34" />
          </div>
          <input type="submit" className="btn btn-primary" value="Okay" />
        </form>
      </div>
    </Fragment>
  );
};

Tutorial.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(Tutorial));
