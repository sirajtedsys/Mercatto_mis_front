import { DatePipe } from '@angular/common';
import { Component, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ReportService } from 'src/services/report.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sales-status',
  templateUrl: './sales-status.page.html',
  styleUrls: ['./sales-status.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SalesStatusPage implements OnInit {
  Today:any
  Fromd:any
  Tod:any
  SectionID:string=''

  ClickedReport:string='sale'  //sale  //collection  /purchase //customer-outstanding
  ViewTable:boolean=false

  constructor(private renderer: Renderer2,private loadingCtrl:LoadingController,private repser:ReportService,
    private datepipe:DatePipe)
   {
    
    this.Today= this.datepipe.transform(new Date(),'yyyy-MM-dd')
    this.Fromd=this.Today
    this.Tod=this.Today
    this.getReport()
   }

  ngOnInit(): void {
    console.log();
    
    // this.loadScript('../../../assets/report/assets/js/jquery.min.js');
    // this.loadScript('../../../assets/report/assets/js/popper.js');
    // this.loadScript('../../../../assets/report/assets/js/bootstrap.bundle.min.js');
  }

  // loadScript(src: string) {
  //   const script = this.renderer.createElement('script');
  //   script.src = src;
  //   script.type = 'text/javascript';
  //   script.defer = true;
  //   this.renderer.appendChild(document.body, script);
  // }
  getReport(){
    this.GetSalesDetails(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'))
    
    this.GetPurchaseSummary(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'))
    
    this.GetSaleReportTables(this.SelectedSaleReport)
    this.GetProfitBreakup(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'))
    this.GetStockBreakup()
    // this.GetBillwiseSale(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'))
    this.GetCustomerOutStanding(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'),this.SectionID)
    this.GetSupplierOutStanding(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'),this.SectionID)
    
    
  }

  ShowTable(clickedreport:string)
  {
    console.log(clickedreport);
    
    this.ViewTable=true
    this.ClickedReport=clickedreport

    if(clickedreport=='sale')
    {
      //for the case of only selecting first time
      // if(this.SelectedSaleReport=='bill_wise')
      // {
        this.GetSaleReportTables('bill_wise')
      // }
    }else if(clickedreport=='collection')
    {
      this.SelectedSaleReport='colle_count'
      this.GetCounterwiseCollection(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'))
    }
    else if(clickedreport=='purchase')
      {
        this.SelectedSaleReport='p_bill'
        this.GetPurchasewise(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'))
      }
      else if(clickedreport=='profit')
        {
          this.SelectedSaleReport='pro_item'
          this.GetProitItemWise(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'))
        }
        else if(clickedreport=='stock')
          {
            this.SelectedSaleReport='stock_item'
            this.GetStockItemWise()
          }
          else if(clickedreport=='customer-outstanding')
          {
            this.SelectedSaleReport ='CO_Customer_Sale'
            this.GetCustomerSales(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'),this.SectionID)
          } 
          else if(clickedreport=='supplier-outstanding')
            {
              this.SelectedSaleReport ='supplier_wise_purchase'
              this.GetSupplierPurchases(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'),this.SectionID)
            }
          
    // supplier-outstanding

  }
  BillWiseReportData:any[]=[]
  ItemWiseReportData:any[]=[]
  CateWiseReportData:any[]=[]
  CounterCollectionReportData:any[]=[]
  PurhaseReportData:any[]=[]
  PurchaseItemReport:any[]=[]
  PurchaseCategoryReport:any[]=[]
  PurchaseVendorReport:any[]=[]
  ProfitItemWiseReport:any[]=[]
  StockItemWiseReport:any[]=[]
  ProfitCateWiseReport:any[]=[]
  profitVendorWise:any[]=[]
  StockCateWiseReport:any[]=[]
  StockVendorWiseReport:any[]=[]

  SelectedSaleReport:string='bill_wise'   //cate_wise  //bill_wise  //item_wise   //colle_count  //p_bill //p_item  //p_cate  //p_vendor  //pro_item //pro_cate  //pro_vendor //stock_item  //stock_vendor  //stock_cate
  GetSaleReportTables(clickedreport:string){
    this.SelectedSaleReport=clickedreport
    if(clickedreport=='bill_wise')
    {
      
     this.GetBillwiseSale(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'))
    }
    else if(clickedreport=='cate_wise')
    {
      this.GetItemCategorywiseSale(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'))
    }
    else if(clickedreport=='item_wise')
    {
      

      this.GetItemwiseSale(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'))
    }
    else if(clickedreport=='colle_count')
      {
        
  
        this.GetCounterwiseCollection(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'))
      }
      else if(clickedreport=='p_bill')
        {
          
    
          this.GetPurchasewise(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'))
        }
        else if(clickedreport=='p_item')
          {
            
      
            this.GetPurchaseItemwise(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'))
          }
          else if(clickedreport=='p_cate')
            {
              
        
              this.GetPurchaseItemCategorywise(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'))
            }
            else if(clickedreport=='p_vendor')
              {
                
          
                this.GetPurchasevendorwise(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'))
              }

              else if(clickedreport=='pro_vendor')
                {
                  
            
                  this.GetVendorWiseProfit(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'))
                }

                else if(clickedreport=='pro_item')
                  {
                    
              
                    this.GetProitItemWise(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'))
                  }

                  else if(clickedreport=='pro_cate')
                    {
                      
                
                      this.GetOnlineProfitCategoryWise(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'))
                    }

                    else if(clickedreport=='stock_vendor')
                      {
                        
                  
                        this.GetVendorWiseStock()
                      }
    
                      else if(clickedreport=='stock_cate')
                        {
                          
                    
                          this.GetCateWiseStock()
                        }
                        else if(clickedreport=='CO_Customer_collection')
                          {
                            
                              // this.SelectedSaleReport = 'CO_Customer_report'
                      
                            this.GetCustomerCollection(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'),this.SectionID)
                          }
                          else if(clickedreport=='CO_Customer_Balance')
                            {
                              // this.SelectedSaleReport = 'CO_Customer_report'
                        
                              this.GetCustomerBalance(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'),this.SectionID)
                            }
                            else if(clickedreport=='CO_Customer_Sale')
                              {
                                
                              // this.SelectedSaleReport = 'CO_Customer_report'
                          
                                this.GetCustomerSales(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'),this.SectionID)
                              }
                              else if(clickedreport=='supplier_wise_outstanding')
                                {
                                  
                            
                                  this.GetSupplierBalance(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'),this.SectionID)
                                }
                                else if(clickedreport=='supplier_wise_payment')
                                  {
                              
                                    this.GetSupplierPayment(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'),this.SectionID)
                                  }
                                  else if(clickedreport=='supplier_wise_purchase')
                                    {
                                      
                                
                                      this.GetSupplierPurchases(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'),this.SectionID)
                                    }
  }

  async GetBillwiseSale(fd:any,td:any){
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
      message: 'Loading...', // Optional: Custom message
      spinner: 'dots', // Optional: Choose a spinner
      // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
    });
    await loading.present();
    this.repser.GetBillwiseSale(fd,td).subscribe((data:any)=>{
      loading.dismiss()
      console.log(data);
      
      // this.comser.dismissLoading();
      if(data.Status==200)
      {

        this.BillWiseReportData=data.Data

      //  this.GetAllUserRightsTab(data.MenuGroupId)
      // "COMP_NAME": "Company",
      //   "SALE_GROSS": 95.3,
      //   "SALE_TOT_TAX": 0.0,
      //   "SALE_DISC_AMT": 0.0,
      //   "SALE_ADT_CHG": -3.0,
      //   "CASH": 12.3,
      //   "CREDIT": 60.0,
      //   "CC_AMOUNT": 0.0,
      //   "CHQ_AMOUNT": 0.0,
      //   "WALLET_AMOUNT": 0.0,
      //   "SALE_NET_AMT": 72.3,
      //   "SLRET_NET_AMT": -20.0
        
      }
      else
      {
        Swal.fire(data.Message,'','error')
        // console.log('ddd');
        // this.router.navigate(['login'])
        // localStorage.removeItem('type')
        
      }
    },
  (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
  }
// cheque amt
  async GetItemwiseSale(fd:any,td:any){
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
      message: 'Loading...', // Optional: Custom message
      spinner: 'dots', // Optional: Choose a spinner
      // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
    });
    await loading.present();
    this.repser.GetItemwiseSale(fd,td).subscribe((data:any)=>{
      loading.dismiss()
      console.log(data);
      
      // this.comser.dismissLoading();
      if(data.Status==200)
      {

// temname
// qty
// totalamy
// tax Atomics
// disc Atomics
// net Atomics
        
        this.ItemWiseReportData=data.Data

      //  this.GetAllUserRightsTab(data.MenuGroupId)
      // "COMP_NAME": "Company",
      //   "SALE_GROSS": 95.3,
      //   "SALE_TOT_TAX": 0.0,
      //   "SALE_DISC_AMT": 0.0,
      //   "SALE_ADT_CHG": -3.0,
      //   "CASH": 12.3,
      //   "CREDIT": 60.0,
      //   "CC_AMOUNT": 0.0,
      //   "CHQ_AMOUNT": 0.0,
      //   "WALLET_AMOUNT": 0.0,
      //   "SALE_NET_AMT": 72.3,
      //   "SLRET_NET_AMT": -20.0
        
      }
      else
      {
        Swal.fire(data.Message,'','error')
        // console.log('ddd');
        // this.router.navigate(['login'])
        // localStorage.removeItem('type')
        
      }
    },
  (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
  }

  async GetItemCategorywiseSale(fd:any,td:any){
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
      message: 'Loading...', // Optional: Custom message
      spinner: 'dots', // Optional: Choose a spinner
      // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
    });
    await loading.present();
    this.repser.GetItemCategorywiseSale(fd,td).subscribe((data:any)=>{
      loading.dismiss()
      console.log(data);
      
      // this.comser.dismissLoading();
      if(data.Status==200)
      {


        // catname
        // disc
        // tx 
        // toal
        // net amt
        
        this.CateWiseReportData=data.Data

      //  this.GetAllUserRightsTab(data.MenuGroupId)
      // "COMP_NAME": "Company",
      //   "SALE_GROSS": 95.3,
      //   "SALE_TOT_TAX": 0.0,
      //   "SALE_DISC_AMT": 0.0,
      //   "SALE_ADT_CHG": -3.0,
      //   "CASH": 12.3,
      //   "CREDIT": 60.0,
      //   "CC_AMOUNT": 0.0,
      //   "CHQ_AMOUNT": 0.0,
      //   "WALLET_AMOUNT": 0.0,
      //   "SALE_NET_AMT": 72.3,
      //   "SLRET_NET_AMT": -20.0
        
      }
      else
      {
        Swal.fire(data.Message,'','error')
        // console.log('ddd');
        // this.router.navigate(['login'])
        // localStorage.removeItem('type')
        
      }
    },
  (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
  }


  async GetCounterwiseCollection(fd:any,td:any){
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
      message: 'Loading...', // Optional: Custom message
      spinner: 'dots', // Optional: Choose a spinner
      // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
    });
    await loading.present();
    this.repser.GetCounterwiseCollection(fd,td).subscribe((data:any)=>{
      loading.dismiss()
      console.log(data);
      
      // this.comser.dismissLoading();
      if(data.Status==200)
      {


        // catname
        // disc
        // tx 
        // toal
        // net amt
        
        this.CounterCollectionReportData=data.Data

      //  this.GetAllUserRightsTab(data.MenuGroupId)
      // "COMP_NAME": "Company",
      //   "SALE_GROSS": 95.3,
      //   "SALE_TOT_TAX": 0.0,
      //   "SALE_DISC_AMT": 0.0,
      //   "SALE_ADT_CHG": -3.0,
      //   "CASH": 12.3,
      //   "CREDIT": 60.0,
      //   "CC_AMOUNT": 0.0,
      //   "CHQ_AMOUNT": 0.0,
      //   "WALLET_AMOUNT": 0.0,
      //   "SALE_NET_AMT": 72.3,
      //   "SLRET_NET_AMT": -20.0
        
      }
      else
      {
        Swal.fire(data.Message,'','error')
        // console.log('ddd');
        // this.router.navigate(['login'])
        // localStorage.removeItem('type')
        
      }
    },
  (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
  }

  async GetPurchasewise(fd:any,td:any){
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
      message: 'Loading...', // Optional: Custom message
      spinner: 'dots', // Optional: Choose a spinner
      // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
    });
    await loading.present();
    this.repser.GetPurchasewise(fd,td).subscribe((data:any)=>{
      loading.dismiss()
      console.log(data);
      
      // this.comser.dismissLoading();
      if(data.Status==200)
      {


        // catname
        // disc
        // tx 
        // toal
        // net amt
        
        this.PurhaseReportData=data.Data

     
      }
      else
      {
        Swal.fire(data.Message,'','error')
        // console.log('ddd');
        // this.router.navigate(['login'])
        // localStorage.removeItem('type')
        
      }
    },
  (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
  }

  async GetPurchaseItemwise(fd:any,td:any){
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
      message: 'Loading...', // Optional: Custom message
      spinner: 'dots', // Optional: Choose a spinner
      // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
    });
    await loading.present();
    this.repser.GetPurchaseItemwise(fd,td).subscribe((data:any)=>{
      loading.dismiss()
      console.log(data);
      
      // this.comser.dismissLoading();
      if(data.Status==200)
      {


        // catname
        // disc
        // tx 
        // toal
        // net amt
        
        this.PurchaseItemReport=data.Data

     
      }
      else
      {
        Swal.fire(data.Message,'','error')
        // console.log('ddd');
        // this.router.navigate(['login'])
        // localStorage.removeItem('type')
        
      }
    },
  (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
  }
  async GetPurchaseItemCategorywise(fd:any,td:any){
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
      message: 'Loading...', // Optional: Custom message
      spinner: 'dots', // Optional: Choose a spinner
      // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
    });
    await loading.present();
    this.repser.GetPurchaseItemCategorywise(fd,td).subscribe((data:any)=>{
      loading.dismiss()
      console.log(data);
      
      // this.comser.dismissLoading();
      if(data.Status==200)
      {


        // catname
        // disc
        // tx 
        // toal
        // net amt
        
        this.PurchaseCategoryReport=data.Data

     
      }
      else
      {
        Swal.fire(data.Message,'','error')
        // console.log('ddd');
        // this.router.navigate(['login'])
        // localStorage.removeItem('type')
        
      }
    },
  (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
  }

  async GetPurchasevendorwise(fd:any,td:any){
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
      message: 'Loading...', // Optional: Custom message
      spinner: 'dots', // Optional: Choose a spinner
      // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
    });
    await loading.present();
    this.repser.GetPurchasevendorwise(fd,td).subscribe((data:any)=>{
      loading.dismiss()
      console.log(data);
      
      // this.comser.dismissLoading();
      if(data.Status==200)
      {


        // catname
        // disc
        // tx 
        // toal
        // net amt
        
        this.PurchaseVendorReport=data.Data

     
      }
      else
      {
        Swal.fire(data.Message,'','error')
        // console.log('ddd');
        // this.router.navigate(['login'])
        // localStorage.removeItem('type')
        
      }
    },
  (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
  }

  async GetStockItemWise(){
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
      message: 'Loading...', // Optional: Custom message
      spinner: 'dots', // Optional: Choose a spinner
      // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
    });
    await loading.present();
    this.repser.GetStockItemWise().subscribe((data:any)=>{
      loading.dismiss()
      console.log(data);
      
      // this.comser.dismissLoading();
      if(data.Status==200)
      {


        // catname
        // disc
        // tx 
        // toal
        // net amt
        
        this.StockItemWiseReport=data.Data

     
      }
      else
      {
        Swal.fire(data.Message,'','error')
        // console.log('ddd');
        // this.router.navigate(['login'])
        // localStorage.removeItem('type')
        
      }
    },
  (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
  }


  async GetVendorWiseProfit(fd:any,td:any){
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
      message: 'Loading...', // Optional: Custom message
      spinner: 'dots', // Optional: Choose a spinner
      // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
    });
    await loading.present();
    this.repser.GetVendorWiseProfit(fd,td).subscribe((data:any)=>{
      loading.dismiss()
      console.log(data);
      
      // this.comser.dismissLoading();
      if(data.Status==200)
      {


        // catname
        // disc
        // tx 
        // toal
        // net amt
        
        this.profitVendorWise=data.Data

     
      }
      else
      {
        Swal.fire(data.Message,'','error')
        // console.log('ddd');
        // this.router.navigate(['login'])
        // localStorage.removeItem('type')
        
      }
    },
  (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
  }

  async GetOnlineProfitCategoryWise(fd:any,td:any){
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
      message: 'Loading...', // Optional: Custom message
      spinner: 'dots', // Optional: Choose a spinner
      // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
    });
    await loading.present();
    this.repser.GetOnlineProfitCategoryWise(fd,td).subscribe((data:any)=>{
      loading.dismiss()
      console.log(data);
      
      // this.comser.dismissLoading();
      if(data.Status==200)
      {


        // catname
        // disc
        // tx 
        // toal
        // net amt
        
        this.ProfitCateWiseReport=data.Data

     
      }
      else
      {
        Swal.fire(data.Message,'','error')
        // console.log('ddd');
        // this.router.navigate(['login'])
        // localStorage.removeItem('type')
        
      }
    },
  (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
  }


  async GetVendorWiseStock(){
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
      message: 'Loading...', // Optional: Custom message
      spinner: 'dots', // Optional: Choose a spinner
      // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
    });
    await loading.present();
    this.repser.GetVendorWiseStock().subscribe((data:any)=>{
      loading.dismiss()
      console.log(data);
      
      // this.comser.dismissLoading();
      if(data.Status==200)
      {


        // catname
        // disc
        // tx 
        // toal
        // net amt
        
        this.StockVendorWiseReport=data.Data

     
      }
      else
      {
        Swal.fire(data.Message,'','error')
        // console.log('ddd');
        // this.router.navigate(['login'])
        // localStorage.removeItem('type')
        
      }
    },
  (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
  }

  async GetCateWiseStock(){
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
      message: 'Loading...', // Optional: Custom message
      spinner: 'dots', // Optional: Choose a spinner
      // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
    });
    await loading.present();
    this.repser.GetCateWiseStock().subscribe((data:any)=>{
      loading.dismiss()
      console.log(data);
      
      // this.comser.dismissLoading();
      if(data.Status==200)
      {


        // catname
        // disc
        // tx 
        // toal
        // net amt
        
        this.StockCateWiseReport=data.Data

     
      }
      else
      {
        Swal.fire(data.Message,'','error')
        // console.log('ddd');
        // this.router.navigate(['login'])
        // localStorage.removeItem('type')
        
      }
    },
  (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
  }




  async GetProitItemWise(fd:any,td:any){
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
      message: 'Loading...', // Optional: Custom message
      spinner: 'dots', // Optional: Choose a spinner
      // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
    });
    await loading.present();
    this.repser.GetProitItemWise(fd,td).subscribe((data:any)=>{
      loading.dismiss()
      console.log(data);
      
      // this.comser.dismissLoading();
      if(data.Status==200)
      {


        // catname
        // disc
        // tx 
        // toal
        // net amt
        
        this.ProfitItemWiseReport=data.Data

     
      }
      else
      {
        Swal.fire(data.Message,'','error')
        // console.log('ddd');
        // this.router.navigate(['login'])
        // localStorage.removeItem('type')
        
      }
    },
  (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
  }
  // GetCounterwiseCollection

  async GetSalesDetails(fd:any,td:any){
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
      message: 'Loading...', // Optional: Custom message
      spinner: 'dots', // Optional: Choose a spinner
      // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
    });
    await loading.present();
    this.repser.GetSalesDetails(fd,td).subscribe((data:any)=>{
      loading.dismiss()
      console.log(data);
      
      // this.comser.dismissLoading();
      if(data.Status==200)
      {

        if(data.Data.length>0)
        {
          this.SA_SALE_GROSS=data.Data[0].SALE_GROSS
          this.SA_SALE_DISC_AMT=data.Data[0].SALE_DISC_AMT
          this.SA_SALE_TOT_TAX=data.Data[0].SALE_TOT_TAX
          this.SA_SALE_NET_AMT=data.Data[0].SALE_NET_AMT
          this.CA_CASH=data.Data[0].CASH
          this.CA_CC_AMOUNT=data.Data[0].CC_AMOUNT
          this.CA_CREDIT=data.Data[0].CREDIT
          this.CA_WALLET_AMOUNT=data.Data[0].WALLET_AMOUNT
          this.CA_CHQ_AMOUNT=data.Data[0].CHQ_AMOUNT
          this.SA_SALE_ADT_CHG=data.Data[0].SALE_ADT_CHG
          this.SA_SLRET_NET_AMT=data.Data[0].SLRET_NET_AMT
        }
        else
        {
          this.SA_SALE_GROSS=''
          this.SA_SALE_DISC_AMT=''
          this.SA_SALE_TOT_TAX=''
          this.SA_SALE_NET_AMT=0
          this.SA_SALE_ADT_CHG=''
          this.SA_SLRET_NET_AMT=''

          this.CA_CASH=''
          this.CA_CC_AMOUNT=''
          this.CA_CREDIT=0
          this.CA_WALLET_AMOUNT=''
          this.CA_CHQ_AMOUNT=''
        }

      //  this.GetAllUserRightsTab(data.MenuGroupId)
      // "COMP_NAME": "Company",
      //   "SALE_GROSS": 95.3,
      //   "SALE_TOT_TAX": 0.0,
      //   "SALE_DISC_AMT": 0.0,
      //   "SALE_ADT_CHG": -3.0,
      //   "CASH": 12.3,
      //   "CREDIT": 60.0,
      //   "CC_AMOUNT": 0.0,
      //   "CHQ_AMOUNT": 0.0,
      //   "WALLET_AMOUNT": 0.0,
      //   "SALE_NET_AMT": 72.3,
      //   "SLRET_NET_AMT": -20.0
        
      }
      else
      {
        Swal.fire(data.Message,'','error')
        // console.log('ddd');
        // this.router.navigate(['login'])
        // localStorage.removeItem('type')
        
      }
    },
  (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
  }

  async GetPurchaseSummary(fd:any,td:any){
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
      message: 'Loading...', // Optional: Custom message
      spinner: 'dots', // Optional: Choose a spinner
      // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
    });
    await loading.present();
    this.repser.GetPurchaseSummary(fd,td).subscribe((data:any)=>{
      loading.dismiss()
      console.log(data);
      
      // this.comser.dismissLoading();
      if(data.Status==200)
      {

        if(data.Data.length>0)
        {

          this.P_NET_AMT=data.Data[0].NET_AMT
          this.P_PURCH_TOT_AMT=data.Data[0].PURCH_TOT_AMT
          this.P_PURCH_TOT_DISC=data.Data[0].PURCH_TOT_DISC
          this.P_PURCH_OTHER_CHG=data.Data[0].PURCH_OTHER_CHG
          this.P_PRET_NET_AMT=data.Data[0].PRET_NET_AMT
          this.P_PURCH_TOT_TAX=data.Data[0].PURCH_TOT_TAX
          this.P_ROUND_OFF=data.Data[0].ROUND_OFF
          // this.CA_CREDIT=data.Data[0].CREDIT
          // this.CA_WALLET_AMOUNT=data.Data[0].WALLET_AMOUNT
          // this.CA_CHQ_AMOUNT=data.Data[0].CHQ_AMOUNT
          // this.SA_SALE_ADT_CHG=data.Data[0].SALE_ADT_CHG
          // this.SA_SLRET_NET_AMT=data.Data[0].SLRET_NET_AMT
        }
        else
        {
          this.P_NET_AMT=''
          this.P_PURCH_TOT_AMT=''
          this.P_PURCH_TOT_DISC=''
          this.P_PURCH_OTHER_CHG=''
          this.P_PRET_NET_AMT=''
          this.P_PURCH_TOT_TAX=''
          this.P_ROUND_OFF=''
        }

      }
      else
      {
        Swal.fire(data.Message,'','error')
        // console.log('ddd');
        // this.router.navigate(['login'])
        // localStorage.removeItem('type')
        
      }
    },
  (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
  }

  async GetProfitBreakup(fd:any,td:any){
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
      message: 'Loading...', // Optional: Custom message
      spinner: 'dots', // Optional: Choose a spinner
      // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
    });
    await loading.present();
    this.repser.GetProfitBreakup(fd,td).subscribe((data:any)=>{
      loading.dismiss()
      console.log(data);
      
      // this.comser.dismissLoading();
      if(data.Status==200)
      {

        if(data.Data.length>0)
        {
        //   {
        //     "TOTAL_SALE_SR": 368.844,
        //     "TOTAL_SALE_PR": 308.044,
        //     "GROSS_PROFIT": 60.8,
        //     "TAX_AMT": 0.36,
        //     "NET_PROFIT": 60.44,
        //     "PROFIT_PER": 19.62
        // }
          this.PR_TOTAL_SALE_SR=data.Data[0].TOTAL_SALE_SR
          this.PR_TOTAL_SALE_PR=data.Data[0].TOTAL_SALE_PR
          this.PR_GROSS_PROFIT=data.Data[0].GROSS_PROFIT
          this.PR_NET_PROFIT=data.Data[0].NET_PROFIT
          this.PR_PROFIT_PER=data.Data[0].PROFIT_PER
          this.PR_TAX_AMT=data.Data[0].TAX_AMT
          // this.P_ROUND_OFF=data.Data[0].ROUND_OFF
          // this.CA_CREDIT=data.Data[0].CREDIT
          // this.CA_WALLET_AMOUNT=data.Data[0].WALLET_AMOUNT
          // this.CA_CHQ_AMOUNT=data.Data[0].CHQ_AMOUNT
          // this.SA_SALE_ADT_CHG=data.Data[0].SALE_ADT_CHG
          // this.SA_SLRET_NET_AMT=data.Data[0].SLRET_NET_AMT
        }
        else
        {
          this.PR_TOTAL_SALE_SR=''
          this.PR_NET_PROFIT=''
          this.PR_TOTAL_SALE_PR=''
          this.PR_GROSS_PROFIT=''
          this.PR_TAX_AMT=''
          this.PR_PROFIT_PER=''
          // this.P_ROUND_OFF=''
        }

      }
      else
      {
        Swal.fire(data.Message,'','error')
        // console.log('ddd');
        // this.router.navigate(['login'])
        // localStorage.removeItem('type')
        
      }
    },
  (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
  }

  async GetStockBreakup(){
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
      message: 'Loading...', // Optional: Custom message
      spinner: 'dots', // Optional: Choose a spinner
      // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
    });
    await loading.present();
    this.repser.GetStockBreakup().subscribe((data:any)=>{
      loading.dismiss()
      console.log(data);
      
      // this.comser.dismissLoading();
      if(data.Status==200)
      {

        if(data.Data.length>0)
        {
        //   {
        //     "STOCK_SR": 33666.006,
        //     "STOCK_PR": 29652.806,
        //     "GROSS_MARGIN": 4013.2,
        //     "TAX_AMT": 230.04,
        //     "NET_MARGIN": 3783.16,
        //     "MARGIN_PER": 12.76
        // }
          this.ST_STOCK_SR=data.Data[0].STOCK_SR
          this.ST_STOCK_PR=data.Data[0].STOCK_PR
          this.ST_GROSS_MARGIN=data.Data[0].GROSS_MARGIN
          this.ST_TAX_AMT=data.Data[0].TAX_AMT
          this.ST_NET_MARGIN=data.Data[0].NET_MARGIN
          this.ST_MARGIN_PER=data.Data[0].MARGIN_PER
          // this.P_ROUND_OFF=data.Data[0].ROUND_OFF
          // this.CA_CREDIT=data.Data[0].CREDIT
          // this.CA_WALLET_AMOUNT=data.Data[0].WALLET_AMOUNT
          // this.CA_CHQ_AMOUNT=data.Data[0].CHQ_AMOUNT
          // this.SA_SALE_ADT_CHG=data.Data[0].SALE_ADT_CHG
          // this.SA_SLRET_NET_AMT=data.Data[0].SLRET_NET_AMT
        }
        else
        {
          this.PR_TOTAL_SALE_SR=''
          this.ST_STOCK_PR=''
          this.ST_GROSS_MARGIN=''
          this.ST_TAX_AMT=''
          this.ST_NET_MARGIN=''
          this.ST_MARGIN_PER=''
          // this.P_ROUND_OFF=''
        }

      }
      else
      {
        Swal.fire(data.Message,'','error')
        // console.log('ddd');
        // this.router.navigate(['login'])
        // localStorage.removeItem('type')
        
      }
    },
  (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
  }


  CO_Bal_Amt:string=''
  CO_Sett_amt:string=''
  CO_Sale_net_amt:string=''


  async GetCustomerOutStanding(fd:any,td:any,SctId:any){
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
      message: 'Loading...', // Optional: Custom message
      spinner: 'dots', // Optional: Choose a spinner
      // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
    });
    await loading.present();
    this.repser.GetCustomerOutStanding(fd,td,SctId).subscribe((data:any)=>{
      loading.dismiss()
      console.log(data);
      
      // this.comser.dismissLoading();
      if(data.Status==200)
      {


        // "SALE_NET_AMT": 42.015,
        //     "SETTLED_AMT": 32.57,
        //     "BALANCE_AMT": 9.445
        if(data.Data.length>0)
        {

          this.CO_Bal_Amt = data.Data[0].BALANCE_AMT
          this.CO_Sett_amt = data.Data[0].SETTLED_AMT
          this.CO_Sale_net_amt = data.Data[0].SALE_NET_AMT
        }
        else
        {

          this.CO_Bal_Amt = ''
          this.CO_Sett_amt = ''
          this.CO_Sale_net_amt = ''

        }

   
        
      }
      else
      {
        Swal.fire(data.Message,'','error')
        // console.log('ddd');
        // this.router.navigate(['login'])
        // localStorage.removeItem('type')
        
      }
    },
  (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
  }

  CO_Customer_report_List:any[]=[]
  // CO_Customer_collection_report_List:any[]=[]
  // CO_Customer_Balance_report_List:any[]=[]

  async GetCustomerSales(fd:any,td:any,sctid:any){
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
      message: 'Loading...', // Optional: Custom message
      spinner: 'dots', // Optional: Choose a spinner
      // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
    });
    await loading.present();
    this.repser.GetCustomerSales(fd,td,sctid).subscribe((data:any)=>{
      loading.dismiss()
      console.log(data);
      
      // this.comser.dismissLoading();
      if(data.Status==200)
      {


        
        this.CO_Customer_report_List=data.Data

   
        
      }
      else
      {
        Swal.fire(data.Message,'','error')
        // console.log('ddd');
        // this.router.navigate(['login'])
        // localStorage.removeItem('type')
        
      }
    },
  (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
  }

  async GetCustomerCollection(fd:any,td:any,sctid:any){
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
      message: 'Loading...', // Optional: Custom message
      spinner: 'dots', // Optional: Choose a spinner
      // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
    });
    await loading.present();
    this.repser.GetCustomerCollection(fd,td,sctid).subscribe((data:any)=>{
      loading.dismiss()
      console.log(data);
      
      // this.comser.dismissLoading();
      if(data.Status==200)
      {



        
        this.CO_Customer_report_List=data.Data

   
        
      }
      else
      {
        Swal.fire(data.Message,'','error')
        // console.log('ddd');
        // this.router.navigate(['login'])
        // localStorage.removeItem('type')
        
      }
    },
  (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
  }

  async GetCustomerBalance(fd:any,td:any,sctid:any){
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
      message: 'Loading...', // Optional: Custom message
      spinner: 'dots', // Optional: Choose a spinner
      // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
    });
    await loading.present();
    this.repser.GetCustomerBalance(fd,td,sctid).subscribe((data:any)=>{
      loading.dismiss()
      console.log(data);
      
      // this.comser.dismissLoading();
      if(data.Status==200)
      {


        
        this.CO_Customer_report_List=data.Data

   
        
      }
      else
      {
        Swal.fire(data.Message,'','error')
        // console.log('ddd');
        // this.router.navigate(['login'])
        // localStorage.removeItem('type')
        
      }
    },
  (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
  }






  SO_Bal_Amt:string=''
  CO_Total_Purchases:string=''
  CO_Total_Payment :string=''


  async GetSupplierOutStanding(fd:any,td:any,SctId:any){
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
      message: 'Loading...', // Optional: Custom message
      spinner: 'dots', // Optional: Choose a spinner
      // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
    });
    await loading.present();
    this.repser.GetSupplierOutStanding(fd,td,SctId).subscribe((data:any)=>{
      loading.dismiss()
      console.log(data);
      
      // this.comser.dismissLoading();
      if(data.Status==200)
      {


        // "SALE_NET_AMT": 42.015,
        //     "SETTLED_AMT": 32.57,
        //     "BALANCE_AMT": 9.445
        if(data.Data.length>0)
        {

          this.SO_Bal_Amt = data.Data[0].TOTAL_BALANCE
          this.CO_Total_Purchases = data.Data[0].TOTAL_PURCHASE
          this.CO_Total_Payment = data.Data[0].TOTAL_PAYMENT
        }
        else
        {

          this.SO_Bal_Amt = ''
          this.CO_Total_Purchases = ''
          this.CO_Total_Payment = ''

        }

   
        
      }
      else
      {
        Swal.fire(data.Message,'','error')
        // console.log('ddd');
        // this.router.navigate(['login'])
        // localStorage.removeItem('type')
        
      }
    },
  (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
  }

  SO_Supplier_report_List:any[]=[]
  // CO_Customer_collection_report_List:any[]=[]
  // CO_Customer_Balance_report_List:any[]=[]

  async GetSupplierPayment(fd:any,td:any,sctid:any){
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
      message: 'Loading...', // Optional: Custom message
      spinner: 'dots', // Optional: Choose a spinner
      // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
    });
    await loading.present();
    this.repser.GetSupplierPayment(fd,td,sctid).subscribe((data:any)=>{
      loading.dismiss()
      console.log(data);
      
      // this.comser.dismissLoading();
      if(data.Status==200)
      {


        
        this.SO_Supplier_report_List=data.Data

   
        
      }
      else
      {
        Swal.fire(data.Message,'','error')
        // console.log('ddd');
        // this.router.navigate(['login'])
        // localStorage.removeItem('type')
        
      }
    },
  (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
  }

  async GetSupplierPurchases(fd:any,td:any,sctid:any){
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
      message: 'Loading...', // Optional: Custom message
      spinner: 'dots', // Optional: Choose a spinner
      // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
    });
    await loading.present();
    this.repser.GetSupplierPurchases(fd,td,sctid).subscribe((data:any)=>{
      loading.dismiss()
      console.log(data);
      
      // this.comser.dismissLoading();
      if(data.Status==200)
      {



        
        this.SO_Supplier_report_List=data.Data

   
        
      }
      else
      {
        Swal.fire(data.Message,'','error')
        // console.log('ddd');
        // this.router.navigate(['login'])
        // localStorage.removeItem('type')
        
      }
    },
  (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
  }

  async GetSupplierBalance(fd:any,td:any,sctid:any){
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
      message: 'Loading...', // Optional: Custom message
      spinner: 'dots', // Optional: Choose a spinner
      // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
    });
    await loading.present();
    this.repser.GetSupplierBalance(fd,td,sctid).subscribe((data:any)=>{
      loading.dismiss()
      console.log(data);
      
      // this.comser.dismissLoading();
      if(data.Status==200)
      {


        
        this.SO_Supplier_report_List=data.Data

   
        
      }
      else
      {
        Swal.fire(data.Message,'','error')
        // console.log('ddd');
        // this.router.navigate(['login'])
        // localStorage.removeItem('type')
        
      }
    },
  (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
  }

PR_TOTAL_SALE_PR:string=''
PR_TOTAL_SALE_SR:string=''
PR_GROSS_PROFIT:string=''
PR_NET_PROFIT:string=''
PR_PROFIT_PER:string=''
PR_TAX_AMT:string=''

ST_STOCK_SR  :string=''
ST_STOCK_PR  :string=''
ST_GROSS_MARGIN  :string=''
ST_TAX_AMT  :string=''
ST_NET_MARGIN  :string=''
ST_MARGIN_PER  :string=''

  SA_SALE_GROSS:string=''
  SA_SALE_DISC_AMT:string=''
  SA_SALE_TOT_TAX:string=''
  SA_SALE_NET_AMT:number=0
  SA_SALE_ADT_CHG:string=''
  SA_SLRET_NET_AMT:string=''

  CA_CASH:string=''
  CA_CC_AMOUNT:string=''
  CA_CREDIT:number=0
  CA_WALLET_AMOUNT:string=''
  CA_CHQ_AMOUNT:string=''

  P_NET_AMT:string=''
  P_PURCH_TOT_AMT:string=''
  P_PURCH_TOT_DISC:string=''
  P_PURCH_OTHER_CHG:string=''
  P_PRET_NET_AMT:string=''
  P_PURCH_TOT_TAX:string=''
  P_ROUND_OFF:string=''
// P_NET_AMT:string=''

checkSign(input: string): 'positive' | 'negative' | 'zero' | 'invalid' {
  const num = parseFloat(input);

  if (isNaN(num)) {
    return 'invalid';
  }

  if (num > 0) {
    return 'positive';
  } else if (num < 0) {
    return 'negative';
  } else {
    return 'zero';
  }
}

}
