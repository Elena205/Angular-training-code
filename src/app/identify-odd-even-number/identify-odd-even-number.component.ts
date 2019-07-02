import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-identify-odd-even-number',
  templateUrl: './identify-odd-even-number.component.html',
  styleUrls: ['./identify-odd-even-number.component.css']
})
export class IdentifyOddEvenNumberComponent implements OnInit {
  onlyOdd = false;
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  value = 10;

  constructor() { }

  ngOnInit() {

  }

}
