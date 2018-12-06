import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

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



public showloader: boolean = false; 

  public progressNumber: number;

  constructor(private router: Router) { }
  


  public temp = localStorage.getItem('FinalUserInformation');
  public temp2 = JSON.parse(this.temp);
  ngOnInit() {
     //show box msg
     var startDate= new Date();
     var startTime= startDate.toLocaleTimeString();
     
     console.log("===========n start========",startTime);

    
     this.showloader = true;
     this.temp2.link2.timestart = startTime;

     const source = interval(100);
      const subscribe = source.subscribe((val) => {
        this.progressNumber = val;
        if(val == 100){
          subscribe.unsubscribe();
          this.showloader =false; 
        }
      });
     
  }
  
  clickedOnHomeButton(){
    var endDate= new Date();
    var endTime= endDate.toLocaleTimeString();
    this.temp2.link2.timefinishBackbutton = endTime; 
    this.temp2.link2.didStopProcess = "no"; 
    localStorage.setItem('FinalUserInformation', JSON.stringify(this.temp2));
    console.log("========home button pressed========",this.temp2);
    this.router.navigate(['/links']);
  }

  clickedOnStopButton(){
    var endDate= new Date();
    var endTime= endDate.toLocaleTimeString();
    this.temp2.link2.timefinishStopbutton = endTime;
    this.temp2.link2.didStopProcess = "yes";  
    localStorage.setItem('FinalUserInformation', JSON.stringify(this.temp2));
    console.log("========red button pressed========",this.temp2);
    this.router.navigate(['/links']);
  }




}
