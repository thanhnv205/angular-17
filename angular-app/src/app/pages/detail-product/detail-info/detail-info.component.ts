import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PricePipe } from '../../../pipes/price.pipe';
import { DetailTabsComponent } from '../detail-tabs/detail-tabs.component';

@Component({
  selector: 'app-detail-info',
  standalone: true,
  imports: [
    CommonModule, 
    PricePipe, 
    DetailTabsComponent,
  ],
  templateUrl: './detail-info.component.html',
  styleUrl: './detail-info.component.less'
})
export class DetailInfoComponent {
  detail = {
    product_id: 1,
    category_name: "Smartphone",
    product_code: "SP-001",
    product_name: "S22 128GB",
    product_price: "100000",
    slug: "s22-128gb",
    description: "It’s our brightest innovation yet. The sensor pulls in more light, the Super Clear Glass dials down lens flare, and fast-acting AI delivers near-instant intelligent processing.",
    content: null,
    product_image: "../../../../assets/images/product-1.png",
    quantity: 1,
    images: [
      {
        image_name:  "../../../../assets/images/thumb-1.png",
      },
      {
        image_name:  "../../../../assets/images/thumb-2.png",
      },
      {
        image_name:  "../../../../assets/images/thumb-3.png",
      }
    ],
    colors: [
      {
        color_id: 1,
        color_name: 'Gray',
        color_hex: '#E7E5EA',
      },
      {
        color_id: 2,
        color_name: 'Gray',
        color_hex: '#5E756F',
      },
      {
        color_id: 3,
        color_name: 'Gray',
        color_hex: '#F2E0DC',
      }
    ]
  }
}
