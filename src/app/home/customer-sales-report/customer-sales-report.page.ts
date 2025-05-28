import { DatePipe } from '@angular/common';
import { Component, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { ReportService } from 'src/services/report.service';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';

import * as FileSaver from 'file-saver';


@Component({
  selector: 'app-customer-sales-report',
  templateUrl: './customer-sales-report.page.html',
  styleUrls: ['./customer-sales-report.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomerSalesReportPage implements OnInit {
  Today:any
  Fromd:any
  Tod:any
  MonthSubtotals:any
  BillWiseReportData:any[]=[]
  TaskList:any[]=[]
    sctList:any[]=[]
  SctId:string =''
  constructor(private renderer: Renderer2,private loadingCtrl:LoadingController,private repser:ReportService,private datepipe:DatePipe) { 

    this.Today= this.datepipe.transform(new Date(),'yyyy-MM-dd')
    this.Fromd=this.Today
    this.Tod=this.Today
    this.GetDepartment()
    //this.getReport()
  }

  ngOnInit() {
  }
  getReport(){
    this.GetCustomerWiseMonthHEader(this.Fromd,this.Tod,this.SctId)
    // this.GetCustomerwise(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'))
    
   
    // this.GetBillwiseSale(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'))
  }
  async GetCustomerwise(fd: any, td: any) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading',
      message: 'Loading...',
      spinner: 'dots',
    });
    await loading.present();
  
    this.repser.GetCustomerwise(fd, td).subscribe(
      (data: any) => {
        loading.dismiss();
        console.log(data);
  
        if (data.Status === 200) {
          if (data.Data.length > 0) {
            this.BillWiseReportData = data.Data.map((item: any) => {
              return {
                CUST_NAME: item.CUST_NAME,
                CUST_ID: item.CUST_ID,
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

  openModal(items:any)
  {
    console.log(items);
    
    this.GetCustomerwiseDetails(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'),items.CUST_ID)

        
  }

  async GetCustomerwiseDetails(fd: any, td: any,item:any) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading',
      message: 'Loading...',
      spinner: 'dots',
    });
    await loading.present();
  
    this.repser.GetCustomerwiseDetails(fd, td,item).subscribe(
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


  async GetCustomerWiseMonthHEader(fd: any, td: any,SctId:any) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading',
      message: 'Loading...',
      spinner: 'dots',
    });
    await loading.present();

    this.repser.GetCustomerwiseMonth(fd, td,SctId).subscribe(
      (data: any) => {
        loading.dismiss();
        console.log(data);
        if(data.Status==200)
        {
          if(data.Data.length>0)
            {
          this.ColumnHeaders = data.Data.split(',')
          // Remove quotes and trim spaces from column headers
          this.ColumnHeaders = this.ColumnHeaders.map(col => col.replace(/'/g, '').trim());

          console.log(this.ColumnHeaders);
          // this.GetItemwiseMonthPivot(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'),data.Data)
              this.GetCustomerwiseMonthPivot(this.Fromd,this.Tod,data.Data,this.SctId)
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
        // this.TaskList=data.Data
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

  async GetCustomerwiseMonthPivot(fd: any, td: any,mon:any,SctId:any) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading',
      message: 'Loading...',
      spinner: 'dots',
    });
    await loading.present();

    this.repser.GetCustomerwiseMonthPivot(fd, td,mon,SctId).subscribe(
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
  (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
  }

  exportToPDF(): void {
    const doc = new jsPDF();
  
    const rawTitle =  'Customer Sales Report from ' +
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
    // console.log(this.ColumnHeaders);
    
    const col = [...this.ColumnHeaders]
    col.unshift('Customer')
    col.unshift('#')
  console.log(col);
  
    const columns = col
    // [
    //   '#','Item', 
    //   'UNIT_CODE', 'SALE_QTY', 'RTN_QTY', 'NET_SALE_QTY',
    //   'SALE_AMOUNT', 'RTN_NET_AMT', 'NET_AMT', 'PRICE'
    // ];
  
    const rows = this.BillWiseReportData.map((item, index) => [
      index + 1,
      
  item.CUST_NAME,
  ...this.ColumnHeaders.map((hed: any) => item["'"+hed+"'"] ?? '') // skip "#" and "Item"

    ]);
    
    console.log(rows);
    
  
    autoTable(doc, {
      head: [columns],
      body: rows,
      startY: currentY
    });
  
    const fileName = rawTitle.replace(/\s+/g, '_') + '.pdf';
    doc.save(fileName);
  }

  exportToExcel(): void {
    const rawTitle = 'Customer Sales Report from ' +
    this.datepipe.transform(this.Fromd, 'dd/MMM/yyyy') +
    ' to ' + this.datepipe.transform(this.Tod, 'dd/MMM/yyyy');
  
    // Map your data for export
    const exportData = this.BillWiseReportData.map((item, index) => [
      index + 1,
      item.CUST_NAME,
      ...this.ColumnHeaders.map((x:any)=>item["'"+x+"'"])
    ]);
    
    const header = ['Sl.No', 'Customer', ...this.ColumnHeaders.map((x:any)=>x)];
  
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
  

}
