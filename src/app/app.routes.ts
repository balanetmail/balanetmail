import { Routes } from '@angular/router';
import { About } from './about/about';
import { Home } from './home/home';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: '', component: Home, title: 'Balamurugan Gopal' },
  { path: 'about', component: About, title: 'About me' },
  { path: 'contact', component: Contact, title: 'Contact' },
];
