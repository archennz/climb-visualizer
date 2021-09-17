import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import fetch from 'node-fetch';
import * as convert from 'csvtojson'

// interface Source {
//   foo: string
// }

@Injectable()
export class SearchService {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

// this is good enough for now I think 
  async search() {
    const response = await this.elasticsearchService.search({
      index: 'routes',
      body: {
        query: {
          match: { type: 'trad' },
        },
      },
    });
    const body = response.body.hits.hits.map(hit => hit._source)
    return body
  };

  makeIndex(): any {
    return this.elasticsearchService.indices.create(
      {
        index: 'routes',
        body: {
          mappings: {
            properties: {
              id: {type: 'integer'},
              name: {type: 'text'},
              type: {type: 'keyword'},
              stars: {type: 'float'},
              longitude: {type: 'float'},
              latitude: {type: 'float'},
              safety: {type: 'keyword'},
              grade: {type: 'integer'}
            }
          }
        }
      }
    )
  }

  // this is the function that downloads the raw data from mtnproj
  async getData(): Promise<any> {
    const response: Response = await fetch('https://raw.githubusercontent.com/archennz/mtnproj/master/app_data/small_data.csv')
    const csv = await response.text()
    const json = await convert().fromString(csv)
    return json.slice(0,5)
    }
  
  // now want to write the function that takes one entry in json and converts it to
  // the thing that want to put into the data base
  // we will deal with the adding little vibrations later
  // probably should make index first and then decide exactly what should be written into database
  async writeToElastic(climbJson): Promise<any> {
    await this.elasticsearchService.index(
      {
        index: 'routes',
        body: climbJson
      }
    )
  }

  async initializeElastic(): Promise<any> {
    const routes = await this.getData()
    routes.map(route => this.writeToElastic(route))
  }

}
