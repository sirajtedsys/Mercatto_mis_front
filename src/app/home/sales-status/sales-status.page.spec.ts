import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalesStatusPage } from './sales-status.page';

describe('SalesStatusPage', () => {
  let component: SalesStatusPage;
  let fixture: ComponentFixture<SalesStatusPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
