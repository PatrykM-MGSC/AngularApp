import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingSummaryComponent } from './shopping-summary.component';

describe('ShoppingSummaryComponent', () => {
  let component: ShoppingSummaryComponent;
  let fixture: ComponentFixture<ShoppingSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
