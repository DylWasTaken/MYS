import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from "prop-types";

const DashboardActions = ({
    profile: {
        user: { _id}
      }
 } ) => {
    return (
        <div class="dash-buttons">
         {/*   <Link to="/edit-profile" class="btn btn-light">  
                Edit profile
    </Link>*/}
            <Link to={`/profile/${_id}`} class="btn btn-light">  
                View my progress
            </Link>
            <Link to="/Posts" class="btn btn-light">  
                View everyones progress
            </Link>
        </div>
    )
}

DashboardActions.propTypes = {
    profile: PropTypes.object.isRequired,
  };

export default DashboardActions;