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
  selector: 'app-item-sales',
  templateUrl: './item-sales.page.html',
  styleUrls: ['./item-sales.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ItemSalesPage implements OnInit {
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
console.log(this.SctId)
    // this.GetItemwise(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'))
    this.GetItemWiseMonthHEader(this.Fromd,this.Tod,this.SctId)
  //  this.GetItemWiseMonthHEader(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'))
    // this.GetBillwiseSale(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'))
  }
  // async GetItemwise(fd:any,td:any){
  //   const loading = await this.loadingCtrl.create({
  //     cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
  //     message: 'Loading...', // Optional: Custom message
  //     spinner: 'dots', // Optional: Choose a spinner
  //     // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
  //   });
  //   await loading.present();
  //   this.repser.GetItemwise(fd,td).subscribe((data:any)=>{
  //     loading.dismiss()
  //     console.log(data);

  //     // this.comser.dismissLoading();
  //     if(data.Status==200)
  //     {

  //       if(data.Data.length>0)
  //       {
  //         // this.BillWiseReportData=data.Data
  //         this.BillWiseReportData = this.BillWiseReportData.map(item => {
  //           return {
  //             ITEM_NAME: item.ITEM_NAME,
  //             JAN: item["'JAN'"],
  //             FEB: item["'FEB'"],
  //             MAR: item["'MAR'"],
  //             APR: item["'APR'"],
  //             MAY: item["'MAY'"],
  //             JUN: item["'JUN'"],
  //             JUL: item["'JUL'"],
  //             AUG: item["'AUG'"],
  //             SEP: item["'SEP'"],
  //             OCT: item["'OCT'"],
  //             NOV: item["'NOV'"],
  //             DEC: item["'DEC'"],
  //           };
  //         });

  //       }
  //       else
  //       {
  //         Swal.fire(data.Message,'','error')
  //       }

  //     //  this.GetAllUserRightsTab(data.MenuGroupId)
  //     // "COMP_NAME": "Company",
  //     //   "SALE_GROSS": 95.3,
  //     //   "SALE_TOT_TAX": 0.0,
  //     //   "SALE_DISC_AMT": 0.0,
  //     //   "SALE_ADT_CHG": -3.0,
  //     //   "CASH": 12.3,
  //     //   "CREDIT": 60.0,
  //     //   "CC_AMOUNT": 0.0,
  //     //   "CHQ_AMOUNT": 0.0,
  //     //   "WALLET_AMOUNT": 0.0,
  //     //   "SALE_NET_AMT": 72.3,
  //     //   "SLRET_NET_AMT": -20.0

  //     }
  //     else
  //     {
  //       Swal.fire(data.Message,'','error')
  //       // console.log('ddd');
  //       // this.router.navigate(['login'])
  //       // localStorage.removeItem('type')

  //     }
  //   },
  // (error:any)=>{
  //   // this.comser.dismissLoading()
  //   loading.dismiss()
  // })
  // }
  // async GetItemwise(fd: any, td: any) {
  //   const loading = await this.loadingCtrl.create({
  //     cssClass: 'custom-loading',
  //     message: 'Loading...',
  //     spinner: 'dots',
  //   });
  //   await loading.present();

  //   this.repser.GetItemwise(fd, td).subscribe(
  //     (data: any) => {
  //       loading.dismiss();
  //       console.log(data);

  //       if (data.Status === 200) {
  //         if (data.Data.length > 0) {
  //           this.BillWiseReportData = data.Data.map((item: any) => {
  //             return {
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
  //         } else {
  //           Swal.fire(data.Message, '', 'error');
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
  async GetItemwise(fd: any, td: any) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading',
      message: 'Loading...',
      spinner: 'dots',
    });
    await loading.present();

    this.repser.GetItemwise(fd, td).subscribe(
      (data: any) => {
        loading.dismiss();
        console.log(data);

        if (data.Status === 200) {
          if (data.Data.length > 0) {
            this.BillWiseReportData = data.Data.map((item: any) => {
              return {
                ITEM_NAME: item.ITEM_NAME,
                ITEM_ID: item.ITEM_ID,
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

    this.GetItemwiseDetails(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'),items.ITEM_ID)


  }


  onMonthselect(event:any)
  {
    let val  = event.target.value
  }


  async GetItemwiseDetails(fd: any, td: any,item:any) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading',
      message: 'Loading...',
      spinner: 'dots',
    });
    await loading.present();

    this.repser.GetItemwiseDetails(fd, td,item).subscribe(
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

  async GetItemwiseMonthPivot(fd: any, td: any,mon:any,SctId:any) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading',
      message: 'Loading...',
      spinner: 'dots',
    });
    await loading.present();

    this.repser.GetItemwiseMonthPivot(fd, td,mon,SctId).subscribe(
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

  async GetItemWiseMonthHEader(fd: any, td: any,SctId :any) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading',
      message: 'Loading...',
      spinner: 'dots',
    });
    await loading.present();

    this.repser.GetItemwiseMonth(fd, td,SctId).subscribe(
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
          console.log(this.SctId)
          // this.GetItemwiseMonthPivot(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'),data.Data)
              this.GetItemwiseMonthPivot(this.Fromd,this.Tod,data.Data,this.SctId)
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
  

  // Example usage:
  // const input = ["'JAN-25'", "'FEB-25'", "'MAR-25'", "'APR-25'"];
  // const output = removeSingleQuotes(input);

  // console.log(output); // ["JAN-25", "FEB-25", "MAR-25", "APR-25"]


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



  exportToPDF(): void {
    const doc = new jsPDF();
  
    const rawTitle =  'Item Sales Report from ' +
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
    col.unshift('Item')
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
      
  item.ITEM_NAME,
  ...this.ColumnHeaders.map((hed: any) => item["'"+hed+"'"] ?? '') // skip "#" and "Item"

    ]);
    
    console.log(rows);
    
  
    autoTable(doc, {
      head: [columns],
      body: rows,
      startY: currentY,
      styles: {
        lineColor: [0, 0, 0], // black
        lineWidth: 0.2,
        cellPadding: 3,
        halign: 'center',
        valign: 'middle'
      },
      headStyles: {
        fillColor: [230, 230, 230], // light gray background for header
        textColor: 0,
        fontStyle: 'bold',
        lineColor: [0, 0, 0],
        lineWidth: 0.2
      },
      bodyStyles: {
        lineColor: [0, 0, 0],
        lineWidth: 0.2
      },
      theme: 'grid' // ensures borders for all cells
    });
  
    const fileName = rawTitle.replace(/\s+/g, '_') + '.pdf';
    doc.save(fileName);
  }


  exportToExcel(): void {
 
    const rawTitle =  'Item Sales Report from ' +
        this.datepipe.transform(this.Fromd, 'dd/MMM/yyyy') +
        ' to ' + this.datepipe.transform(this.Tod, 'dd/MMM/yyyy'); 
  
    // Map your data for export
    const exportData = this.BillWiseReportData.map((item, index) => [
      index + 1,
      item.ITEM_NAME,
      ...this.ColumnHeaders.map((x:any)=>item["'"+x+"'"])
    ]);
    
    const header = ['Sl.No', 'Item', ...this.ColumnHeaders.map((x:any)=>x)];
  
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
