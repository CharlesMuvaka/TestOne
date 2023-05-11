export class Item {
  constructor(public id: number, public name: string, public price: number, public category: string){}
}

export class Order{

  constructor(public list: Item[], public id: number, public senderId: number){}
}
