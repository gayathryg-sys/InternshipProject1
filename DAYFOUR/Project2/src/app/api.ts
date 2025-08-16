import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Api {
  

  async  getProducts(){
    const res = await fetch('https://dummyjson.com/products');
    return await res.json();
  }

   async  getProductsById(id:any){
    const res = await fetch('https://dummyjson.com/products/'+id);
    return await res.json();
  }
  
  
}
