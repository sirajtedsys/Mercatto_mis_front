import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemGroupReportPage } from './item-group-report.page';

describe('ItemGroupReportPage', () => {
  let component: ItemGroupReportPage;
  let fixture: ComponentFixture<ItemGroupReportPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemGroupReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
