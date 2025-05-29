import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupplierAgeingReportPage } from './supplier-ageing-report.page';

describe('SupplierAgeingReportPage', () => {
  let component: SupplierAgeingReportPage;
  let fixture: ComponentFixture<SupplierAgeingReportPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierAgeingReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
