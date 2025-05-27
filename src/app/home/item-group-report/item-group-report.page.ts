import { DatePipe } from '@angular/common';
import { Component, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ReportService } from 'src/services/report.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-item-group-report',
  templateUrl: './item-group-report.page.html',
  styleUrls: ['./item-group-report.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ItemGroupReportPage implements OnInit {
 Today:any
  Fromd:any
  Tod:any
  MonthSubtotals:any
  BillWiseReportData:any[]=[]
  BillWiseReportData1:any[]=[]
  TaskList:any[]=[]
  TaskList1:any[]=[]
    sctList:any[]=[]
  SctId:string =''
  constructor(private renderer: Renderer2,private loadingCtrl:LoadingController, private repser:ReportService,private datepipe:DatePipe) {

    this.Today= this.datepipe.transform(new Date(),'yyyy-MM-dd')
    this.Fromd=this.Today
    this.Tod=this.Today
    this.GetDepartment()
    //this.getReport()
   }

  ngOnInit() {
  }

  getReport(){

    this.GetGroupWiseMonthHEader(this.Fromd,this.Tod,this.SctId)
   
    // this.GetItemGroupwise(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'))
    
   
    // this.GetBillwiseSale(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'))
  }
 
  async GetItemGroupwise(fd: any, td: any) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading',
      message: 'Loading...',
      spinner: 'dots',
    });
    await loading.present();
  
    this.repser.GetItemGroupwise(fd, td).subscribe(
      (data: any) => {
        loading.dismiss();
        console.log(data);
  
        if (data.Status === 200) {
          if (data.Data.length > 0) {
            this.BillWiseReportData = data.Data.map((item: any) => {
              return {
                ITEM_GROUP: item.ITEM_GROUP,
                ITGRP_ID: item.ITGRP_ID,
                JAN: item["'JAN'"],
                FEB: item["'FEB'"],
                MAR: item["'MAR'"],
                APR: item["'APR'"],
                MAY: item["'MAY'"],
                JUN: item["'JUN'"],
                JUL: item["'JUL'"],
                AUG: item["'AUG'"],
                SEP: item["'SEP'"],
                OCT: item["'OCT'"],
                NOV: item["'NOV'"],
                DEC: item["'DEC'"],
              };
            });
            
            // Calculate subtotals
            this.MonthSubtotals = {
              JAN: 0, FEB: 0, MAR: 0, APR: 0, MAY: 0, JUN: 0,
              JUL: 0, AUG: 0, SEP: 0, OCT: 0, NOV: 0, DEC: 0
            };
            
            for (let item of this.BillWiseReportData) {
              for (let month in this.MonthSubtotals) {
                this.MonthSubtotals[month] += item[month] || 0;
              }
            }
            
            
            // Calculate subtotals
           
            
          } else {
            // Swal.fire(data.Message, '', 'error');
          }
        } else {
          Swal.fire(data.Message, '', 'error');
        }
      },
      (error: any) => {
        loading.dismiss();
        // Optionally show error
        Swal.fire('Something went wrong!', '', 'error');
      }
    );
  }
  onSearch() {
  if (!this.Fromd || !this.Tod || !this.SctId) {
    Swal.fire('Please select From Date, To Date, and Branch.', '', 'warning');
    return;
  }

  //this.getReport(); // This will trigger the data fetch
}


  // async GetItemGroupwise1(fd: any, td: any,groupid:any) {
  //   const loading = await this.loadingCtrl.create({
  //     cssClass: 'custom-loading',
  //     message: 'Loading...',
  //     spinner: 'dots',
  //   });
  //   await loading.present();
  
  //   this.repser.GetItemGroupwise1(fd, td,groupid).subscribe(
  //     (data: any) => {
  //       loading.dismiss();
  //       console.log(data);
  
  //       if (data.Status === 200) {
  //         if (data.Data.length > 0) {
  //           this.BillWiseReportData1 = data.Data.map((item: any) => {
  //             return {
  //               ITEM_GROUP: item.ITEM_GROUP,
  //               ITEM_ID: item.ITGRP_ID,
  //               ITEM_NAME: item.ITEM_NAME,
  //               JAN: item["'JAN'"],
  //               FEB: item["'FEB'"],
  //               MAR: item["'MAR'"],
  //               APR: item["'APR'"],
  //               MAY: item["'MAY'"],
  //               JUN: item["'JUN'"],
  //               JUL: item["'JUL'"],
  //               AUG: item["'AUG'"],
  //               SEP: item["'SEP'"],
  //               OCT: item["'OCT'"],
  //               NOV: item["'NOV'"],
  //               DEC: item["'DEC'"],
  //             };
  //           });
            
  //           // Calculate subtotals
  //           // this.MonthSubtotals = {
  //           //   JAN: 0, FEB: 0, MAR: 0, APR: 0, MAY: 0, JUN: 0,
  //           //   JUL: 0, AUG: 0, SEP: 0, OCT: 0, NOV: 0, DEC: 0
  //           // };
            
  //           // for (let item of this.BillWiseReportData1) {
  //           //   for (let month in this.MonthSubtotals) {
  //           //     this.MonthSubtotals[month] += item[month] || 0;
  //           //   }
  //           // }
            
            
  //           // Calculate subtotals
           
            
  //         } else {
  //           // Swal.fire(data.Message, '', 'error');
  //         }
  //       } else {
  //         Swal.fire(data.Message, '', 'error');
  //       }
  //     },
  //     (error: any) => {
  //       loading.dismiss();
  //       // Optionally show error
  //       Swal.fire('Something went wrong!', '', 'error');
  //     }
  //   );
  // }
  
  openModal(items:any)
  {
    console.log(items);
    let value=this.ColumnHeadersORg.join(',')


    this.GetItemGroupwiseDetails(this.Fromd,this.Tod,items.ITGRP_ID,value)

        
  }
  openModal1(items:any)
  {
    console.log(items);
    
    this.GetSalesItemDetails(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'),items.ITEM_ID)

        
  }


  onMonthselect(event:any)
  {
    let val  = event.target.value
  }


  async GetItemGroupwiseDetails(fd: any, td: any,groupid:any,monthlst:any) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading',
      message: 'Loading...',
      spinner: 'dots',
    });
    await loading.present();
  
    this.repser.GetItemGroupwiseDetails(fd, td,groupid,monthlst).subscribe(
      (data: any) => {
        loading.dismiss();
        console.log(data);
        this.TaskList=data.Data
      },
      (error: any) => {
        loading.dismiss();
        // Optionally show error
        Swal.fire('Something went wrong!', '', 'error');
      }
    );
  }

  async GetSalesItemDetails(fd: any, td: any,itemid:any) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading',
      message: 'Loading...',
      spinner: 'dots',
    });
    await loading.present();
  
    this.repser.GetSalesItemDetails(fd, td,itemid).subscribe(
      (data: any) => {
        loading.dismiss();
        console.log(data);
        this.TaskList1=data.Data
      },
      (error: any) => {
        loading.dismiss();
        // Optionally show error
        Swal.fire('Something went wrong!', '', 'error');
      }
    );
  }
  ColumnHeadersORg:any[]=[]

  async GetGroupWiseMonthHEader(fd: any, td: any,SctId:any) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading',
      message: 'Loading...',
      spinner: 'dots',
    });
   await loading.present();

    this.repser.GetGroupwiseMonth(fd, td,SctId).subscribe(
      (data: any) => {
        loading.dismiss();
        console.log(data);
        if(data.Status==200)
        {
          if(data.Data.length>0)
            {
              this.ColumnHeaders = data.Data.split(',')
              this.ColumnHeadersORg = data.Data.split(',')
              // Remove quotes and trim spaces from column headers
             this.ColumnHeaders = this.ColumnHeaders.map(col => col.replace(/'/g, '').trim());
              console.log(this.ColumnHeaders);
                  this.GetGroupwiseMonthPivot(this.Fromd,this.Tod,data.Data,this.SctId)
                }
                else
                {
                  this.ColumnHeaders=[]
                  this.BillWiseReportData=[]
                }
              }
              else
              {
                this.ColumnHeaders=[]
                this.BillWiseReportData=[]
              }
      },
      (error: any) => {
        loading.dismiss();
        // Optionally show error
        Swal.fire('Something went wrong!', '', 'error');
      }
    );
  }

  ColumnHeaders:any[]=[]

  removeSingleQuotesFromString(str: string): string {
    return str.replace(/'/g, "");
  }

  getTotalForMonth(monthKey: string): number {
    let total = 0;
  
    for (const item of this.BillWiseReportData) {
      const value = item[monthKey];
      if (value != null && !isNaN(value)) {
        total += parseFloat(value);
      }
    }
      let t = Number(total.toFixed(3));
    return t;
  }

  getTotalForMonthGroup(monthKey: string): number {
    let total = 0;
  
    for (const item of this.TaskList) {
      const value = item[monthKey];
      if (value != null && !isNaN(value)) {
        total += parseFloat(value);
      }
    }
      let t = Number(total.toFixed(3));
    return t;
  }

  async GetGroupwiseMonthPivot(fd: any, td: any,mon:any,SctId:any) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading',
      message: 'Loading...',
      spinner: 'dots',
    });
    await loading.present();

    this.repser.GetGroupwiseMonthPivot(fd, td,mon,SctId).subscribe(
      (data: any) => {
        loading.dismiss();
        console.log(data);
        if(data.Status==200)
        {
          if(data.Data.length>0)
            {
            this.BillWiseReportData=data.Data
            }
          else
          {
           this.BillWiseReportData=[]
          }
        }
        // this.TaskList=data.Data
      },
      (error: any) => {
       loading.dismiss();
        // Optionally show error
        Swal.fire('Something went wrong!', '', 'error');
      }
    );
  }

  async GetDepartment(){
   const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading',
      message: 'Loading...',
      spinner: 'dots',
    });
    await loading.present();
    this.repser.GetDepartment().subscribe((data:any)=>{
      loading.dismiss()
      console.log(data);
      
      // this.comser.dismissLoading();
      if(data.Status==200)
      {
        if(data.Data.length>0)
        {
          console.log(data);
          // this.SctId=data.Data[0].SCT_ID
        //  this.GetAllUserRightsTab(data.MenuGroupId)
          this.sctList=data.Data
         // this.getReport()
        }
        else
        {
          this.sctList=[]
          this.BillWiseReportData = [];
        }
 
      }
      else
      {
          this.sctList=[]
        
      }
    },
  (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
  }

  
}