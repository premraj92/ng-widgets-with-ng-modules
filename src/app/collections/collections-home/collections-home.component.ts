import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data = [
    {name: 'James', age: 24, job: 'Designer', isEmployed: true, city: 'Newark'},
    {name: 'Mike', age: 44, job: 'Product Manager', isEmployed: false, city: 'Stokholm'},
    {name: 'Raj', age: 28, job: 'Architect', isEmployed: true, city: 'Banglore'},
    {name: 'Geet', age: 38, job: 'Farmer', isEmployed: false,  city: ''},
  ];

  headers = [
    {key: 'city' , label: 'City'},
    {key: 'name' , label: 'Name'},
    {key: 'age' , label: 'Age'},
    {key: 'isEmployed' , label: 'IsEmployed'},
    {key: 'job' , label: 'Job'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
