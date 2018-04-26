import { CarPart } from "./car-part";

export const CARPARTS: CarPart[] = [
  {
    id: 1,
    name: 'Super Tires',
    description: 'These are the very best',
    inStock: 5,
    price: 4.99,
    image: 'assets/img/tire.jpg',
    featured: false,
    quantity: 0
  },
  {
    id: 2,
    name: 'Reinforced Shocks',
    description: 'Shocks made from kryptonite',
    inStock: 4,
    price: 9.99,
    image: 'assets/img/shocks.jpg',
    featured: true,
    quantity: 0
  },
  {
    id: 3,
    name: 'Padded Seats',
    description: 'Supper soft seats for a smooth ride',
    inStock: 0,
    price: 24.99,
    image: 'assets/img/seats.jpg',
    featured: false,
    quantity: 0
  }
];