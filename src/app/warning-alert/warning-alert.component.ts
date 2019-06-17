import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  // styleUrls: ['./warning-alert.component.css']
  styles: [
    `
      p {
        padding: 20px;
        background-color: mistyrose;
        color: blueviolet;
        border: 1px solid rosybrown;
      }
    `
  ]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
