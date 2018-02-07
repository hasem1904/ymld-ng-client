import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatpricingComponent } from './seatpricing.component';

describe('SeatpricingComponent', () => {
  let component: SeatpricingComponent;
  let fixture: ComponentFixture<SeatpricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatpricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatpricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
