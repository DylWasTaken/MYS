import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getAllPosts } from "../../actions/post";
import Map from "../map/Map";



const Team = ({
  getAllPosts, 
  post: {logs, loading },
}) => {
  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  return (
    <Fragment>
      {logs === null || loading ? (
        <Spinner />
      ) : (
        <Fragment style={{justifyContent:"space-evenly"}}>
          <h1 className="large text-primary"> Team Total</h1>
          <div style={{width: "inherit", height:"50vh", margin: "5%"}}>
         
          </div>
          <p> So far as a team we've travelled: </p>
          <div className="profile-grid my-1">
            
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Team.propTypes = {
  getAllPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getAllPosts })(Team);
