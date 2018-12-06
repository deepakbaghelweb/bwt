import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linkfour',
  templateUrl: './linkfour.component.html',
  styleUrls: ['./linkfour.component.css']
})
export class LinkfourComponent implements OnInit {

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
