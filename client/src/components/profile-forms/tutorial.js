import React, { Fragment, useState } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Map from "../map/Map";
import { createProfile } from "../../actions/profile";

const Tutorial = ({ createProfile, history }) => {
  const [totalStats, setFormData] = useState({
    walk: 0,
    run: 0,
    cycle: 0,
    swim: 0,
    horseRiding: 0,
  });
  const startStats= {
    walk: 0,
    run: 0,
    cycle: 0,
    swim: 0,
    horseRiding: 0,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(startStats, history);
  };

  const onChange = (e) =>
    setFormData({ ...totalStats, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <div>
        <div style={{ width: "inherit", height: "50vh", margin: "5%" }}>
          <Map totalStats={totalStats} />
        </div>
        <div>
          Data entered into the entry boxes below will be calculated to show how
          far you have traveled either via walking, running, cycling, swimming
          or horse riding.{" "}
        </div>
        <div>
          The top runner for each week will get a badge added to their profile,
          along with badges added along the way for people who complete certain
          secret tasks
        </div>
      </div>

      <div>
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
              {" : "}
              <input
                type="number"
                 step="0.01"
                name="walk"
                min="1"
                max="43"
                onChange={(e) => onChange(e)}
              />
              <>km</>
            </div>
            <div style={{ display: "inline-block", padding: "1em" }}>
              <i className="fas fa-running"></i>
              {" : "}
              <input
                type="number"
                 step="0.01"
                name="run"
                min="1"
                max="43"
                onChange={(e) => onChange(e)}
              />
              <>km</>
            </div>
            <div style={{ display: "inline-block", padding: "1em" }}>
              <i className="fas fa-biking"></i>
              {" : "}
              <input
                type="number"
                 step="0.01"
                name="cycle"
                min="1"
                max="43"
                onChange={(e) => onChange(e)}
              />
              <>km</>
            </div>
            <div style={{ display: "inline-block", padding: "1em" }}>
              <i className="fas fa-swimmer"></i>
              {" : "}
              <input
                type="number"
                 step="0.01"
                name="swim"
                min="1"
                max="43"
                onChange={(e) => onChange(e)}
              />
              <>km</>
            </div>
            <div style={{ display: "inline-block", padding: "1em" }}>
              <i className="fas fa-horse"></i>
              {" : "}
              <input
                type="number"
                 step="0.01"
                name="horseRiding"
                min="1"
                max="43"
                onChange={(e) => onChange(e)}
              />
              <>km</>
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
