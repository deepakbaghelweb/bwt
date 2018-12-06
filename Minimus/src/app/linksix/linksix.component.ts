import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linksix',
  templateUrl: './linksix.component.html',
  styleUrls: ['./linksix.component.css']
})
export class LinksixComponent implements OnInit {

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
