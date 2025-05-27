import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerSalesReportPage } from './customer-sales-report.page';

describe('CustomerSalesReportPage', () => {
  let component: CustomerSalesReportPage;
  let fixture: ComponentFixture<CustomerSalesReportPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSalesReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
