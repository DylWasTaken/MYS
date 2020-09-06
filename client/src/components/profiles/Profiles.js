import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getProfiles } from "../../actions/profile";
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
          <h1 className="large text-primary">Leader boards</h1>
          <small> Updated on the 06/09/2020</small>
          <div style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <Card
              style={{
                backgroundColor: "#d1cdcd",
                maxWidth: "30%",
                margin: "1%",
                padding: "1%",
              }}
            >
              <u>Top Walkers</u>
              <table>
                <tbody>
                  <tr>
                    <td style={{ textAlign: "middle" }}> Darren Harvey</td>
                    <td style={{ textAlign: "middle" }}>48.9km</td>
                  </tr>
                  <tr>
                   
                    <td style={{ textAlign: "middle" }}> Tom</td>
                    <td style={{ textAlign: "middle" }}> 39km</td>
                  </tr>
                  <tr>
                   
                    <td style={{ textAlign: "middle" }}> Zara Herring</td>
                    <td style={{ textAlign: "middle" }}>25km</td>
                  </tr>
                  <tr>
                   
                    <td style={{ textAlign: "middle" }}> Rachel Meredith </td>
                    <td style={{ textAlign: "middle" }}> 22.9km </td>
                  </tr>
                  <tr>
                   
                    <td style={{ textAlign: "middle" }}> Sabian</td>{" "}
                    <td style={{ textAlign: "middle" }}> 21.17km</td>{" "}
                  </tr>
                </tbody>
              </table>
            </Card>
            <Card
              style={{
                backgroundColor: "#d1cdcd",
                maxWidth: "30%",
                margin: "1%",
                padding: "1%",
              }}
            >
              <u>Top Runners</u>
              <table>
                <tbody>
                  <tr>
                    <td style={{ textAlign: "middle" }}> Louise Haine</td>
                    <td style={{ textAlign: "middle" }}>42.05km</td>
                  </tr>
                  <tr>
                   
                    <td style={{ textAlign: "middle" }}> Phil R</td>
                    <td style={{ textAlign: "middle" }}>26.54km</td>
                  </tr>
                  <tr>
                   
                    <td style={{ textAlign: "middle" }}> Thomas Mawdsley</td>
                    <td style={{ textAlign: "middle" }}> 23.1km</td>
                  </tr>
                  <tr>
                   
                    <td style={{ textAlign: "middle" }}> Rob Nason </td>
                    <td style={{ textAlign: "middle" }}> 20.45km</td>
                  </tr>
                  <tr>
                   
                    <td style={{ textAlign: "middle" }}>
                     
                      Daniel Hartmann
                    </td>{" "}
                    <td style={{ textAlign: "middle" }}>16.72km</td>
                  </tr>
                </tbody>
              </table>
            </Card>
            <Card
              style={{
                backgroundColor: "#d1cdcd",
                maxWidth: "30%",
                margin: "1%",
                padding: "1%",
              }}
            >
              <u>Top Cyclers</u>
              <table>
                <tbody>
                  <tr>
                    <td style={{ textAlign: "middle" }}> Phil Land</td>
                    <td style={{ textAlign: "middle" }}> 250.7km</td>
                  </tr>
                  <tr>
                   
                    <td> Thomas Bisby</td>
                    <td style={{ textAlign: "middle" }}>193.67km</td>
                  </tr>
                  <tr>
                   
                    <td> Amy Jones</td>
                    <td style={{ textAlign: "middle" }}> 105km</td>
                  </tr>
                  <tr>
                   
                    <td> Iain McLachlan</td>
                    <td style={{ textAlign: "middle" }}> 101.76km</td>
                  </tr>
                  <tr>
                 
                    <td style={{ textAlign: "middle" }}> Pete Spencer</td>{" "}
                    <td style={{ textAlign: "middle" }}> 93.56km</td>{" "}
                  </tr>
                </tbody>
              </table>
            </Card>
            <Card
              style={{
                backgroundColor: "#d1cdcd",
                maxWidth: "30%",
                margin: "1%",
                padding: "1%",
              }}
            >
              <u>Top Swimmers</u>
              <table>
                <tbody>
                  <tr>
                    <td style={{ textAlign: "middle" }}>Darren Harvey</td>
                    <td style={{ textAlign: "middle" }}>5.66km</td>
                  </tr>
                  <tr>
                   
                    <td style={{ textAlign: "middle" }}> James Mason</td>
                    <td style={{ textAlign: "middle" }}> 1.55km</td>
                  </tr>
                </tbody>
              </table>
            </Card>
            <Card
              style={{
                backgroundColor: "#d1cdcd",
                maxWidth: "30%",
                margin: "1%",
                padding: "1%",
              }}
            >
              <u>Top Horse Riders</u>
              <table>
                <tbody>
                  <tr>
                    <td style={{ textAlign: "middle" }}> Paula Parker</td>
                    <td style={{ textAlign: "middle" }}> 16km</td>
                  </tr>
                  <tr>
                   
                    <td style={{ textAlign: "middle" }}> Philippa Russell</td>
                    <td style={{ textAlign: "middle" }}> 12km</td>
                  </tr>
                </tbody>
              </table>
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
