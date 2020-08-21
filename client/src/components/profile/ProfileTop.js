import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProfileTop = ({
  profile: { walk ,run, cycle, swim, horseRiding, badges },
}) => {
  return (
    <div>
      <div style={{ display: "inline-block" }}>
      <div style={{ justifyContent: "space-evenly" }}>
      <div style={{ display: "inline-block" }}>
                <p>
                  <i className="fas fa-walking"></i>: {walk}
                </p>
              </div>{" "}
              <div style={{ display: "inline-block" }}>
                <p>
                  <i className="fas fa-running"></i>: {run}
                </p>
              </div>{" "}
              <div style={{ display: "inline-block" }}>
                <p>
                  <i className="fas fa-biking"></i>: {cycle}
                </p>
              </div>{" "}
              <div style={{ display: "inline-block" }}>
                <p>
                  <i className="fas fa-swimmer"></i>: {swim}
                </p>
              </div>
              <div style={{ display: "inline-block" }}>
                <p>
                  <i className="fas fa-horse"></i>: {horseRiding}
                </p>
              </div>
            </div>
      </div>
      <div>
          {badges === undefined  && 
          <Fragment>
              <h3>Badges:</h3>
              {badges.forEach(element=> <p>element</p>)}
          </Fragment>
          }
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.func.isRequired,
  user: PropTypes.func.isRequired,
};

export default ProfileTop;
