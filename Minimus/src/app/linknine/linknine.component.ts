import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-linknine',
  templateUrl: './linknine.component.html',
  styleUrls: ['./linknine.component.css']
})
export class LinknineComponent implements OnInit {

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
     this.temp2.link9.timestart = startTime;
  
     setTimeout(function() {
        this.showloader = false;
    }.bind(this), 10000);
     
  }
  
  clickedOnHomeButton(){
    var endDate= new Date();
    var endTime= endDate.toLocaleTimeString();
    this.temp2.link9.timefinishBackbutton = endTime; 
    this.temp2.link9.didStopProcess = "no"; 
    localStorage.setItem('FinalUserInformation', JSON.stringify(this.temp2));
    console.log("========home button pressed========",this.temp2);
    this.router.navigate(['/links']);
  }
  
  clickedOnStopButton(){
    var endDate= new Date();
    var endTime= endDate.toLocaleTimeString();
    this.temp2.link9.timefinishStopbutton = endTime;
    this.temp2.link9.didStopProcess = "yes";  
    localStorage.setItem('FinalUserInformation', JSON.stringify(this.temp2));
    console.log("========red button pressed========",this.temp2);
    this.router.navigate(['/links']);
  }
  









}
