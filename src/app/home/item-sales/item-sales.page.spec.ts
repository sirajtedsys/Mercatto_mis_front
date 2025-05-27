import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemSalesPage } from './item-sales.page';

describe('ItemSalesPage', () => {
  let component: ItemSalesPage;
  let fixture: ComponentFixture<ItemSalesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
