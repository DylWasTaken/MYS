import React, { Fragment, useState } from "react";
import ReactMapGL, { Marker, Layer, Source } from "react-map-gl";

const Map = ({totalStats}) => {
  const {walk, run, cycle, swim, horseRiding} = totalStats;
  const metersToPixelsAtMaxZoom = (meters, latitude) =>
    meters / 0.075 / Math.cos((latitude * Math.PI) / 180);
  const REACT_APP_MAPBOX_TOKEN =
    "pk.eyJ1IjoiZHlsYW5tYWhvd2EiLCJhIjoiY2tkZGsyb25sMjgxZDJwc2N6eTh0Y3RweSJ9.1Gu-hf3KqMbyLUmava6TnA";
  const [viewport, setViewport] = useState({
    latitude: 52.928477,
    longitude: -1.467562,
    width: "inherit",
    height: "100%",
    zoom: 17,
    minZoom: 1,
    maxZoom: 20,
    pitchEnabled: false,
    rotateEnabled: false,
  });
  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-1.467562, 52.928792] },
      },
    ],
  };
  const totalDist = walk + run + cycle + swim + horseRiding;
  return (
    <Fragment>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => setViewport(viewport)}
        mapStyle="mapbox://styles/dylanmahowa/ckde3yed51inl1iob6qhptbru"
      >
        <Marker key={"RPS Derby"} latitude={52.928792} longitude={-1.4677267}>
          <i className="fas fa-flag" style={{ color: "#00aaff" }}></i>
        </Marker>
        <Source id="loaded-data" type="geojson" data={geojson}>
          <Layer
            id="walk"
            type="circle"
            paint={{
              "circle-radius": {
                stops: [
                  [0, 0],
                  [20, metersToPixelsAtMaxZoom(walk * 1000, 52.928792)],
                ],
                base: 2,
              },
              "circle-color": "red",
              "circle-opacity": 0.35,
            }}
          />
          <Layer
            id="run"
            type="circle"
            paint={{
              "circle-radius": {
                stops: [
                  [0, 0],
                  [20, metersToPixelsAtMaxZoom(run * 1000, 52.928792)],
                ],
                base: 2,
              },
              "circle-color": "green",
              "circle-opacity": 0.35,
            }}
          />
          <Layer
            id="cycle"
            type="circle"
            paint={{
              "circle-radius": {
                stops: [
                  [0, 0],
                  [20, metersToPixelsAtMaxZoom(cycle * 1000, 52.928792)],
                ],
                base: 2,
              },
              "circle-color": "blue",
              "circle-opacity": 0.35,
            }}
          />
          <Layer
            id="swim"
            type="circle"
            paint={{
              "circle-radius": {
                stops: [
                  [0, 0],
                  [20, metersToPixelsAtMaxZoom(swim * 1000, 52.928792)],
                ],
                base: 2,
              },
              "circle-color": "yellow",
              "circle-opacity": 0.35,
            }}
          />
          <Layer
            id="horseRiding"
            type="circle"
            paint={{
              "circle-radius": {
                stops: [
                  [0, 0],
                  [20, metersToPixelsAtMaxZoom(horseRiding * 1000, 52.928792)],
                ],
                base: 2,
              },
              "circle-color": "orange",
              "circle-opacity": 0.35,
            }}
          />
        </Source>
        Global distance covered
      </ReactMapGL>
      <button />
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  radius: state.radius,
});
export default Map;
