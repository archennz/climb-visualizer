import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';
import * as convert from 'csvtojson'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! An Ran was here.';
  }

  // need something to convert this to the right data type

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
}
