import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { environment } from '../../../environments/environment';
import { MenuProps } from '../../../types';
import { MenusService } from '../../core/services/menus.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less',
})
export class HeaderComponent {
  constructor(private menusService: MenusService) {}

  menus: MenuProps[] = [];
  isFixed: boolean = false;

  fetchMenus() {
    this.menusService.getMenus(`${environment.apiUrl}menus`, {}).subscribe({
      next: (res: MenuProps[]) => {
        this.menus = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit() {
    this.fetchMenus();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isFixed = offset > 200;
  }
}
