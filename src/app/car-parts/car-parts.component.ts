import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-parts',
  templateUrl: './car-parts.component.html',
  styleUrls: ['./car-parts.component.css']
})
export class CarPartsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  carParts = [
    {
      id: 1,
      name: 'Super Tires',
      description: 'These are the very best',
      inStock: 5,
      price: 4.99
    },
    {
      id: 2,
      name: 'Reinforced Shocks',
      description: 'Shocks made from kryptonite',
      inStock: 4,
      price: 9.99
    },
    {
      id: 3,
      name: 'Padded Seats',
      description: 'Supper soft seats for a smooth ride',
      inStock: 0,
      price: 24.99
    }
  ]

  totalCarParts(): number{
    let num = 0;
    for (let part of this.carParts) {
      num += part.inStock; 
    }
    return num;
  }
}
