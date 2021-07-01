import { Component, OnInit ,Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Documents } from './../../services/azure/search/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  queryActivated : boolean =false;

  fieldvalue = '';

  documents :any  = [ ]

  public isChecked$ = new BehaviorSubject(false);


  constructor(private $document :Documents) { }

  ngOnInit(): void {

    this.initialise();

    setInterval(()=>{ this.initialise() },1000000)

  }



  initialise(){

    this.queryActivated = true ;

    this.$document.getAllDocuments().subscribe(

    (document)=>{

      this.documents = document ;

      this.queryActivated = false;

      console.log(this.documents);


    },

    (error)=>{

      this.queryActivated =false;

      console.log(error);

    }

    )


  }



  keyup(event) {


    this.fieldvalue = event;


    if(this.fieldvalue!= ''){


      this.queryActivated = true ;

      this.$document.searchDocument(this.fieldvalue).subscribe(

      (document)=>{

        this.documents = document ;

        this.queryActivated = false;

        console.log(this.documents);


      },

      (error)=>{

        this.queryActivated =false;

        console.log(error);

      }

      )

    }else{

      this.initialise()
    }

}


setFilter(Filter){

  this.isChecked$.next(!this.isChecked$.value)

  if(this.isChecked$.getValue){

    this.queryActivated = true ;

    this.$document.orderBy(Filter).subscribe(

      (document)=>{

        this.documents = document ;

        this.queryActivated = false;
      },

      (error)=>{

        this.queryActivated =false;

        console.log(error);

      }


    )


  }



  }




}
