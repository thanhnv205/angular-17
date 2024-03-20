import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgPlayComponent } from './svg-play.component';

describe('SvgPlayComponent', () => {
  let component: SvgPlayComponent;
  let fixture: ComponentFixture<SvgPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgPlayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
