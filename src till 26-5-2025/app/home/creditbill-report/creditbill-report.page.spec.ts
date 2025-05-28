import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreditbillReportPage } from './creditbill-report.page';

describe('CreditbillReportPage', () => {
  let component: CreditbillReportPage;
  let fixture: ComponentFixture<CreditbillReportPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditbillReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
