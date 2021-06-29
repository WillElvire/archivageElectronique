import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServerDetails } from './server/server';


@Injectable({

  providedIn: 'root'

})

export class CognitiveSearchService {


  server = "https://recherche002.search.windows.net/indexes?api-version=2020-06-30" ;

  server2  = "https://recherche002.se.search.windows.net/datasources?api-version=2020-06-30" ;


  headers :HttpHeaders  =new HttpHeaders({

    'api-key': ServerDetails.searchServiceAdminApiKey,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': ' * ',
    'Access-Control-Allow-Methods': 'PUT, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Special-Request-Header',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Max-Age': '240'

  })

  constructor(private http : HttpClient) {




  }

  searchData(query: string, pageSize?: number): Observable<any> {

    console.log(`In searchData method ${query}`);

    let result: Observable<any> = null;

    const options = {

      headers: this.headers

    };

    result = this.http.post<any>(ServerDetails.searchBasicUri, JSON.stringify({

      search: query,

      top: pageSize,

    }), options);

    return result;


  }



  getResult(): Observable<any> {

    let result: Observable<any> = null;

    const options = {

      headers: this.headers

    };

    result = this.http.get<any>(ServerDetails.searchBasicUri, options);

    return result;


  }


}



