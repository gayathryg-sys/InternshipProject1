import { Routes } from '@angular/router';
import { Home } from './common/home/home';
import { Product } from './product/product';
import { Contact } from './contact/contact';
import { SingleProduct } from './single-product/single-product';


export const routes: Routes = [
    {
        path: '' , component:Home
    },

    {
        path: 'product' , component:Product
    },

    {
        path: 'contact' , component:Contact
    },

    {
        path: 'product/:id' , component:SingleProduct
    },

    

];
