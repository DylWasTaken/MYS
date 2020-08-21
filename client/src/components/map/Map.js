import React, { Fragment, useState } from "react";
import ReactMapGL, {Marker} from "react-map-gl";


/*var createGeoJSONCircle = function(center, radiusInKm, points) {
    if(!points) points = 64;

    var coords = {
        latitude: center[1],
        longitude: center[0]
    };

    var km = radiusInKm;

    var ret = [];
    var distanceX = km/(111.320*Math.cos(coords.latitude*Math.PI/180));
    var distanceY = km/110.574;

    var theta, x, y;
    for(var i=0; i<points; i++) {
        theta = (i/points)*(2*Math.PI);
        x = distanceX*Math.cos(theta);
        y = distanceY*Math.sin(theta);

        ret.push([coords.longitude+x, coords.latitude+y]);
    }
    ret.push(ret[0]);

    return {
        "type": "geojson",
        "data": {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [ret]
                }
            }]
        }
    };
};
*/


export default function Map() {

  const REACT_APP_MAPBOX_TOKEN =
    "pk.eyJ1IjoiZHlsYW5tYWhvd2EiLCJhIjoiY2tkZGsyb25sMjgxZDJwc2N6eTh0Y3RweSJ9.1Gu-hf3KqMbyLUmava6TnA";
  const [viewport, setViewport] = useState({
    latitude: 52.928477,
    longitude: -1.467562,
    width: "inherit",
    height: "100%",
    zoom:17,
  });
  return (
    <Fragment>
      <ReactMapGL {...viewport} 
      mapboxApiAccessToken={REACT_APP_MAPBOX_TOKEN}
      onViewportChange = {viewport => setViewport(viewport)}
      mapStyle = "mapbox://styles/dylanmahowa/ckde3yed51inl1iob6qhptbru"
      >
        <Marker key={'RPS Derby'} latitude={52.928792} longitude={-1.4677267}> 
   
        <i className="fas fa-flag" style={{color:"#00aaff"}}></i>
        </Marker>
        Global distance covered
      </ReactMapGL>
    </Fragment>
  );
}
