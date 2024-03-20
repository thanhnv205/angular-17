import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-btn-right',
  standalone: true,
  imports: [],
  template: `
    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.48242 0.966192L8.51691 8.00067L1.48242 15.0352" [attr.stroke]="fill" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  styles: ``
})
export class SvgBtnRightComponent {
  @Input() fill = '#2D3958'
}
