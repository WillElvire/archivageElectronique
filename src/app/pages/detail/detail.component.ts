
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { Documents } from 'src/app/services/azure/search';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ElementRef } from '@angular/core';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  queryActivated : boolean =false;

  fieldvalue = '';

  doc :any  ;

  url: SafeResourceUrl;

  query = "";

  caseSensitive = true;

  OcrResult:string   ;



  constructor(private sanitizer: DomSanitizer,private location :Location , private $documents : Documents , private activated :ActivatedRoute) { }

  ngOnInit(): void {

   this.activated.params.subscribe((params:any)=>{

    this.initialise(params?.path)

   })

  }


  initialise(path){

    this.$documents.getDocumentInfo(path).subscribe((doc)=>{

      this.doc = doc;

      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(`https://archivagedatabase.blob.core.windows.net/container/${this.doc?.metadata_storage_name}`);

     this.OcrResult = doc.text

    },
    (error : HttpErrorResponse)=>{

      alert(error.message)
    }

    )


  }


  Back(){

    this.location.back();

  }


  public highlight() {


    if(!this.query) {
      return this.OcrResult;
    }
    return this.OcrResult.toString().replace(new RegExp(this.query, "gi"), match => {
        return '<mark class="bg-dark text-light">' + match + '</mark>';
    });


}


}
