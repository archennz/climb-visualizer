import { red } from "@mui/material/colors";
import * as React from "react";
import { Marker, Popup } from "react-map-gl";


function RouteMarker(props: any): JSX.Element {
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
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Map_pin_icon.svg" />
      </Marker>
      {displayPopup && (
        <Popup longitude={longitude} latitude={latitude}>
          <div>This is a popup</div>
        </Popup>
      )}
    </div>
  );
}

export default RouteMarker;
