import { Component, OnInit ,Input } from '@angular/core';
import { CognitiveSearchService } from './../../services/azure/cognitive-search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  document : boolean =true;

  fieldvalue = '';

  constructor(private cognitiveAzure :CognitiveSearchService) { }

  ngOnInit(): void {

  }



  keyup(event) {

    this.document =!this.document;
    this.fieldvalue = event;

    this.cognitiveAzure.getResult().subscribe((info)=>{

      console.log(info);
    },
    (error)=>{

      console.log(error);

    }

    )

    //this.document=false;

}

}
