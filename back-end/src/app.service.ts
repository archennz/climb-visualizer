import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';
import * as convert from 'csvtojson'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! An Ran was here.';
  }

  /**
   * Fetch static scraped climb data from my github and returns it as json
   */  
  async getData(): Promise<any> {
    const response: Response = await fetch('https://raw.githubusercontent.com/archennz/mtnproj/master/app_data/small_data.csv')
    const csv = await response.text()
    const json = await convert({colParser:{
      'grade': 'number',
      'longitude': 'number',
      'latitude': 'number',  
      'stars': 'number'
    }
    }).fromString(csv)
    return json
    }

  /**
   * Add small deltas to longitude and latitude for better rendering
   * Otherwise climbs in the same crag has the same location
   * @param json 
   */
  addVibration(json): any {
    json['longitude'] += Math.random()*0.0003
    json['latitude'] += Math.random()*0.0003
    console.log("converted")
    return json
  }

  /**
   * Returns mountain project with small deltas in location
   * Warning! This is quite slow at the moment
   * @returns 
   */
  async getDataWithVibrations(): Promise<any> {
    const climbsJson = await this.getData()
    return climbsJson.map(climbJson => this.addVibration(climbsJson))
  }
}
