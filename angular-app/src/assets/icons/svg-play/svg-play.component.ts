import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-play',
  standalone: true,
  imports: [],
  template: `
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      [class]="class"
    >
      <path
        d="M4.85352 3.13013L16.5202 10.6301L4.85352 18.1301V3.13013Z"
        fill="#886CFF"
      />
    </svg>
  `,
  styles: ``,
})
export class SvgPlayComponent {
  @Input() class = '';
}
