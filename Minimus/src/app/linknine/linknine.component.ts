import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linknine',
  templateUrl: './linknine.component.html',
  styleUrls: ['./linknine.component.css']
})
export class LinknineComponent implements OnInit {

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
