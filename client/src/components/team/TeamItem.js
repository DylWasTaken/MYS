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
      <p>
        {" "}
        So far as a team we've traveled a total distance of: {totalDist} km
      </p>
      <div>
        <p>We walked: {walk}km</p>
        <p>We run: {run}km</p>
        <p>We cycled: {cycle}km</p>
        <p>We swam: {swim}km</p>
        <p>And rode horse for : {horseRiding}km</p>
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
