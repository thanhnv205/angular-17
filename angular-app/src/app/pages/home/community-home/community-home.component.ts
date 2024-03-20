import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { environment } from '../../../../environments/environment';
import { CommunityService } from '../../../core/services/community.service';
import { CommunityProps } from '../../../../types';

import { SvgArrowLinkComponent } from '../../../../assets/icons/svg-arrow-link/svg-arrow-link.component';
import { SvgBtnRightComponent } from '../../../../assets/icons/svg-btn-right/svg-btn-right.component';
import { SvgBtnLeftComponent } from '../../../../assets/icons/svg-btn-left/svg-btn-left.component';



@Component({
  selector: 'app-community-home',
  standalone: true,
  imports: [CommonModule, SvgArrowLinkComponent, SvgBtnRightComponent, SvgBtnLeftComponent],
  templateUrl: './community-home.component.html',
  styleUrl: './community-home.component.less',
})
export class CommunityHomeComponent {
  constructor(private communityService: CommunityService) {}

  data: CommunityProps = {
    heading: '',
    title: '',
    description: '',
    slug: '',
    highlight: '',
    communities: []
  }

  fetchData() {
    this.communityService.getList(`${environment.apiUrl}community`, {}).subscribe({
      next: (res: CommunityProps) => {
        this.data = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  changeHeading(): string[] {
    const arrHeading = this.data.heading.split(' ');
    const arrHighlight = this.data.highlight.split(' ');
    
    const index = arrHeading.findIndex((_, i) => arrHeading.slice(i, i + arrHighlight.length).join(' ') === this.data.highlight);
    
    if (index !== -1) {
      return [...arrHeading.slice(0, index), this.data.highlight, ...arrHeading.slice(index + arrHighlight.length)];
    }
    return arrHeading;
  }

  ngOnInit() {
    this.fetchData();
  }
}
