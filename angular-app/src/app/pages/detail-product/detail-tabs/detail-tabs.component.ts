import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-tabs',
  standalone: true,
  imports: [],
  templateUrl: './detail-tabs.component.html',
  styleUrl: './detail-tabs.component.less'
})
export class DetailTabsComponent {
  @Input() description?: string;
}
