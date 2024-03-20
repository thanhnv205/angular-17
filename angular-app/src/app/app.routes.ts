import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';


export const routes: Routes = [
  { path: 'home-page', redirectTo: '', pathMatch: 'full' }, // Redirect '/home-page' to '/'
  { path: '', component: HomeComponent }, // Route for '/home-page'
  
  { path: 'products', component: ProductsComponent },
  { path: 'product/:slug', component: DetailProductComponent }
];
