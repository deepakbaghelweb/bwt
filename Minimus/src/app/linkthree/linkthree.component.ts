import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {timer} from 'rxjs/observable/timer';
import {Router} from '@angular/router';

import {interval} from 'rxjs/observable/interval';
      import 'rxjs/add/operator/startWith';

@Component({
  selector: 'app-linkthree',
  templateUrl: './linkthree.component.html',
  styleUrls: ['./linkthree.component.css']
})
export class LinkthreeComponent implements OnInit {


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
     this.temp2.link3.timestart = startTime;

     const source = interval(40);
  const subscribe = source.subscribe((val) => {
    this.progressNumber = val;
    if(val == 90){
      subscribe.unsubscribe();
      this.progressNumber = 90; 
    }
  });
     
  }
  
  clickedOnHomeButton(){
    var endDate= new Date();
    var endTime= endDate.toLocaleTimeString();
    this.temp2.link3.timefinishBackbutton = endTime; 
    this.temp2.link3.didStopProcess = "no"; 
    localStorage.setItem('FinalUserInformation', JSON.stringify(this.temp2));
    console.log("========home button pressed========",this.temp2);
    this.router.navigate(['/links']);
  }

  clickedOnStopButton(){
    var endDate= new Date();
    var endTime= endDate.toLocaleTimeString();
    this.temp2.link3.timefinishStopbutton = endTime;
    this.temp2.link3.didStopProcess = "yes";  
    localStorage.setItem('FinalUserInformation', JSON.stringify(this.temp2));
    console.log("========red button pressed========",this.temp2);
    this.router.navigate(['/links']);
  }













}
