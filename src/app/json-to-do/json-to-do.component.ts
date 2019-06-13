import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http'

@Component({
  selector: 'app-json-to-do',
  templateUrl: './json-to-do.component.html',
  styleUrls: ['./json-to-do.component.scss']
})
export class JsonToDoComponent implements OnInit {

  arrJSONToDo$: string [];
  newItem ="";

  name: string;
  empoloyeeID : number;
  empList: Array<{name: string, empoloyeeID: number}> = []; 

  constructor(private data : DataService) { }

  ngOnInit() {
    this.data.getToDo().subscribe(
      data => {
        this.arrJSONToDo$ = data as string [];	 
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

  pushItem = function(){
    if(this.newItem!=""){
      this.arrJSONToDo$.push({ title: this.newItem, author: "", toDoItem:"" , date : ""});
      this.newItem="";
    }
  }

  removeItem = function(index){
    this.arrJSONToDo$.splice(index, 1);
  }

}
