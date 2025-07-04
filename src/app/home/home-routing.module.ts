import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
     
      
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      {
        path: 'credit-bill-settlment',
        loadChildren: () => import('./credit-bill-settlment/credit-bill-settlment.module').then( m => m.CreditBillSettlmentPageModule)
      },
   
      {
        path: 'creditbill-report',
        loadChildren: () => import('./creditbill-report/creditbill-report.module').then( m => m.CreditbillReportPageModule)
      },
  {
    path: 'sales-status',
    loadChildren: () => import('./sales-status/sales-status.module').then( m => m.SalesStatusPageModule)
  },
  {
    path: 'item-sales',
    loadChildren: () => import('./item-sales/item-sales.module').then( m => m.ItemSalesPageModule)
  },  
  {
    path: 'customer-sales-report',
    loadChildren: () => import('./customer-sales-report/customer-sales-report.module').then( m => m.CustomerSalesReportPageModule)
  },
  {
    path: 'oneparty-allitem-report',
    loadChildren: () => import('./oneparty-allitem-report/oneparty-allitem-report.module').then( m => m.OnepartyAllitemReportPageModule)
  },
  {
    path: 'item-group-report',
    loadChildren: () => import('./item-group-report/item-group-report.module').then( m => m.ItemGroupReportPageModule)
  },
  {
    path: 'oneitem-all-party-report',
    loadChildren: () => import('./oneitem-all-party-report/oneitem-all-party-report.module').then( m => m.OneitemAllPartyReportPageModule)
  },
  {
    path: 'profit-report',
    loadChildren: () => import('./profit-report/profit-report.module').then( m => m.ProfitReportPageModule)
  },
  {
    path: 'customer-aging-report',
    loadChildren: () => import('./customer-aging-report/customer-aging-report.module').then( m => m.CustomerAgingReportPageModule)
  },
  {
    path: 'supplier-ageing-report',
    loadChildren: () => import('./supplier-ageing-report/supplier-ageing-report.module').then( m => m.SupplierAgeingReportPageModule)
  },
   {
    path: 'stock-adjustment',
    loadChildren: () => import('./stock-adjustment/stock-adjustment.module').then( m => m.StockAdjustmentPageModule)
  },
     
    ]
  },
 

 



 

 

 

 






 


 

 

  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
