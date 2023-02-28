import { Component } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {

  items: Item[] = [

    new Item(1, 'Mango Juice', 150, "drinks"),
    new Item(2, 'Tusker', 150, "drinks"),
    new Item(3, 'Fanta-Orange', 150, "drinks"),
    new Item(4, 'Blck Coffee', 150, "drinks"),
    new Item(5, 'Delmonte', 150, "drinks"),

    new Item(6, 'Pilau', 150, "Meals"),
    new Item(7, 'Githeri', 150, "Meals"),
    new Item(8, 'Ugali', 150, "Meals"),
    new Item(9, 'Rice', 150, "Meals"),
    new Item(10, 'Matoke', 150, "Meals"),

    new Item(11, 'Kales', 150, "Greens"),
    new Item(12, 'Cabbage', 150, "Greens"),
    new Item(13, 'Carrots', 150, "Greens"),
    new Item(14, 'Matoke', 150, "Greens"),
    new Item(15, 'Matoke', 150, "Greens"),

    new Item(16, 'Beef', 150, "Stew"),
    new Item(17, 'Potato', 150, "Stew"),
    new Item(18, 'Matoke', 150, "Stew"),
    new Item(19, 'Matoke', 150, "Stew"),
    new Item(20, 'Matoke', 150, "Stew"),

    new Item(21, 'Matoke', 150, "Snacks"),
    new Item(22, 'Matoke', 150, "Snacks"),
    new Item(23, 'Matoke', 150, "Snacks"),
    new Item(24, 'Matoke', 150, "Snacks"),
    new Item(25, 'Matoke', 150, "Snacks")
  ]

}
