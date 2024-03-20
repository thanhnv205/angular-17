import { Component } from '@angular/core';
import { IntroduceComponent } from './introduce/introduce.component';
import { DetailInfoComponent } from './detail-info/detail-info.component';

@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [IntroduceComponent, DetailInfoComponent],
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.less'
})
export class DetailProductComponent {

}
