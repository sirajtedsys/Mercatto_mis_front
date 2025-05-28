import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfitReportPage } from './profit-report.page';

describe('ProfitReportPage', () => {
  let component: ProfitReportPage;
  let fixture: ComponentFixture<ProfitReportPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
