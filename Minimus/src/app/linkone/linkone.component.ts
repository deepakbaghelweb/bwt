import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-linkone',
  templateUrl: './linkone.component.html',
  styleUrls: ['./linkone.component.css']
})
export class LinkoneComponent implements OnInit {
  public showloader: boolean = false; 
  constructor(private router: Router) { }

  public temp = localStorage.getItem('userInformation');
  public temp2 = JSON.parse(this.temp);


  public ExperimentResult = {
    'username':"",
    'email':"",
    'gender':"",
    'Frequentwebuser':"",
    'knowprogressindicator':"", 
    'link1': { 'timestart':"", 'timefinishBackbutton':"",'didStopProcess':"", 'timefinishStopbutton':"" },
    'link2': { 'timestart':"", 'timefinishBackbutton':"",'didStopProcess':"", 'timefinishStopbutton':""},
    'link3': { 'timestart':"", 'timefinishBackbutton':"",'didStopProcess':"", 'timefinishStopbutton':""},
    'link4': { 'timestart':"", 'timefinishBackbutton':"",'didStopProcess':"", 'timefinishStopbutton':""},
    'link5': { 'timestart':"", 'timefinishBackbutton':"",'didStopProcess':"", 'timefinishStopbutton':""},
    'link6': { 'timestart':"", 'timefinishBackbutton':"",'didStopProcess':"", 'timefinishStopbutton':""},
    'link7': { 'timestart':"", 'timefinishBackbutton':"",'didStopProcess':"", 'timefinishStopbutton':""},
    'link8': { 'timestart':"", 'timefinishBackbutton':"",'didStopProcess':"", 'timefinishStopbutton':""},
    'link9': { 'timestart':"", 'timefinishBackbutton':"",'didStopProcess':"", 'timefinishStopbutton':""},
    'link10': { 'timestart':"", 'timefinishBackbutton':"",'didStopProcess':"", 'timefinishStopbutton':""},
  };

  
  ngOnInit() {

    this.ExperimentResult.username = this.temp2.Name;
    this.ExperimentResult.email = this.temp2.Email;
    this.ExperimentResult.gender = this.temp2.Gender;
    this.ExperimentResult.Frequentwebuser = this.temp2.Frequentwebuser;
    this.ExperimentResult.knowprogressindicator = this.temp2.knowprogressindicator;    
    
     //show box msg
     var startDate= new Date();
     var startTime= startDate.toLocaleTimeString();
     
     console.log("===========n start========",startTime);

    
     this.showloader = true;
     this.ExperimentResult.link1.timestart = startTime;

     setTimeout(function() {
         this.showloader = false;
     }.bind(this), 10000);
     
  }
  clickedOnHomeButton(){
    var endDate= new Date();
    var endTime= endDate.toLocaleTimeString();
    this.ExperimentResult.link1.timefinishBackbutton = endTime; 
    this.ExperimentResult.link1.didStopProcess = "no"; 
    localStorage.setItem('FinalUserInformation', JSON.stringify(this.ExperimentResult));
    console.log("========home button pressed========",this.ExperimentResult);
    this.router.navigate(['/links']);
  }

  clickedOnStopButton(){
    var endDate= new Date();
    var endTime= endDate.toLocaleTimeString();
    this.ExperimentResult.link1.timefinishStopbutton = endTime;
    this.ExperimentResult.link1.didStopProcess = "yes";  
    localStorage.setItem('FinalUserInformation', JSON.stringify(this.ExperimentResult));
    console.log("========red button pressed========",this.ExperimentResult);
    this.router.navigate(['/links']);
  }

}
