import { Component } from '@angular/core';
import { Item, Order } from '../item';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {



 firebaseConfig = {
  apiKey: "AIzaSyDvqGPMhdskF5OnA2xpCgVXBuWxvBLPp-Y",
  authDomain: "equifly-42d4e.firebaseapp.com",
  databaseURL: "https://equifly-42d4e-default-rtdb.firebaseio.com",
  projectId: "equifly-42d4e",
  storageBucket: "equifly-42d4e.appspot.com",
  messagingSenderId: "546017914343",
  appId: "1:546017914343:web:095f880789f987bb19e142",
  measurementId: "G-8QDM8D99QR"
};

// Initialize Firebase
app = initializeApp(this.firebaseConfig);
analytics = getAnalytics(this.app);
dbReference = getDatabase(this.app)

  cartItems: Item[]  = [];

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

  addToCart(index: number) {
    var item = this.items[index]
    this.cartItems.push(item);

    //adding the item to the database
    set(ref(this.dbReference, "items/" + item.id),{
      itemId: item.id,
      itemName: item.name,
      itemPrice: item.price
    })
    console.log(item.name)
  }
  orderItems: Item[] = []
  table = document.getElementById("table")
  appendItem(_t27: number) {

    var item = this.items[_t27]
    this.orderItems.push(item)
    const newRow = document.createElement('tr')
    const tableBody = document.createElement('tbody')
    const td1 = document.createElement('td')
    const td2 = document.createElement('td')
    const td3 = document.createElement('td')

    td1.innerHTML = item.name
    td2.innerHTML = item.price.toString()
    td3.innerHTML = "1"

    newRow.appendChild(td1)
    newRow.appendChild(td2)
    newRow.appendChild(td3)

    tableBody.appendChild(newRow)
    this.table?.appendChild(tableBody)
  }



  addToDb() {
    var order = new Order(this.orderItems, 1, 1)

    set(ref(this.dbReference, "orders/"),{
      orderOne: order
    })
  }

  showDetails() {
    const userId = document.querySelector("")
      for(let item in this.orderItems){
        const newRow = document.createElement('tr')
        const tableBody = document.createElement('tbody')
        const td1 = document.createElement('td')
        const td2 = document.createElement('td')
        const td3 = document.createElement('td')

        td1.innerHTML = this.orderItems[item].name
        td2.innerHTML = this.orderItems[item].price.toString()
        td3.innerHTML = "1"

      }
  }

}
