import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-arrow-link',
  standalone: true,
  imports: [],
  template: `
  <svg 
    width="17"
    height="10" 
    viewBox="0 0 17 10" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    [class]="class"
  >
  <path d="M12 9L15.2929 5.70711C15.6834 5.31658 15.6834 4.68342 15.2929 4.29289L12 1M15 5L1 5" [attr.stroke]="fill" stroke-width="1.5" stroke-linecap="round"/>
  </svg>  
  `,
  styles: ``
})
export class SvgArrowLinkComponent {
  @Input() class = '';
  @Input() fill = '#886CFF'
}
