import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    walk,
    run,
    swim,
    cycle,
    horseRiding,
    badges,
  },
}) => {
  return (
    <div className="profile bg-light" style={{}}>
      <img src={avatar} alt="" className="round-img" />
      <div>
        <h2>{name}</h2>
        <div style={{ justifyContent: "space-evenly" }}>
          <div style={{ display: "inline-block" }}>
            <p>
              {" "}
              <i className="fas fa-walking"></i>: {walk}
            </p>
          </div>{" "}
          <div style={{ display: "inline-block" }}>
            <p>
              {" "}
              <i className="fas fa-running"></i>: {run}
            </p>
          </div>{" "}
          <div style={{ display: "inline-block" }}>
            <p>
              {" "}
              <i className="fas fa-biking"></i>: {cycle}
            </p>
          </div>{" "}
          <div style={{ display: "inline-block" }}>
            <p>
              {" "}
              <i className="fas fa-swimmer"></i>: {swim}
            </p>
          </div>
          <div style={{ display: "inline-block" }}>
            <p>
              {" "}
              <i className="fas fa-horse"></i>: {horseRiding}
            </p>
          </div>
        </div>
      </div>
      <div style={{ display: "inline-block" }}>
        <Link to={`/profile/${_id}`} className="btn btn-primary">
          View Profile
        </Link>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
