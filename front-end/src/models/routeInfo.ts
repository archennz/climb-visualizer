export default class RouteInfo {
  id: string;
  longitude: number;
  latitude: number;

  constructor(routeJson: any) {
    this.id = routeJson['id']
    this.longitude = routeJson['longitude']
    this.latitude = routeJson['latitude']
    // probably more to come
    // maybe the wobble will come here
  }
}
