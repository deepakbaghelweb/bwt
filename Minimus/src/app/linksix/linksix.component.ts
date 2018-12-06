import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {timer} from 'rxjs/observable/timer';

import {interval} from 'rxjs/observable/interval';
      import 'rxjs/add/operator/startWith';

@Component({
  selector: 'app-linksix',
  templateUrl: './linksix.component.html',
  styleUrls: ['./linksix.component.css']
})
export class LinksixComponent implements OnInit {

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
    if(val == 95){
      subscribe.unsubscribe(); 
    }
  });

}

}
