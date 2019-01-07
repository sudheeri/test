import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {BigdataService } from "src/app/bigdata/bigdata.service";
import { Details } from "src/app/bigdata/bigdata.model";
import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-bigdata',
  templateUrl: './bigdata.component.html',
  styleUrls: ['./bigdata.component.css']
})
export class BigdataComponent implements OnInit {
  closeResult: string;
  DataForm:FormGroup
 
  
  detail: Details[] = [];
  rows: number;
  
  constructor(private fb:FormBuilder,private modalService: NgbModal,private _http:BigdataService,) {
    this.detail[0] = new Details()
  
    this.DataForm = fb.group({
      'rows' : [null],
      'format' : [null]
    })
   }
    


 


format : string;
  ngOnInit() {

    
  }
  save()
  {
   
    let par={

     "rows":this.rows,
     "format":this.format,
     "list": 
      
    this.detail
       
    }
   this._http.postWrite(par)
   
     .subscribe(
     data => {
  
       console.log("send **" + JSON.stringify(data));
       window.open(data.fileuri);
      
     
     },

   );
    

  }




 

  

  addMore(event) { 
   
    this.detail.push( new Details());
    
  }

  removeSaleItem(index) { 
  
      
    this.detail.splice(index, 1);        
  }

 
}
