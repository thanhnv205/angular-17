import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgArrowLinkComponent } from './svg-arrow-link.component';

describe('SvgArrowRightComponent', () => {
  let component: SvgArrowLinkComponent;
  let fixture: ComponentFixture<SvgArrowLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgArrowLinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgArrowLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
