import { LayerProps } from "react-map-gl";

// fix the layer props on this later
export const heatMapLayerStyle: LayerProps = {
  type: "heatmap",
  paint: {
    // Increase the heatmap weight based on frequency and property magnitude
    "heatmap-weight": {
      property: "stars",
      type: "exponential",
      stops: [
        [0, 0],
        [5, 1],
      ],
    },
    // Increase the heatmap color weight weight by zoom level
    // heatmap-intensity is a multiplier on top of heatmap-weight
    "heatmap-intensity": {
      stops: [
        [11, 1],
        [15, 3],
      ],
    },
    // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
    // Begin color ramp at 0-stop with a 0-transparancy color
    // to create a blur-like effect.
    "heatmap-color": [
      "interpolate",
      ["linear"],
      ["heatmap-density"],
      0,
      "rgba(33,102,172,0)",
      0.2,
      "rgb(103,169,207)",
      0.4,
      "rgb(209,229,240)",
      0.6,
      "rgb(253,219,199)",
      0.8,
      "rgb(239,138,98)",
      0.9,
      "rgb(255,201,101)",
    ],
    // Adjust the heatmap radius by zoom level
    "heatmap-radius": {
      stops: [
        [11, 15],
        [15, 20],
      ],
    },
    // Transition from heatmap to circle layer by zoom level
    "heatmap-opacity": {
      stops: [
        [14, 1],
        [15, 0],
      ],
    },
  },
};

export const circleLayerStyle: LayerProps = {
  type: "circle",
  minzoom: 14,
  paint: {
    "circle-opacity": {
      stops: [
        [14, 0],
        [15, 1],
      ],
    },
    "circle-color": "#a87a34"
  },
};
