import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-marques',
  imports: [NgFor],
  templateUrl: './marques.html',
  styleUrl: './marques.css'
})
export class Marques {

  marques = [
    {
      id: 1,
      name: 'Nike',
      country: 'USA',
      isActive: true
    },
    {
      id: 2,
      name: 'Adidas',
      country: 'Germany',
      isActive: true
    },
    {
      id: 3,
      name: 'Puma',
      country: 'Germany',
      isActive: false
    },
    {
      id: 4,
      name: 'Reebok',
      country: 'UK',
      isActive: true
    }
  ];

}
