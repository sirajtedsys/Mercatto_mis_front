import { DatePipe } from '@angular/common';
import { Component, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ReportService } from 'src/services/report.service';
import { CommonService } from 'src/services/common.service';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';

import * as FileSaver from 'file-saver';
//import { saveAs } from 'file-saver';

@Component({
  selector: 'app-creditbill-report',
  templateUrl: './creditbill-report.page.html',
  styleUrls: ['./creditbill-report.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreditbillReportPage implements OnInit {
  Today:any
  Fromd:any
  Tod:any
  CustId:string =''
  MonthSubtotals:any
  BillWiseReportData:any[]=[]
  TaskList:any[]=[]
   CustomerList:any[]=[]
  BillWiseReportDatafilter:any[]=[]
 // CustomerList:any[]=[]
  CurrentCustomer:number=0
  SelectedStatus:string='Pending';
  constructor(private renderer: Renderer2,private loadingCtrl:LoadingController,
    private comser:CommonService,private repser:ReportService,private datepipe:DatePipe) { 

    this.Today= this.datepipe.transform(new Date(),'yyyy-MM-dd')
    this.Fromd=this.Today
    this.Tod=this.Today
    // this.CustId='1210000001'
    this.GetCustomer( this.Fromd, this.Tod)

  }

  ngOnInit() {
    
  }
 
  getReport(){
    this.GetCustomer(this.Fromd,this.Tod)
    this.GetCreditbill(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'),this.CustId)
    // this.GetBillwiseSale(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'))
  }
  getReportSettled(){
    this.GetCreditbillSettled(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'),this.CustId)
    // this.GetBillwiseSale(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'))
  }
  async GetCreditbill(fd: any, td: any,custid:any) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading',
      message: 'Loading...',
      spinner: 'dots',
    });
    await loading.present();
  
    this.repser.GetCreditbill(fd, td,custid).subscribe(
      (data: any) => {
        loading.dismiss();
        console.log(data);
  
        if (data.Status === 200) {
          if (data.Data.length > 0) {
            this.BillWiseReportData = data.Data.map((item: any) => {
              return {
                TRANS_TYPE: item.TRANS_TYPE,
                BILL_NO: item.BILL_NO,
                BILL_DATE: item.BILL_DATE,
                SALE_CUST_NAME: item.SALE_CUST_NAME,
                CUST_ID: item.CUST_ID,
                BILL_AMT: item.BILL_AMT,
                SETTLED_AMT: item.SETTLED_AMT,
                BALC_AMT: item.BALC_AMT,
                SCT_NAME: item.SCT_NAME,
                SALE_ID: item.SALE_ID,
                
              };
            });

            this.BillWiseReportDatafilter = data.Data.map((item: any) => {
              return {
                TRANS_TYPE: item.TRANS_TYPE,
                BILL_NO: item.BILL_NO,
                BILL_DATE: item.BILL_DATE,
                SALE_CUST_NAME: item.SALE_CUST_NAME,
                CUST_ID: item.CUST_ID,
                BILL_AMT: item.BILL_AMT,
                SETTLED_AMT: item.SETTLED_AMT,
                BALC_AMT: item.BALC_AMT,
                SCT_NAME: item.SCT_NAME,
                SALE_ID: item.SALE_ID,
                
              };
            });
            
            // Calculate subtotals
          } else {
            this.BillWiseReportData = [];
            this.BillWiseReportDatafilter=[]
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
  
  
  async GetCreditbillSettled(fd: any, td: any,custid:any) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading',
      message: 'Loading...',
      spinner: 'dots',
    });
    await loading.present();
  
    this.repser.GetCreditbillSettled(fd, td,custid).subscribe(
      (data: any) => {
        loading.dismiss();
        console.log(data);
  
        if (data.Status === 200) {
          if (data.Data.length > 0) {
            this.BillWiseReportData = data.Data.map((item: any) => {
              return {
                TRANS_TYPE: item.TRANS_TYPE,
                BILL_NO: item.BILL_NO,
                BILL_DATE: item.TRANS_BILL_DATE,
                SALE_CUST_NAME: item.CUSTOMER_NAME,
                CUST_ID: item.CUST_ID,
                BILL_AMT: item.BILL_AMT,
                SETTLED_AMT: item.SETTLED_AMT,
                BALC_AMT: item.BALC_AMT,
                SCT_NAME: item.SCT_NAME,
                SALE_ID: item.SALE_ID,
                
              };
            });
            
            // Calculate subtotals
          } else {
            this.BillWiseReportData = [];
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
customerSearchText: string = '';
// CustomerList: any[] = []; // Original customer list
filteredCustomerList: any[] = [];
showDropdown: boolean = false;
searchHistory: string[] = [];
filterCustomers() {
  const search = this.customerSearchText.trim().toLowerCase();
  console.log(search);
  console.log(this.CustomerList,this.filteredCustomerList);
  
  
  if(search=='')
  {

    this.filteredCustomerList=this.CustomerList
  }
  else
  {

    this.filteredCustomerList = this.CustomerList
    .filter(c => c.CUST_NAME.toString().toLowerCase().includes(search))
    .sort((a, b) => a.CUST_NAME.toString().localeCompare(b.CUST_NAME));
  }
  
}
selectCustomer(customer: any) {
  console.log(customer);

  
  this.customerSearchText=customer.CUST_NAME
  this.CustId=customer.CUST_ID
  this.SelectedCustName=customer.CUST_NAME
  
}



capitalizeFirstLetter(name: string): string {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}


 async GetCustomer(fromDate:any,toDate:any){
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading',
      message: 'Loading...',
      spinner: 'dots',
    });
    await loading.present();
    this.repser.GetCreditbill(this.datepipe.transform(fromDate,'dd/MM/yyyy'),this.datepipe.transform(toDate,'dd/MM/yyyy'),'').subscribe((data:any)=>{
      loading.dismiss()
      console.log(data);
      
      // this.comser.dismissLoading();
      if(data.Status==200)
      {
        if(data.Data.length>0)
        {
          console.log(data);
          // this.CustId=data.Data[0].CUST_ID
        //  this.GetAllUserRightsTab(data.MenuGroupId)
        for(let i=0;i<data.Data.length;i++)
        {
          if(!this.CustomerList.some((x:any)=>x.CUST_ID==data.Data[i].CUST_ID))
          {
            let obj = {CUST_ID:data.Data[i].CUST_ID,CUST_NAME:data.Data[i].SALE_CUST_NAME}
            this.CustomerList.push(obj)
            this.filteredCustomerList.push(obj)

          }
        
        }

          //console.log(this.CustomerList,this.filteredCustomerList);
          // this.customerSearchText
          
          
        }
        else
        {
          this.CustomerList=[]
         // this.filteredCustomerList=[]
          this.BillWiseReportData = [];
          
        }
 
      }
      else
      {
          this.CustomerList=[]
       // this.getReport()
      }
    },
  (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })                               
}
 OnDateChange () {
    if (this.Fromd && this.Tod) {
      this.GetCustomer(this.Fromd, this.Tod);
    }
  }
 getTotal(key: string): number {
  if (!this.BillWiseReportData || this.BillWiseReportData.length === 0) return 0;

  return this.BillWiseReportData
    .filter(item => item[key] != null)
    .reduce((acc, item) => acc + parseFloat(item[key]), 0);
}


  onStatusChange(event: any): void {
    const selectedValue =event.target.value;
    if (selectedValue === 'Pending') {
      // this.SelectedStatus='Pending'
      // this.getReport();
      this.BillWiseReportData = this.BillWiseReportDatafilter.filter((x:any)=>x.SETTLED_AMT != x.BILL_AMT)
    }
    else if (selectedValue === 'Settled') {
      //  this.SelectedStatus='Settled'
      // this.getReportSettled();
      
      this.BillWiseReportData = this.BillWiseReportDatafilter.filter((x:any)=>x.SETTLED_AMT == x.BILL_AMT)
    }
    else
    {
        this.BillWiseReportData = this.BillWiseReportDatafilter
    }
  }

  // OnStatusChange(event:any)
  // {
  //   if(event.target.value == 'Settled')
  //   {

  //   }
  // }



  SelectedCustName:string=''

  exportToPDF(): void {
    const doc = new jsPDF();
  
    const rawTitle = 'Credit bill Settlement Report '+    
    (this.SelectedCustName === ''
      ? ''
      :'of ' +this.SelectedCustName )+ ' from ' +
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
      '#', 'Bill No', 'Bill Date', 'Customer', 'Trans Type', 'Bill Amt', 'Settled Amt', ...(this.SelectedStatus === 'Pending' ? ['Balance'] : [])
    ];
  
    const data = this.BillWiseReportData.map((item, index) => {
      const row = [
        index + 1,
        item.BILL_NO,
        this.datepipe.transform(item.BILL_DATE, 'dd-MMM-yyyy'),
        item.SALE_CUST_NAME,
        item.TRANS_TYPE,
        item.BILL_AMT,
        item.SETTLED_AMT
      ];
      if (this.SelectedStatus === 'Pending') {
        row.push(item.BALC_AMT);
      }
      return row;
    });
  
    autoTable(doc, {
      head: [columns],
      body: data,
      startY: currentY
    });
  
    const fileName = rawTitle.replace(/\s+/g, '_') + '.pdf';
    doc.save(fileName);
  }


  // import * as XLSX from 'xlsx';
  // import * as FileSaver from 'file-saver';
  
  exportToExcel(): void {
    const rawTitle = 'Credit bill Settlement Report ' +    
      (this.SelectedCustName === '' ? '' : 'of ' + this.SelectedCustName) + 
      ' from ' + this.datepipe.transform(this.Fromd, 'dd/MMM/yyyy') +
      ' to ' + this.datepipe.transform(this.Tod, 'dd/MMM/yyyy');
  
    // Map your data for export
    const exportData = this.BillWiseReportData.map((item, index) => ({
      'Sl.No': index + 1,
      'Bill No': item.BILL_NO,
      'Bill Date': item.BILL_DATE ? new Date(item.BILL_DATE) : '',
      'Customer': item.SALE_CUST_NAME,
      'Transaction Type': item.TRANS_TYPE,
      'Bill Amount': item.BILL_AMT,
      'Settled Amount': item.SETTLED_AMT,
      'Balance': item.BALC_AMT
    }));
  
    // Convert JSON to array of arrays
    const header = Object.keys(exportData[0]);
    const dataRows = exportData.map(obj => Object.values(obj));
  
    // Compose final sheet data
    const sheetData: any[][] = [
      [rawTitle],        // Title row
      [],                // Empty row (optional)
      header,            // Header row
      ...dataRows        // Data rows
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
  
}

//function saveAs(blob: Blob, arg1: string) {
  //throw new Error('Function not implemented.');
//}
 