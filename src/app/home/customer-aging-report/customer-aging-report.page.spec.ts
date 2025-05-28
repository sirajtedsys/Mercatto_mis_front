import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerAgingReportPage } from './customer-aging-report.page';

describe('CustomerAgingReportPage', () => {
  let component: CustomerAgingReportPage;
  let fixture: ComponentFixture<CustomerAgingReportPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAgingReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
