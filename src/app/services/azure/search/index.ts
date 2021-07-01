import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { CognitiveSearchService } from './../cognitive-search.service';

export interface Document {

 name : string ,
 parameter ? :  [ {


 }]
}

@Injectable({
   providedIn : 'root'
})

export class Documents{


  documents = []



  constructor(private cognitiveSearch : CognitiveSearchService){


  }

  searchDocument(query : any ) : Observable<any>{

    return    this.cognitiveSearch.searchData(query)

  }

  ApplyFilter(Filter = 'Date'){

    return this.cognitiveSearch.AddFilter(Filter)

  }



  indexerRun(){

    return this.cognitiveSearch.runIndexer();

  }

  orderBy(field){

    return this.cognitiveSearch.OrderBy(field)

  }

  getDocumentInfo(docId){

    return this.cognitiveSearch.getSpectifiqDoc(docId)
  }



  getAllDocuments() : Observable<any>{

    return this.cognitiveSearch.getResult()

  }


}
