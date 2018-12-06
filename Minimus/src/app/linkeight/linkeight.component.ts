import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linkeight',
  templateUrl: './linkeight.component.html',
  styleUrls: ['./linkeight.component.css']
})
export class LinkeightComponent implements OnInit {

  constructor() { }
  public showloader: boolean = false; 
  ngOnInit() {
      //show box msg
      this.showloader = true;
      //wait 3 Seconds and hide
      setTimeout(function() {
          this.showloader = false;
      }.bind(this), 2000);
  }

}
