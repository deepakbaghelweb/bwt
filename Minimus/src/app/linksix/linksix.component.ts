import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {timer} from 'rxjs/observable/timer';

import {interval} from 'rxjs/observable/interval';
      import 'rxjs/add/operator/startWith';

      import {Router} from '@angular/router';

@Component({
  selector: 'app-linksix',
  templateUrl: './linksix.component.html',
  styleUrls: ['./linksix.component.css']
})
export class LinksixComponent implements OnInit {

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
     this.temp2.link6.timestart = startTime;

     const source = interval(100);
      const subscribe = source.subscribe((val) => {
        this.progressNumber = val;
        if(val == 95){
          subscribe.unsubscribe(); 
        }
      });
     
  }
  
  clickedOnHomeButton(){
    var endDate= new Date();
    var endTime= endDate.toLocaleTimeString();
    this.temp2.link6.timefinishBackbutton = endTime; 
    this.temp2.link6.didStopProcess = "no"; 
    localStorage.setItem('FinalUserInformation', JSON.stringify(this.temp2));
    console.log("========home button pressed========",this.temp2);
    this.router.navigate(['/links']);
  }

  clickedOnStopButton(){
    var endDate= new Date();
    var endTime= endDate.toLocaleTimeString();
    this.temp2.link6.timefinishStopbutton = endTime;
    this.temp2.link6.didStopProcess = "yes";  
    localStorage.setItem('FinalUserInformation', JSON.stringify(this.temp2));
    console.log("========red button pressed========",this.temp2);
    this.router.navigate(['/links']);
  }





}


