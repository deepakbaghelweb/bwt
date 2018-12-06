import { Component, OnInit } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {Observable} from "rxjs";
import {timer} from 'rxjs/observable/timer';

import {interval} from 'rxjs/observable/interval';
      import 'rxjs/add/operator/startWith';

@Component({
  selector: 'app-linkeight',
  templateUrl: './linkeight.component.html',
  styleUrls: ['./linkeight.component.css']
})

export class LinkeightComponent implements OnInit {

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
      this.showloader = false;
    }
  });

}

}
