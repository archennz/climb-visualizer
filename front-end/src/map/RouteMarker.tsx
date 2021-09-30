import * as React from "react";
import { Marker, Popup } from "react-map-gl";
import RouteInfo from "../models/routeInfo";

const RouteMarker: React.FC<{ route: RouteInfo }> = (props) => {
  const key = props.route.id;
  const longitude = props.route.longitude;
  const latitude = props.route.latitude;
  const [displayPopup, setDisplayPopup] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setDisplayPopup(true)}
      onMouseLeave={() => setDisplayPopup(false)}
    >
      <Marker key={key} longitude={longitude} latitude={latitude}>
        <svg
          width="16px"
          height="16px"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
        </svg>
      </Marker>
      {displayPopup && (
        <Popup longitude={longitude} latitude={latitude}>
          <div>This is a popup</div>
        </Popup>
      )}
    </div>
  );
};

export default RouteMarker;
