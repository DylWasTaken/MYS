import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Map from "../map/Map";

const DashboardMap = ({
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
    </Fragment>
  );
};

DashboardMap.propTypes = {
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(DashboardMap);
