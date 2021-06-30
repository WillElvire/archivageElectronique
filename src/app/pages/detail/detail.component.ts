
import { Component, OnInit ,ViewChild } from '@angular/core';
import { Location } from '@angular/common'
import { Documents } from 'src/app/services/azure/search';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  queryActivated : boolean =false;

  fieldvalue = '';

  document :any  ;

  url: SafeResourceUrl;

  searchTerm = "text";

  caseSensitive = true;



  OcrResult : string  ;

  constructor(private sanitizer: DomSanitizer,private location :Location , private $documents : Documents , private activated :ActivatedRoute) { }

  ngOnInit(): void {

   this.activated.params.subscribe((params:any)=>{

    this.initialise(params?.path)

   })

  }


  initialise(path){

    this.$documents.getDocumentInfo(path).subscribe((document)=>{

      this.document = document;

      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(`https://archivagedatabase.blob.core.windows.net/container/${this.document?.metadata_storage_name}`);

      this.OcrResult= String(document.text)

    },
    (error : HttpErrorResponse)=>{

      alert(error.message)
    }

    )


  }












  Back(){

    this.location.back();

  }

}
