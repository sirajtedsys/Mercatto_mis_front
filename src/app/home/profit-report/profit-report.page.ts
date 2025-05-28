import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { ReportService } from 'src/services/report.service';
// import { ReportService } from 'services/report.service';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-profit-report',
  templateUrl: './profit-report.page.html',
  styleUrls: ['./profit-report.page.scss'],
})
export class ProfitReportPage implements OnInit {

  Today:any
  Fromd:any
  Tod:any
  BillWiseReportData:any[]=[]
  sctList:any[]=[]
  SctId:string=''

  SALE_NET_SR:number= 0
  SLRET_NET_SR:number= 0
  SALE_NET_LC:number= 0
  SLRET_NET_LC:number= 0
  PROFIT:number= 0

  constructor(private datepipe:DatePipe,private loadingCtrl:LoadingController,private repser:ReportService)
   { 

    this.Today= this.datepipe.transform(new Date(),'yyyy-MM-dd')
    this.Fromd=this.Today
    this.Tod=this.Today
    this.GetDepartment()
   }

  ngOnInit() {
  }


  
  getReport(){
    console.log(this.SctId)
        // this.GetItemwise(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'))
        // this.GetProfitReport(this.Fromd,this.Tod,this.SctId)
       this.GetProfitReport(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'),this.SctId)
        // this.GetBillwiseSale(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'))
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


  async GetProfitReport(fd: any, td: any,SctId :any) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading',
      message: 'Loading...',
      spinner: 'dots',
    });
    await loading.present();

    this.repser.GetProfitMarginLC(fd, td,SctId).subscribe(
      (data: any) => {
        loading.dismiss();
        console.log(data);
        if(data.Status==200)
        {
          if(data.Data.length>0)
          {
            this.SALE_NET_SR= data.Data[0].SALE_NET_SR
            this.SLRET_NET_SR= data.Data[0].SALE_NET_LC
            this. SALE_NET_LC= data.Data[0].SALE_NET_LC
            this.SLRET_NET_LC= data.Data[0].SLRET_NET_LC
            this. PROFIT= data.Data[0].PROFIT
          }
          else
          {
            this.SALE_NET_SR= 0
            this.SLRET_NET_SR= 0
            this. SALE_NET_LC=0
            this.SLRET_NET_LC= 0
            this. PROFIT= 0
          }
        }
        else
        {
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

  exportToExcel(): void {
    const rawTitle = 'Profit LC Report from ' +
      this.datepipe.transform(this.Fromd, 'dd/MMM/yyyy') +
      ' to ' + this.datepipe.transform(this.Tod, 'dd/MMM/yyyy');
  
    // Prepare summary values
    const SALE_NET_SR = this.SALE_NET_SR ?? '0';
    const SLRET_NET_SR = this.SLRET_NET_SR ?? '0';
    const SALE_NET_LC = this.SALE_NET_LC ?? '0';
    const SLRET_NET_LC = this.SLRET_NET_LC ?? '0';
    const PROFIT = this.PROFIT ?? '0';

    
    const totinc = SALE_NET_SR - SLRET_NET_SR
    const totexp = SALE_NET_LC - SLRET_NET_LC
  
    // Summary block rows (you can tweak text or order)
    const summaryBlock = [
      ['Direct Income'],
      ['Total Income (SalesRate)', totinc],
      ['Total Sales (SalesRate)', SALE_NET_SR],
      ['Total Sales Return (SalesRate)', SLRET_NET_SR],
      [''],
      ['Direct Expenses'],
      ['Total Expenses (LC)',totexp],
      ['Total Sales (LC)', SALE_NET_LC],
      ['Total Sales Return (LC)', SLRET_NET_LC],
      [''],
      ['Profit (LC)', PROFIT]
    ];
  
    // Data table
  
  
    // Combine all into a final sheet
    const sheetData: any[][] = [
      [rawTitle],
      [''],
      ...summaryBlock,
      ['']
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
  

  exportToPDF(): void {
    const doc = new jsPDF();
  
    // Report Title
    const rawTitle = 'Profit LC Report from ' +
      this.datepipe.transform(this.Fromd, 'dd/MMM/yyyy') +
      ' to ' + this.datepipe.transform(this.Tod, 'dd/MMM/yyyy');
  
    const splitTitle = doc.splitTextToSize(rawTitle, 180);
    doc.setFontSize(16);
    let currentY = 15;
    splitTitle.forEach((line: string) => {
      const textWidth = doc.getTextWidth(line);
      const pageWidth = doc.internal.pageSize.getWidth();
      const x = (pageWidth - textWidth) / 2;
      doc.text(line, x, currentY);
      currentY += 7;
    });
  
    // Spacing before table
    currentY += 5;
  
    const SALE_NET_SR = this.SALE_NET_SR ?? '0';
    const SLRET_NET_SR = this.SLRET_NET_SR ?? '0';
    const SALE_NET_LC = this.SALE_NET_LC ?? '0'; 
    const SLRET_NET_LC = this.SLRET_NET_LC ?? '0';
    const PROFIT = this.PROFIT ?? '0';
    const totinc = SALE_NET_SR - SLRET_NET_SR
    const totexp = SALE_NET_LC - SLRET_NET_LC
    // Prepare rows
    const body: any[] = [
    
    
      [{ content: 'Direct Income', colSpan: 2, styles: { halign: 'left', fontStyle: 'bold' as const } }],
      ['Total Income (SalesRate)', totinc.toFixed(3)],
      ['Total Sales (SalesRate)', SALE_NET_SR.toFixed(3).toString()],
      ['Total Sales Return (SalesRate)', SLRET_NET_SR.toFixed(3).toString()],
    
      [{ content: 'Direct Expenses', colSpan: 2, styles: { halign: 'left', fontStyle: 'bold' as const } }],
      ['Total Expenses (LC)', totexp.toFixed(3)],
      ['Total Sales (LC)', SALE_NET_LC.toFixed(3).toString()],
      ['Total Sales Return (LC)', SLRET_NET_LC.toFixed(3).toString()],
    
      [
        { content: 'Profit (LC)', styles: { fontStyle: 'bold' as const } },
        PROFIT.toFixed(3).toString()
      ]
    ];
    
  
    // Draw table
    autoTable(doc, {
      body,
      startY: currentY,
      theme: 'grid',
      styles: { fontSize: 11 },
      columnStyles: {
        0: { cellWidth: 80 },
        1: { cellWidth: 80 }
      }
    });
  
    const fileName = rawTitle.replace(/\s+/g, '_') + '.pdf';
    doc.save(fileName);
  }
  
  

}
