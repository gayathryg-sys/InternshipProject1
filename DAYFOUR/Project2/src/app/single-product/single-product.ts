import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../api';

@Component({
  selector: 'app-single-product',
  imports: [],
  templateUrl: './single-product.html',
  styleUrl: './single-product.css'
})
export class SingleProduct {

  constructor(private api: Api, private route: ActivatedRoute) {}

  product:any;

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.api.getProductsById(id).then((products: any) => this.product = products);
    
  }

}
