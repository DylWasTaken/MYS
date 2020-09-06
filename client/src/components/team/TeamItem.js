import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Map from "../map/Map";
import { connect } from "react-redux";

const TeamItem = ({
  auth,
  post: { _id, walk, run, cycle, swim, horseRiding },
}) => {
  const totalStats = {
    walk,
    run,
    cycle,
    swim,
    horseRiding,
  };
  const totalDist = +walk + +run + +cycle + +swim + +horseRiding;
  return (
    <Fragment>
      <div
        style={{
          width: "inherit",
          height: "50vh",
          marginTop: "1%",
          marginBottom: "5%",
        }}
      >
        <Map totalStats={totalStats} title={"Team Total"} />
      </div>
      <br />
      <p style={{paddingTop:"5%"}}>

        So far as a team we've traveled a total distance of: {(totalDist).toFixed(2)} km
      </p>
      <div>
        <p>We walked: {walk.toFixed(2)}km</p>
        <p>We run: {run.toFixed(2)}km</p>
        <p>We cycled: {cycle.toFixed(2)}km</p>
        <p>We swam: {swim.toFixed(2)}km</p>
        <p>And rode horses for : {horseRiding.toFixed(2)}km</p>
        Well done everyone :)
      </div>
    </Fragment>
  );
};

TeamItem.propTypes = {
  post: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(TeamItem);
