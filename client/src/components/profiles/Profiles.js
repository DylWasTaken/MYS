import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getProfiles } from "../../actions/profile";
import {GWL,GRL, GCL, GSL, GHL} from "../../actions/post";
import Card from "@material-ui/core/Card";


const Profiles = ({ getProfiles, GWL,GRL, GCL, GSL, GHL, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);
  useEffect(() => {
    GWL();
  }, [GWL]);
  useEffect(() => {
   GRL();
  }, [GRL]);
  useEffect(() => {
    GCL();
  }, [GCL]);
  useEffect(() => {
    GSL();
  }, [GSL]);
  useEffect(() => {
    GHL();
  }, [GHL]);
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className="large text-primary">Leader boards</h1>
          <div style={{ flexDirection: "row", flexWrap: "wrap" }}>
           <Card>
             <ol>
        
              </ol>
           </Card>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  GWL: PropTypes.func.isRequired,
  GRL : PropTypes.func.isRequired, 
  GCL: PropTypes.func.isRequired,
  GSL: PropTypes.func.isRequired,
  GHL: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  WL: state.WL,
  RL: state.RL,
  CL: state.CL,
  SL: state.SL,
  HRL: state.HRL,
});

export default connect(mapStateToProps, { getProfiles, GWL, GRL, GCL,GSL ,GHL })(Profiles);
