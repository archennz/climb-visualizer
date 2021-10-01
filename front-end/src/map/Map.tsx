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
import { layerStyle } from "./map-style";

const TOKEN = process.env.REACT_APP_MAP_TOKEN || "";

const Map: React.FC<{ routes: RouteInfo[] }> = (props) => {
  const [viewport, setViewport] = React.useState({
    latitude: 34.012,
    longitude: -116.168,
    zoom: 9,
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
      props.routes.map((route) => <RouteMarker route={route}></RouteMarker>),
    [props.routes]
  );

  return (
    <ReactMapGL
      mapboxApiAccessToken={TOKEN}
      {...viewport}
      width="100vw"
      height="88vh"
      onViewportChange={setViewport}
    >
      <Source id="my-data" type="geojson" data={geojson}>
        <Layer {...layerStyle}></Layer>
      </Source>
      {markers}
    </ReactMapGL>
  );
};

export default Map;
