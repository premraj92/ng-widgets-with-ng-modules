import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elements-home',
  templateUrl: './elements-home.component.html',
  styleUrls: ['./elements-home.component.css']
})
export class ElementsHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  randomDecision() {
    return Math.round(Math.random() * 2) === 1 ? true : false ;
  }

  randNumGenerate() {
    return Math.round(Math.random() * 10);
  }

}
