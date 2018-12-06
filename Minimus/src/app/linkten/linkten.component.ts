import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linkten',
  templateUrl: './linkten.component.html',
  styleUrls: ['./linkten.component.css']
})
export class LinktenComponent implements OnInit {

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
