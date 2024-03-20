import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-btn-left',
  standalone: true,
  imports: [],
  template: `
    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.51758 0.966192L1.48309 8.00067L8.51758 15.0352" [attr.stroke]="fill" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  styles: ``
})
export class SvgBtnLeftComponent {
  @Input() fill = "#7B88A8"
}
