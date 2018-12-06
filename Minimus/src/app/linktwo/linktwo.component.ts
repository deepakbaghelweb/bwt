import { Component, OnInit } from '@angular/core';

import {Observable} from "rxjs";
import {timer} from 'rxjs/observable/timer';

import {interval} from 'rxjs/observable/interval';
      import 'rxjs/add/operator/startWith';


@Component({
  selector: 'app-linktwo',
  templateUrl: './linktwo.component.html',
  styleUrls: ['./linktwo.component.css']
})
export class LinktwoComponent implements OnInit {

  constructor() { }
  public showloader: boolean = false;
  public progressNumber: number;

  ngOnInit() {
      //show box msg
      this.progressNumber =0;     
      this.showloader = true;
   
const source = interval(100);
  const subscribe = source.subscribe((val) => {
    this.progressNumber = val;
    if(val == 100){
      subscribe.unsubscribe();
      this.showloader =false; 
    }
  });

}


}
