import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linkthree',
  templateUrl: './linkthree.component.html',
  styleUrls: ['./linkthree.component.css']
})
export class LinkthreeComponent implements OnInit {

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
