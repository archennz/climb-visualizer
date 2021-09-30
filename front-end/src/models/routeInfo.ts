class RouteInfo {
    readonly key: string,
    longitude: number,
    latitude: number

    constructor(routeJson) {
        {this.key, this.longitude, } = routeJson
    }
  }

export default RouteInfo