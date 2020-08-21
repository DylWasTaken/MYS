import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const DashboardActions = ({
  profile: {
    user: { _id },
  },
}) => {
  return (
    <div className="dash-buttons">
      {/*   <Link to="/edit-profile" class="btn btn-light">  
                Edit profile
    </Link>*/}
      <Link to={`/profile/${_id}`} className="btn btn-light">
        View my progress
      </Link>
      <Link to="/Posts" className="btn btn-light">
        View everyone's progress
      </Link>
    </div>
  );
};

DashboardActions.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default DashboardActions;
