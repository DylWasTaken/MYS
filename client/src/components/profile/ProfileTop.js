import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProfileTop = ({
  profile: { run, cycle, swim, badges },
}) => {
  return (
    <div>
      <div style={{ display: "inline-block" }}>
      <div style={{ justifyContent: "space-evenly" }}>
              <div style={{ display: "inline-block" }}>
                <p>
                  <i class="fas fa-running"></i>: {run}
                </p>
              </div>{" "}
              <div style={{ display: "inline-block" }}>
                <p>
                  <i class="fas fa-biking"></i>: {cycle}
                </p>
              </div>{" "}
              <div style={{ display: "inline-block" }}>
                <p>
                  <i class="fas fa-swimmer"></i>: {swim}
                </p>
              </div>
            </div>
      </div>
      <div>
          {badges === undefined || badges.length >0 && 
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
