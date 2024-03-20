import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgBtnLeftComponent } from './svg-btn-left.component';

describe('SvgBtnLeftComponent', () => {
  let component: SvgBtnLeftComponent;
  let fixture: ComponentFixture<SvgBtnLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgBtnLeftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgBtnLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
