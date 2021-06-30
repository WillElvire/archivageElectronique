import { Component, OnInit ,Input } from '@angular/core';

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

  console.log(Filter);


  this.queryActivated = true ;

  this.$document.ApplyFilter(Filter).subscribe(

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

}
