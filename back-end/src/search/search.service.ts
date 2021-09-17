import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import fetch from 'node-fetch';

@Injectable()
export class SearchService {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  search(): any {
    return this.elasticsearchService.search({
      index: 'routes',
      body: {
        query: {
          match: { hello: 'world' },
        },
      },
    });
  }

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

  async getData(): Promise<any> {
    const data: Response = await fetch('https://github.com/archennz/mtnproj/blob/master/app_data/small_data.csv')
    const csv: String = await data.text()
    return csv
    }
  

}
