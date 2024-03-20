import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { environment } from '../../../../environments/environment';
import { OurWorkService } from '../../../core/services/our-work.service';
import { OurWorkProps } from '../../../../types';

@Component({
  selector: 'app-our-work-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-work-home.component.html',
  styleUrl: './our-work-home.component.less'
})
export class OurWorkHomeComponent {
  constructor(private ourWorkService: OurWorkService) {}

  data: OurWorkProps = {
    title: '',
    description: '',
    slug: '',
    images: []
  }

  fetchData() {
    this.ourWorkService.getList(`${environment.apiUrl}our-work`, {}).subscribe({
      next: (res: OurWorkProps) => {
        this.data = res; 
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  ngOnInit() {
    this.fetchData();
  }
}
