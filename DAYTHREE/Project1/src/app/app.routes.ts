import { Routes } from '@angular/router';
import { Home } from './home/home';
import { District } from './district/district';
import { Contact } from './contact/contact';

export const routes: Routes = [
    {
        path: '' , component:Home
    },
    
  {
    path: 'district' , component:District
  },

  {
    path: 'contact' , component:Contact
  },
   
];
