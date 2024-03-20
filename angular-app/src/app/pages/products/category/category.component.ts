import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.less'
})
export class CategoryComponent {
  datas = [
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
      product_id: 1,
      product_code: "SP-002",
      product_name: "Watch 4",
      product_price: "100000",
      slug: "watch-4",
      description: "mô tả sản phẩm",
      content: null,
      product_image: "../../../../assets/images/product-2.png"
    },
    {
      product_id: 1,
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
    {
      product_id: 5,
      product_code: "SP-002",
      product_name: "The Freestyle",
      product_price: "10000",
      slug: "the-freestyle",
      description: "mô tả sản phẩm",
      content: null,
      product_image: "../../../../assets/images/product-5.png"
    },
    {
      product_id: 1,
      product_code: "SP-003",
      product_name: "Z Fold 2",
      product_price: "100000",
      slug: "z-fold-2",
      description: "mô tả sản phẩm",
      content: null,
      product_image: "../../../../assets/images/product-3.png"
    }
  ]

}
