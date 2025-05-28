import { DatePipe } from '@angular/common';
import { Component, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ReportService } from 'src/services/report.service';
//import { CommonService } from 'src/services/common.service';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
//import * as FileSaver from 'file-saver';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-oneitem-all-party-report',
  templateUrl: './oneitem-all-party-report.page.html',
  styleUrls: ['./oneitem-all-party-report.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OneitemAllPartyReportPage implements OnInit {
  Today:any
  Fromd:any
  Tod:any
  ItemId:string =''
  MonthSubtotals:any
  BillWiseReportData:any[]=[]
  TaskList:any[]=[]
  ItemList:any[]=[]
  sctList:any[]=[]
  SctId:string =''
  CurrentItem:number=0
  constructor(private loadingCtrl:LoadingController,
    private repser:ReportService,private datepipe:DatePipe) { 

    this.Today= this.datepipe.transform(new Date(),'yyyy-MM-dd')
    this.Fromd=this.Today
    this.Tod=this.Today
    // this.ItemId='1210000001'
    //this.GetItem(this.Fromd, this.Tod);
    this.GetDepartment();

  }

  ngOnInit() {
    
  
  }
  getReport(){
   
    this.Getoneitemallparty(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'),
    this.ItemId,this.SctId)
    
   
    // this.GetBillwiseSale(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'))
  }
  async Getoneitemallparty(fd:any,td:any,itemid:any,sctid:any) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading',
      message: 'Loading...',
      spinner: 'dots',
    });
    await loading.present();
  
    this.repser.Getoneitemallparty(fd,td,itemid,sctid).subscribe(
      (data: any) => {
        loading.dismiss();
        console.log(data);
  
        if (data.Status === 200) {
          if (data.Data.length > 0) {
            this.BillWiseReportData = data.Data.map((item: any) => {
              return {
                CUST_NAME: item.CUST_NAME,
                CUST_ID: item.CUST_ID,
                ITEM_ID: item.ITEM_ID,
                ITEM_NAME: item.ITEM_NAME,
                UNIT_CODE: item.UNIT_CODE,
                SALE_QTY: item.SALE_QTY,
                RTN_QTY: item.RTN_QTY,
                NET_SALE_QTY: item.NET_SALE_QTY,
                SALE_AMOUNT: item.SALE_AMOUNT,
                RTN_NET_AMT: item.RTN_NET_AMT,
                NET_AMT: item.NET_AMT,
                PRICE: item.PRICE
              };
            });
            
           
            // Calculate subtotals
           
            
          } else {
            this.BillWiseReportData =[]
            // Swal.fire(data.Message, '', 'error');
          }
        } else {
          Swal.fire(data.Message, '', 'error');
        }
      },
      () => {
        loading.dismiss();
        // Optionally show error
        Swal.fire('Something went wrong!', '', 'error');
      }
    );
  }


onDateChange() {
   if (this.Fromd && this.Tod) {
    this.GetItem(this.Fromd, this.Tod);
   }
}
exportToExcel(): void {
  const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.BillWiseReportData);
  const workbook: XLSX.WorkBook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
  const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const blobData: Blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
  //FileSaver.saveAs(blobData, 'OneItemAllPartyReport.xlsx');
}

exportToPDF(): void {
  const doc = new jsPDF();
  const columns = [
    'CUST_NAME', 'CUST_ID', 'ITEM_ID', 'ITEM_NAME',
    'UNIT_CODE', 'SALE_QTY', 'RTN_QTY', 'NET_SALE_QTY',
    'SALE_AMOUNT', 'RTN_NET_AMT', 'NET_AMT', 'PRICE'
  ];

  const rows = this.BillWiseReportData.map(item => [
    item.CUST_NAME,
    item.CUST_ID,
    item.ITEM_ID,
    item.ITEM_NAME,
    item.UNIT_CODE,
    item.SALE_QTY,
    item.RTN_QTY,
    item.NET_SALE_QTY,
    item.SALE_AMOUNT,
    item.RTN_NET_AMT,
    item.NET_AMT,
    item.PRICE
  ]);

  autoTable(doc, {
    head: [columns],
    body: rows
  });

  doc.save('OneItemAllPartyReport.pdf');
}


  openModal(items:any)
  {
    console.log(items);
    
    this.GetSalesItemDetails(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'),items.ITEM_ID)

        
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
        this.TaskList=data.Data
      },
      () => {
        loading.dismiss();
        // Optionally show error
        Swal.fire('Something went wrong!', '', 'error');
      }
    );
  }

  // async GetCustomer(){
  //   const loading = await this.loadingCtrl.create({
  //     cssClass: 'custom-loading',
  //     message: 'Loading...',
  //     spinner: 'dots',
  //   });
  //   await loading.present();
  //   this.repser.GetCustomer().subscribe((data:any)=>{
  //     loading.dismiss()
  //     console.log(data);
      
  //     // this.comser.dismissLoading();
  //     if(data.Status==200)
  //     {
  //       console.log(data);
  //         this.CustId=data.Data[0].CUST_ID

  //     //  this.GetAllUserRightsTab(data.MenuGroupId)
  //     this.CustomerList=data.Data

  //     this.getReport()
 
  //     }
  //     else
  //     {
  //         this.CustomerList=[]
        
  //     }
  //   },
  // (error:any)=>{
  //   // this.comser.dismissLoading()
  //   loading.dismiss()
  // })
  // }
  async GetItem(Fromd :any, Tod:any){
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading',
      message: 'Loading...',
      spinner: 'dots',
    });
    await loading.present();
    this.repser.GetItem(Fromd, Tod).subscribe((data:any)=>{
      loading.dismiss()
      console.log(data);
      
      // this.comser.dismissLoading();
      if(data.Status==200)
      {
        if(data.Data.length>0)
        {
         console.log(data);
         this.ItemId=data.Data[0].ITEM_ID
         this.ItemList=data.Data
        this.getReport()
        }
        else
        {
          this.ItemList=[]
          this.BillWiseReportData =[]

        }
 
      }
      else
      {
          this.ItemList=[]
        
      }
    },
  ()=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
  }

 


  async GetDepartment()
  {
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
          //this.getReport()
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
  ()=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
  }
}
 


