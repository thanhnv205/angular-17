import { Component } from '@angular/core';
import { SvgPlayComponent } from '../../../../assets/icons/svg-play/svg-play.component';


@Component({
  selector: 'app-intro-home',
  standalone: true,
  imports: [SvgPlayComponent],
  templateUrl: './intro-home.component.html',
  styleUrl: './intro-home.component.less',
})
export class IntroHomeComponent {
  title = 'An elite secosystem of';
  description = 'entrepreneurs';
  content =
    'We believe that technology has the power to make the world a better place and we invest our time and resources into entrepreneurs that are making an impact.';
}
