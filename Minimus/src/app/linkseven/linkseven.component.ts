import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linkseven',
  templateUrl: './linkseven.component.html',
  styleUrls: ['./linkseven.component.css']
})
export class LinksevenComponent implements OnInit {

  constructor() { }
  public showloader: boolean = false; 
  ngOnInit() {
      //show box msg
      this.showloader = true;
      //wait 3 Seconds and hide
      setTimeout(function() {
          this.showloader = false;
      }.bind(this), 600000);
  }

}
