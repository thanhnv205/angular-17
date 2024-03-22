import { Component } from '@angular/core';
import { IntroduceComponent } from './introduce/introduce.component';
import { DetailInfoComponent } from './detail-info/detail-info.component';
import { RelatedProductsComponent } from './related-products/related-products.component';

@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [
    IntroduceComponent, 
    DetailInfoComponent,
    RelatedProductsComponent
  ],
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.less'
})
export class DetailProductComponent {

}
