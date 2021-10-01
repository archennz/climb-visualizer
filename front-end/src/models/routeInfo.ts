import { Feature, Position } from "geojson";

export default class RouteInfo {
  id: string;
  longitude: number;
  latitude: number;
  name: string;
  rating: string;

  constructor(routeJson: any) {
    this.id = routeJson["id"];
    this.longitude = routeJson["longitude"];
    this.latitude = routeJson["latitude"];
    this.name = routeJson["name"];
    this.rating = routeJson["rating"];
    // probably more to come
    // maybe the wobble will come here
  }

  getCoordinates(): Position {
    return [this.longitude, this.latitude];
  }

  getFeature(): Feature {
    return {
      type: "Feature",
      geometry: { type: "Point", coordinates: this.getCoordinates() },
      properties: {},
    };
  }
}
