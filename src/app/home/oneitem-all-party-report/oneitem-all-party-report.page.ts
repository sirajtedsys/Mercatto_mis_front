import { DatePipe } from '@angular/common';
import { Component, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ReportService } from 'src/services/report.service';
//import { CommonService } from 'src/services/common.service';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
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
  ItemListDup:any[]=[]
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
 
 
  const rawTitle = this.SelectedItemName === ''
    ? 'One Item'
    : this.SelectedItemName + ' All Party Report from ' +
      this.datepipe.transform(this.Fromd, 'dd/MMM/yyyy') +
      ' to ' + this.datepipe.transform(this.Tod, 'dd/MMM/yyyy'); 

  // Map your data for export
  const exportData = this.BillWiseReportData.map((item, index) => [
    index + 1,
    item.ITEM_NAME,
    item.CUST_NAME,
    item.UNIT_CODE,
    item.SALE_QTY,
    item.RTN_QTY,
    item.NET_SALE_QTY,
    item.SALE_AMOUNT,
    item.RTN_NET_AMT,
    item.NET_AMT,
    item.PRICE

  ]);
  
  const header = ['Sl.No', 'Item Name','Customer Name','Unit Code','Sale Quantity','Return Quantity','Net Sale Quantity','Sale Amount','Return Net Amount','Net Amount','Price']

  // Convert JSON to array of arrays
  // const header = Object.keys(exportData[0]);
  // const dataRows = exportData.map(obj => Object.values(obj));

  // Compose final sheet data
  const sheetData: any[][] = [
    [rawTitle],        // Title row
    [],                // Empty row (optional)
    header,            // Header row
    ...exportData        // Data rows
  ];

  const worksheet: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(sheetData);
  const workbook: XLSX.WorkBook = {
    Sheets: { Report: worksheet },
    SheetNames: ['Report']
  };

  const excelBuffer: any = XLSX.write(workbook, {
    bookType: 'xlsx',
    type: 'array',
    cellDates: true
  });

  const data: Blob = new Blob([excelBuffer], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8',
  });

  const fileName = rawTitle.replace(/\s+/g, '_') + '.xlsx';
  FileSaver.saveAs(data, fileName);
}

// exportToPDF(): void {
//   const title = this.SelectedItemName==''?'One Item':this.SelectedItemName +  'All Party Report from' + this.datepipe.transform(this.Fromd,'dd/MMM/yyyy') + ' to ' + this.datepipe.transform(this.Fromd,'dd/MMM/yyyy') ;
//   const doc = new jsPDF();

//   // Add dynamic header
//   doc.setFontSize(16);
//   doc.text(title, 14, 15); // Dynamic title
//   doc.setFontSize(10);
//   doc.text(`Generated on: ${new Date().toLocaleString()}`, 14, 22); // Timestamp

//   const columns = [
//     'Customer', 'ITEM_NAME',
//     'UNIT_CODE', 'SALE_QTY', 'RTN_QTY', 'NET_SALE_QTY',
//     'SALE_AMOUNT', 'RTN_NET_AMT', 'NET_AMT', 'PRICE'
//   ];

//   const rows = this.BillWiseReportData.map(item => [
//     item.CUST_NAME,
//     item.ITEM_NAME,
//     item.UNIT_CODE,
//     item.SALE_QTY,
//     item.RTN_QTY,
//     item.NET_SALE_QTY,
//     item.SALE_AMOUNT,
//     item.RTN_NET_AMT,
//     item.NET_AMT,
//     item.PRICE
//   ]);

//   autoTable(doc, {
//     head: [columns],
//     body: rows,
//     startY: 28
//   });

//   // Save with dynamic filename (spaces replaced with underscores)
//   const filename = title.replace(/\s+/g, '_') + '.pdf';
//   doc.save(filename);
// }


exportToPDF(): void {
  const doc = new jsPDF();

  const rawTitle = this.SelectedItemName === ''
    ? 'One Item'
    : this.SelectedItemName + ' All Party Report from ' +
      this.datepipe.transform(this.Fromd, 'dd/MMM/yyyy') +
      ' to ' + this.datepipe.transform(this.Tod, 'dd/MMM/yyyy'); // fixed: was using Fromd twice

  const maxLineWidth = 180;
  const splitTitle = doc.splitTextToSize(rawTitle, maxLineWidth);

  doc.setFontSize(16);
  let currentY = 15;

  // Center-align each line
  splitTitle.forEach((line: string) => {
    const textWidth = doc.getTextWidth(line);
    const pageWidth = doc.internal.pageSize.getWidth();
    const x = (pageWidth - textWidth) / 2;
    doc.text(line, x, currentY);
    currentY += 7;
  });

  doc.setFontSize(10);
  // Optional timestamp:
  // doc.text(`Generated on: ${new Date().toLocaleString()}`, 14, currentY);
  // currentY += 8;

  const columns = [
    '#','Customer', 
    'UNIT_CODE', 'SALE_QTY', 'RTN_QTY', 'NET_SALE_QTY',
    'SALE_AMOUNT', 'RTN_NET_AMT', 'NET_AMT', 'PRICE'
  ];

  const rows = this.BillWiseReportData.map((item,index) => [
    index + 1,
    item.CUST_NAME,  
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
    body: rows,
    startY: currentY
  });

  const fileName = rawTitle.replace(/\s+/g, '_') + '.pdf';
  doc.save(fileName);
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
         this.ItemListDup=data.Data
       // this.getReport()
        }
        else
        {
          this.ItemList=[]
          // this.BillWiseReportData =[]

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
          this.SctId=data.Data[0].SCT_ID
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
  ()=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
  }




  showDropdown:boolean=false

  ItemSearchText:string=''
  SelectedItemName:string=''

  filterItems(event:any){
    const search = event.target.value.trim().toLowerCase();
    console.log(search);
    console.log(this.ItemList);
    
    if(search=='')
    {
  
      this.ItemList=this.ItemListDup
    }
    else
    {
  
      this.ItemList = this.ItemListDup
      .filter(c => c.ITEM_NAME.toString().toLowerCase().includes(search))
      .sort((a, b) => a.ITEM_NAME.toString().localeCompare(b.ITEM_NAME));
    }
  }
  selectItem(customer:any){

    this.ItemSearchText=customer.ITEM_NAME
    this.SelectedItemName=customer.ITEM_NAME
    this.ItemId=customer.ITEM_ID
  }
}
 


