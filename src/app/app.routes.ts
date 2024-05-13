import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ProductsComponent } from './Pages/products/products.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { SingleProductComponent } from './Pages/single-product/single-product.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'products',component:ProductsComponent},
    {path:'contact',component:ContactComponent},
    {path:'product/:id',component:SingleProductComponent}
];
