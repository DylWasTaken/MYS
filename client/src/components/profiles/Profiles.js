import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getProfiles } from "../../actions/profile";
import { GWL, GRL, GCL, GSL, GHL } from "../../actions/post";
import Card from "@material-ui/core/Card";

const Profiles = ({
  getProfiles,
  GWL,
  GRL,
  GCL,
  GSL,
  GHL,
  profile: { profiles, loading },
  post: { wl, rl, cl, sl, hrl },
}) => {
  const users = wl[0];

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
      {
        (wl,
        rl,
        cl,
        sl,
        hrl === null || loading ? (
          <Spinner />
        ) : (
          <Fragment>
            <h1 className="large text-primary">Leader boards</h1>
            <div style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Card>
                <h6> Top Walkers</h6>
                <ol>
                  {wl &&
                    wl.map((wl) => (
                      <li key={wl._id}>
                        {wl._id} : {wl.walk.toFixed(2)}km
                      </li>
                    ))}
                </ol>
              </Card>
              <Card>
                <h6> Top Runners</h6>
                <ol>
                  {rl &&
                    rl.map((rl) => (
                      <li key={rl._id}>
                        {rl._id} : {rl.run.toFixed(2)}km
                      </li>
                    ))}
                </ol>
              </Card>
              <Card>
                <h6> Top Cyclers</h6>
                <ol>
                  {cl &&
                    cl.map((cl) => (
                      <li key={cl._id}>
                        {cl._id} : {cl.cycle.toFixed(2)}km
                      </li>
                    ))}
                </ol>
              </Card>
              <Card>
                <h6> Top Swimmers</h6>
                <ol>
                  {sl &&
                    sl.map((sl) => (
                      <li key={sl._id}>
                        {sl._id} : {sl.swim.toFixed(2)}km
                      </li>
                    ))}
                </ol>
              </Card>
              <Card>
                <h6> Top Horse Riders</h6>
                <ol>
                  {hrl &&
                    hrl.map((hrl) => (
                      <li key={hrl._id}>
                        {hrl._id} : {hrl.horseRiding.toFixed(2)}km
                      </li>
                    ))}
                </ol>
              </Card>
            </div>
          </Fragment>
        ))
      }
    </Fragment>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  GWL: PropTypes.func.isRequired,
  GRL: PropTypes.func.isRequired,
  GCL: PropTypes.func.isRequired,
  GSL: PropTypes.func.isRequired,
  GHL: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  WL: state.WL,
  RL: state.RL,
  CL: state.CL,
  SL: state.SL,
  HRL: state.HRL,
  post: state.post,
});

export default connect(mapStateToProps, {
  getProfiles,
  GWL,
  GRL,
  GCL,
  GSL,
  GHL,
})(Profiles);
