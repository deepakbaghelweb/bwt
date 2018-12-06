import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linkfive',
  templateUrl: './linkfive.component.html',
  styleUrls: ['./linkfive.component.css']
})
export class LinkfiveComponent implements OnInit {

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
