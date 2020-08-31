import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getProfiles } from "../../actions/profile";
import ProfileItem from "./ProfileItem";
import Card from "@material-ui/core/Card";

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className="large text-primary">Leader board</h1>
          <div style={{ flexDirection: "row-reverse" }}>
            <Card
              style={{
                backgroundColor: "#d1cdcd",
                maxWidth: "30%",
                margin: "1%",
                padding: "1%"
              }}
            >
              Top Walkers
              {profiles.length > 0 ? (
                profiles.map((profile) => (
                  <ProfileItem key={profile._id} profile={profile} />
                ))
              ) : (
                <h4> No profiles made yet...</h4>
              )}
            </Card>
            <Card
              style={{
                backgroundColor: "#d1cdcd",
                maxWidth: "30%",
                margin: "1%",
                padding: "1%"
              }}
            >
              Top runners
              {profiles.length > 0 ? (
                profiles.map((profile) => (
                  <ProfileItem key={profile._id} profile={profile} />
                ))
              ) : (
                <h4> No profiles made yet...</h4>
              )}
            </Card>
            <Card
              style={{
                backgroundColor: "#d1cdcd",
                maxWidth: "30%",
                margin: "1%",
                padding: "1%"
              }}
            >
              Top Cyclers
              {profiles.length > 0 ? (
                profiles.map((profile) => (
                  <ProfileItem key={profile._id} profile={profile} />
                ))
              ) : (
                <h4> No profiles made yet...</h4>
              )}
            </Card>
            <Card
              style={{
                backgroundColor: "#d1cdcd",
                maxWidth: "30%",
                margin: "1%",
                padding: "1%"
              }}
            >
              Top Swimmers
              {profiles.length > 0 ? (
                profiles.map((profile) => (
                  <ProfileItem key={profile._id} profile={profile} />
                ))
              ) : (
                <h4> No profiles made yet...</h4>
              )}
            </Card>
            <Card
              style={{
                backgroundColor: "#d1cdcd",
                maxWidth: "30%",
                margin: "1%",
                padding: "1%"
              }}
            >
              Top Horse Riders
              {profiles.length > 0 ? (
                profiles.map((profile) => (
                  <ProfileItem key={profile._id} profile={profile} />
                ))
              ) : (
                <h4> No profiles made yet...</h4>
              )}
            </Card>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
