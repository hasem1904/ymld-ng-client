import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseticketsComponent } from './purchasetickets.component';

describe('PurchaseticketsComponent', () => {
  let component: PurchaseticketsComponent;
  let fixture: ComponentFixture<PurchaseticketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseticketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
