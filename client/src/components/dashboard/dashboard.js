import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import DashboardActions from "./DashboardActions";
import DashboardMap from "./DashboardMap";
import Map from "../map/Map";
import { getPosts, deletePost, getTotalPosts } from "../../actions/post";
import Card from "@material-ui/core/Card";
import Moment from "react-moment";
import { Button } from "@material-ui/core";

const Dashboard = ({
  getCurrentProfile,
  getTotalPosts,
  auth: { user },
  profile: { profile, loading },
  deletePost,
  getPosts,
  post: { logs, total },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  useEffect(() => {
    getTotalPosts();
  }, [getTotalPosts]);
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary">Welcome</h1>
      <p className="lead">
        <i className="fas fa-user"></i>Welcome {user && user.name}{" "}
      </p>
      {profile !== null ? (
        <>
          <div
            style={{
              width: "inherit",
              height: "50vh",
              marginTop: "1%",
              marginBottom: "5%",
            }}
          >
            {total.map((post) => (
              <DashboardMap key={post._id} post={post} />
            ))}
          </div>
          <br />
          <Card style={{ backgroundColor: "#d1cdcd", marginTop: "10%" }}>
            <table style={{ width: "100%" }}>
              <th>Walk</th>
              <th>Run</th>
              <th>Cycle</th>
              <th>Swim</th>
              <th>Horse Riding</th>
              <th>Date</th>
              <th>Remove?</th>

              {logs.map((log) => (
                <tr>
                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                    {log.walk}
                  </td>
                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                    {log.run}
                  </td>
                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                    {log.cycle}
                  </td>
                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                    {log.swim}
                  </td>
                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                    {log.horseRiding}
                  </td>
                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                    <Moment format="DD/MM/YY">{log.date}</Moment>
                  </td>
                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                    <Button onClick={(e) => deletePost(log._id)}>
                      <i className="fas fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </table>
          </Card>
          <br />
          <DashboardActions profile={profile} />
        </>
      ) : (
        <Fragment>
          <p>You have not viewed the tutorial please click the link below</p>
          <Link to="./tutorial" className="btn btn-primary my-1">
            View Tutorial
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
  getTotalPosts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  post: state.post,
});

export default connect(mapStateToProps, {
  getCurrentProfile,
  getPosts,
  deletePost,
  getTotalPosts,
})(Dashboard);
