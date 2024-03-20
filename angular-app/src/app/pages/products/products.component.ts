import { Component } from '@angular/core';
import { IntroduceComponent } from './introduce/introduce.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CategoryComponent } from './category/category.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    IntroduceComponent,
    SidebarComponent,
    CategoryComponent,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.less'
})

export class ProductsComponent {

}
