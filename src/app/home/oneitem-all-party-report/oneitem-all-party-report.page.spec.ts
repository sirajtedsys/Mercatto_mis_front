import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OneitemAllPartyReportPage } from './oneitem-all-party-report.page';

describe('OneitemAllPartyReportPage', () => {
  let component: OneitemAllPartyReportPage;
  let fixture: ComponentFixture<OneitemAllPartyReportPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OneitemAllPartyReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
