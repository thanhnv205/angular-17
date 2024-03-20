import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.less'
})
export class SidebarComponent {
  dataBrand = [
    {
      brand_name: 'Apple',
      brand_id: 1
    },
    {
      brand_name: 'Bose',
      brand_id: 2
    },
    {
      brand_name: 'Dell',
      brand_id: 3
    },
    {
      brand_name: 'LG',
      brand_id: 4
    },
    {
      brand_name: 'Samsung',
      brand_id: 5
    },
    {
      brand_name: 'Sony',
      brand_id: 6
    }
  ]

  categories = [
    {
      category_name: 'Accessories',
      category_id: 1
    },
    {
      category_name: 'Camera',
      category_id: 2
    },
    {
      category_name: 'Computer',
      category_id: 3
    },
    {
      category_name: 'Headphones',
      category_id: 4
    },
    {
      category_name: 'Smartphone',
      category_id: 5
    },
    {
      category_name: 'TV',
      category_id: 6
    },
    {
      category_name: 'Video',
      category_id: 7
    }
  ]

  constructor(private elementRef: ElementRef) {}

  selectedBrandIds: number[] = []
  selectedCategoryIds: number[] = []

  handleCheckedBrand(brandId: number) {
    const index = this.selectedBrandIds.indexOf(brandId)
    index === -1 ? 
      this.selectedBrandIds.push(brandId):
      this.selectedBrandIds.splice(index, 1)
  }

  handleCheckedCategory(categoryId: number) {
    const index = this.selectedCategoryIds.indexOf(categoryId)
    index === -1 ?
      this.selectedCategoryIds.push(categoryId) :
      this.selectedCategoryIds.splice(index, 1)
      console.log(this.selectedCategoryIds);
      
  }

  handleCollapse(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    const sidebarHeadings = this.elementRef.nativeElement.querySelectorAll('.sidebar_heading');

    sidebarHeadings.forEach((heading: HTMLElement) => {
      heading === target.parentElement && heading.classList.toggle('selected') 
    });
  }
}
