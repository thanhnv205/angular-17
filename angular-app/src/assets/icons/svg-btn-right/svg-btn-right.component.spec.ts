import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgBtnRightComponent } from './svg-btn-right.component';

describe('SvgBtnRightComponent', () => {
  let component: SvgBtnRightComponent;
  let fixture: ComponentFixture<SvgBtnRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgBtnRightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgBtnRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
