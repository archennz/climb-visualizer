import { Feature, Position } from "geojson";

export default class RouteInfo {
  id: string;
  longitude: number;
  latitude: number;
  name: string;
  rating: string;
  grade: number;
  stars: number

  constructor(routeJson: any) {
    this.id = routeJson["id"];
    this.longitude = routeJson["longitude"];
    this.latitude = routeJson["latitude"];
    this.name = routeJson["name"];
    this.rating = routeJson["rating"];
    this.grade = routeJson["grade"]
    this.stars = routeJson["stars"]
  }

  getCoordinates(): Position {
    return [this.longitude, this.latitude];
  }


  getFeature(): Feature {
    return {
      type: "Feature",
      geometry: { type: "Point", coordinates: this.getCoordinates() },
      properties: {"stars": this.stars},
    };
  }
}
