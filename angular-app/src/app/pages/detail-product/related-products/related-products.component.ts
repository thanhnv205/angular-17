import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PricePipe } from '../../../pipes/price.pipe';

@Component({
  selector: 'app-related-products',
  standalone: true,
  imports: [CommonModule, RouterModule, PricePipe],
  templateUrl: './related-products.component.html',
  styleUrl: './related-products.component.less'
})
export class RelatedProductsComponent {
  data = [
    {
      product_id: 1,
      product_code: "SP-001",
      product_name: "S22 128GB",
      product_price: "100000",
      slug: "s22-128gb",
      description: "mô tả sản phẩm",
      content: null,
      product_image: "../../../../assets/images/product-1.png"
    },
    {
      product_id: 2,
      product_code: "SP-002",
      product_name: "Watch 4",
      product_price: "100000",
      slug: "watch-4",
      description: "mô tả sản phẩm",
      content: null,
      product_image: "../../../../assets/images/product-2.png"
    },
    {
      product_id: 3,
      product_code: "SP-003",
      product_name: "Z Fold 2",
      product_price: "100000",
      slug: "z-fold-2",
      description: "mô tả sản phẩm",
      content: null,
      product_image: "../../../../assets/images/product-3.png"
    },
    {
      product_id: 4,
      product_code: "SP-004",
      product_name: "Tab S7 FE",
      product_price: "1000",
      slug: "tab-s7-fE",
      description: "mô tả sản phẩm",
      content: null,
      product_image: "../../../../assets/images/product-4.png"
    },
  ]
}
