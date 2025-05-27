import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreditBillSettlmentPage } from './credit-bill-settlment.page';

describe('CreditBillSettlmentPage', () => {
  let component: CreditBillSettlmentPage;
  let fixture: ComponentFixture<CreditBillSettlmentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditBillSettlmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
