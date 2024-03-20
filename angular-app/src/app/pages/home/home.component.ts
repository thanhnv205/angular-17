import { Component } from '@angular/core';
import { IntroHomeComponent } from './intro-home/intro-home.component';
import { CommunityHomeComponent } from './community-home/community-home.component';
import { OurWorkHomeComponent } from './our-work-home/our-work-home.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    IntroHomeComponent,
    CommunityHomeComponent,
    OurWorkHomeComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
})
export class HomeComponent {}
