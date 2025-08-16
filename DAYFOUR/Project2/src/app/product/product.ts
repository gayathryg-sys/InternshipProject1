// import { Component } from '@angular/core';
// import { Card } from "../common/card/card";
// import { Api } from '../api';

// @Component({
//   selector: 'app-product',
//   imports: [Card],
//   templateUrl: './product.html',
//   styleUrl: './product.css'
// })
// export class Product {

//   constructor(private api: Api) {}
//   items: any[] = [];
//   ngOnInit() {
    
//     this.api.getProducts().then(products: any) => this.items =products.products);
//   }
//   }
import { Component } from '@angular/core';
import { Card } from "../common/card/card";
import { Api } from '../api';

@Component({
  selector: 'app-product',
  imports: [Card],
  templateUrl: './product.html',
  styleUrl: './product.css'
})


export class Product {
  items: any = [];

  constructor(private api: Api) {}

  ngOnInit() {
    this.api.getProducts().then((products: any) => this.items = products.products);
  }
}