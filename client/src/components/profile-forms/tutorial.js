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
  const startStats = {
    walk: 0.0,
    run: 0.0,
    cycle: 0.0,
    swim: 0.0,
    horseRiding: 0.0,
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
        <h1 className="large text-primary">Tutorial</h1>
        <div style={{ width: "inherit", height: "50vh", margin: "5%" }}>
          <Map totalStats={totalStats} title={"Tutorial"} />
        </div>
        <br />
        <div>
          Thank you for signing up to take part in the virtual Mind Your Step
          2020{" "}
        </div>
        <div>
          To use the distance tracker firstly record how far you have travelled
          either walking, running, cycling, horse riding or swimming in km using
          your own device. Then on the ‘add activity’ page enter the distance
          into the appropriate box (as shown below) and the distance will be
          added to your cumulative total.
        </div>
        <div>
          The leader board will show the walkers, runners, cyclists, swimmers
          and runners who have travelled the greatest cumulative distance.
        </div>
        <div>
          The tracker will also keep a record of our cumulative distance so that
          we can celebrate milestone achievements.
        </div>
        <div>
          We will be celebrating along the way the top distances travelled and
          some opportunities for spot prizes that will be announced through our
          Facebook page.
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
