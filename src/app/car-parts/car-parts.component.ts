import { Component, OnInit } from '@angular/core';
import { CarPart } from "./car-part";
import { RacingDataService } from './racing-data.service';

@Component({
  selector: 'app-car-parts',
  templateUrl: './car-parts.component.html',
  styleUrls: ['./car-parts.component.css']
})
export class CarPartsComponent implements OnInit {
  private carParts: CarPart[];

  constructor(private api: RacingDataService) { }

  ngOnInit() {
    this.api.getCarParts().subscribe(data => this.carParts = data);
  }

  totalCarParts(): number{
    let num = 0;
    for (let part of this.carParts) {
      num += part.inStock; 
    }
    return num;
  }

  upQuantity(carPart){
    if (carPart.quantity < carPart.inStock){
      carPart.quantity++;
    }
  }

  downQuantity(carPart){
    if (carPart.quantity != 0){
      carPart.quantity--;
    }
  }

  selectPart(carPart){
    carPart.featured = true;
  }

  unselectPart(carPart){
    carPart.featured = false;
  }
}
