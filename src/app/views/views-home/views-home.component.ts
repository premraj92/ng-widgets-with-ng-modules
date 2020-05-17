import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {

  statisticalData = [
    {value: 22 , name: 'Favorites'},
    {value: 967 , name: 'Page Views'},
    {value: 30 , name: 'Users'},

  ];

  items = [
    {
      image: 'assets/images/couch.jpeg',
      name: 'Couch',
      description: 'an classy comfortable luxe brown leather sofa'
  },
  {
    image: 'assets/images/dresser.jpeg',
    name: 'Dresser',
    description: 'a sturdy & regal looking wooden dresser'
},

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
