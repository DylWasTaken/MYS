import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getProfileById } from "../../actions/profile";
import Map from "../map/Map";


const Profile = ({
  getProfileById,
  profile: { profile, loading},
  auth,
  match,
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);
  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment style={{justifyContent:"space-evenly"}}>
          <h1> {profile.user_id}</h1>
          <div style={{width: "inherit", height:"50vh", margin: "5%"}}>
          <Map  totalStats={profile} />
          </div>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user_id && (
              <Fragment>
                <p>form here</p>
              </Fragment>
            )}
          <div className="profile-grid my-1">
            
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
