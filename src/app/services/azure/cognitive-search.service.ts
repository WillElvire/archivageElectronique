import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServerDetails } from './server/server';


@Injectable({

  providedIn: 'root'

})

export class CognitiveSearchService {





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


  getSpectifiqDoc(docId):Observable<any>{

    const server =`https://recherche002.search.windows.net/indexes/azure-index/docs/${docId}/?api-version=2020-06-30-Preview`

    console.log(`In searchData method ${docId}`);

    let result: Observable<any> = null;

    const options = {

      headers: this.headers

    };

    result = this.http.get<any>(server,options);

    return result;



  }

  AddFilter(Filter):Observable<any>{

    const server = `https://recherche002.search.windows.net/indexes/azure-index/docs?api-version=2020-06-30-Preview&search=*&facet=metadata_storage_name?api-version=2020-06-30-Preview`;

    console.log(`In searchData method ${Filter}`);

    let result: Observable<any> = null;

    const options = {

      headers: this.headers

    };

    result = this.http.get<any>(server,options);

    return result;

  }




  OrderBy(Field:any):Observable<any>{

    const server = `https://recherche002.search.windows.net/indexes/azure-index/docs?api-version=2020-06-30-Preview&search=*&$orderby=content asc`;

    console.log(`In searchData method ${Field}`);

    let result: Observable<any> = null;

    const options = {

      headers: this.headers

    };

    result = this.http.get<any>(server,options);

    return result;

  }



  searchData(query: string): Observable<any> {


    const server =`https://recherche002.search.windows.net/indexes/azure-index/docs?api-version=2020-06-30-Preview&search=${query}`

    console.log(`In searchData method ${query}`);

    let result: Observable<any> = null;

    const options = {

      headers: this.headers

    };

    result = this.http.get<any>(server,options);

    return result;


  }








  getResult(): Observable<any> {

    let result: Observable<any> = null;

    const options = {

      headers: this.headers

    };

    result = this.http.get<any>(ServerDetails.searchUri, options);

    return result;


  }


  runIndexer() : Observable<any>{


    const server = "https://recherche002.search.windows.net/indexers/azureblob-myindexer/run?api-version=2020-06-30-Preview";

    const payLoad = {

      'Content-Type':'application/json',

      'api-key' :   ServerDetails.searchServiceAdminApiKey

    }

    return  this.http.put(server,JSON.stringify(payLoad));

  }

}



