import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  modalState = false;

  items = [
    {title: 'Why is the sky blue' , content: 'Sky is blue to reflection/refractions of different wavlengths/colors om light by atmosphere'},
    {title: 'Whats the Capital of Argentina' , content: 'Buenous Aires'},
    {title: 'Who\'s the current head of Google' , content: 'Sundar Pichai' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleModal() {
    this.modalState = !this.modalState;
  }
}
