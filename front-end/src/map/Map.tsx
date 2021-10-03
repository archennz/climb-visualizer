import * as React from "react";
import ReactMapGL, {
  Marker,
  Popup,
  Source,
  Layer,
  LayerProps,
} from "react-map-gl";
import { Feature, FeatureCollection } from "geojson";
import "mapbox-gl/dist/mapbox-gl.css";
import RouteMarker from "./RouteMarker";
import RouteInfo from "../models/routeInfo";
import { circleLayerStyle, heatMapLayerStyle } from "./map-style";

const TOKEN = "pk.eyJ1IjoiYm9va2J1Z2RvbmFsZCIsImEiOiJja3RwNWJiOXEwajhhMnhvM2JveGZucDRlIn0.wr3vf82KRak3YLNGv7GF0A";

const Map: React.FC<{ routes: RouteInfo[] }> = (props) => {
  const [viewport, setViewport] = React.useState({
    latitude: 34.012,
    longitude: -116.168,
    zoom: 11,
  });

  const [geojson, setGeojson] = React.useState<FeatureCollection>();

  // now sure if this is needed
  // now seems a bit overkill
  React.useEffect(() => {
    const features = props.routes.map((route) => route.getFeature());
    const geojson: FeatureCollection = {
      type: "FeatureCollection",
      features: features,
    };
    setGeojson(geojson);
  }, [props.routes]);

  // Only rerender markers if props.routes has changed
  const markers = React.useMemo(
    () =>
      props.routes.map((route) => (
        <RouteMarker key={route.id} route={route}></RouteMarker>
      )),
    [props.routes]
  );

  return (
    <ReactMapGL
      mapboxApiAccessToken={TOKEN}
      mapStyle="mapbox://styles/mapbox/dark-v10"
      {...viewport}
      width="fit"
      height="calc(100vh - 64px)"
      onViewportChange={setViewport}
    >
      <Source id="my-data" type="geojson" data={geojson}>
        <Layer {...heatMapLayerStyle}></Layer>
        <Layer {...circleLayerStyle}></Layer>
      </Source>
      {markers}
    </ReactMapGL>
  );
};

export default Map;
