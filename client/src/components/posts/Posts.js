import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { addPost } from "../../actions/post";

const Posts = ({ addPost, setAlert }) => {
  const [formData, setFormData] = useState({
    walk: 0,
    run: 0,
    cycle: 0,
    swim: 0,
    horseRiding: 0,
  });

  const { walk, run, cycle, swim, horseRiding } = formData;
  const onSubmit = (e) => {
    addPost({ walk, run, cycle, swim, horseRiding });
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  return (
   <Fragment>
      <form onSubmit={(e) => onSubmit(e)}>
        <div
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          <div style={{ display: "inline-block", padding: "1em" }}>
            Walking
            <i className="fas fa-walking"></i>
            <input
              type="number"
              step="0.01"
              value={walk}
              name="walk"
              onChange={(e) => onChange(e)}
              min="0"
              max="43"
            /> <>km</>
          </div>
          <div style={{ display: "inline-block", padding: "1em" }}>
            Running
            <i className="fas fa-running"></i>
            <input
              type="number"
              step="0.01"
              value={run}
              name="run"
              onChange={(e) => onChange(e)}
              min="0"
              max="43"
            /> <>km</>
          </div>
          <div style={{ display: "inline-block", padding: "1em" }}>
            Cycling
            <i className="fas fa-biking"></i>
            <input
              type="number"
              step="0.01"
              value={cycle}
              name="cycle"
              onChange={(e) => onChange(e)}
              min="0"
              max="86"
            /> <>km</>
          </div>
          <div style={{ display: "inline-block", padding: "1em" }}>
            Swimming
            <i className="fas fa-swimmer"></i>
            <input
              type="number"
              step="0.01"
              value={swim}
              name="swim"
              onChange={(e) => onChange(e)}
              min="0"
              max="43"
            /> <>km</>
          </div>
          <div style={{ display: "inline-block", padding: "1em" }}>
            Horse Riding
            <i className="fas fa-horse"></i>
            <input
              type="number"
              step="0.01"
              value={horseRiding}
              name="horseRiding"
              onChange={(e) => onChange(e)}
              min="0"
              max="43"
            /> <>km</>
          </div>
        </div>
        <input type="submit" className="btn btn-primary" value="Submit" />
      </form>
    </Fragment>
  );
};

Posts.propTypes = {
  addPost: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { addPost, setAlert })(Posts);
