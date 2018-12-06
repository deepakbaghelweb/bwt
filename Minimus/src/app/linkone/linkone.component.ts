import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linkone',
  templateUrl: './linkone.component.html',
  styleUrls: ['./linkone.component.css']
})
export class LinkoneComponent implements OnInit {
  public showloader: boolean = false; 
  constructor() { }

  ngOnInit() {
     //show box msg
     this.showloader = true;
     //wait 3 Seconds and hide
     setTimeout(function() {
         this.showloader = false;
     }.bind(this), 2000);
  }

}
