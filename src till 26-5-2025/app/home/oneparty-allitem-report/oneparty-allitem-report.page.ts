import { DatePipe } from '@angular/common';
import { Component, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ReportService } from 'src/services/report.service';
import { CommonService } from 'src/services/common.service';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
//import * as FileSaver from 'file-saver';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-oneparty-allitem-report',
  templateUrl: './oneparty-allitem-report.page.html',
  styleUrls: ['./oneparty-allitem-report.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OnepartyAllitemReportPage implements OnInit {

  Today:any
  Fromd:any
  Tod:any
  CustId:string=''
  MonthSubtotals:any
  BillWiseReportData:any[]=[]
  TaskList:any[]=[]
  CustomerList:any[]=[]
  CurrentCustomer:number=0
    sctList:any[]=[]
  SctId:string =''
  constructor(private renderer: Renderer2,private loadingCtrl:LoadingController,
    private comser:CommonService,private repser:ReportService,private datepipe:DatePipe) { 

    this.Today= this.datepipe.transform(new Date(),'yyyy-MM-dd')
    this.Fromd=this.Today
    this.Tod=this.Today
    this.GetDepartment()
    // this.CustId='1210000001'
   this.GetCustomer( this.Fromd, this.Tod)

  }

  ngOnInit() {
    
  
  }
  getReport(){
   
    this.Getonepartyallitemwise(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),
    this.datepipe.transform(this.Tod,'dd/MM/yyyy'),this.CustId,this.SctId)
    
   
    // this.GetBillwiseSale(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'))
  }
  async Getonepartyallitemwise(fd: any, td: any,custid:any,SctId:any) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading',
      message: 'Loading...',
      spinner: 'dots',
    });
    await loading.present();
  
    this.repser.Getonepartyallitemwise(fd, td,custid,SctId).subscribe(
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
        //Swal.fire('Something went wrong!', '', 'error');
        this.BillWiseReportData = [];
      }
    );
  }

  openModal(items:any)
  {
    console.log(items);
    
    this.GetonepartyallitemwiseDetails(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'),this.CustId,items.ITEM_ID,this.SctId)

        
  }

  async GetonepartyallitemwiseDetails(fd: any, td: any,custid:any,item:any,SctId:any) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading',
      message: 'Loading...',
      spinner: 'dots',
    });
    await loading.present();
  
    this.repser.GetOnepartyitemwiseDetails(fd, td,custid,item,SctId).subscribe(
      (data: any) => {
        loading.dismiss();
        console.log(data);
        this.TaskList=data.Data
      },
      (error: any) => {
        //loading.dismiss();
       // Optionally show error
        Swal.fire(error, '', 'error');
      }
    );
  }

  async GetCustomer(fromDate:any,toDate:any){
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading',
      message: 'Loading...',
      spinner: 'dots',
   });
    await loading.present();
    this.repser.GetCustomer(fromDate,toDate).subscribe((data:any)=>{
      loading.dismiss()
     console.log(data);
      
      // this.comser.dismissLoading();
      if(data.Status==200)
      {
        if(data.Data.length>0)
        {
          console.log(data);
          this.CustId=data.Data[0].CUST_ID
        //  this.GetAllUserRightsTab(data.MenuGroupId)
          this.CustomerList=data.Data
          this.filteredCustomerList=data.Data
          this.customerSearchText = data.Data[0].CUST_NAME
          this.getReport()
        }
        else
        {
          this.CustomerList=[]
          this.BillWiseReportData = [];
        }
 
      }
      else
      {
          this.CustomerList=[]
        
      }
    },
  (error:any)=>{
    /// this.comser.dismissLoading()
    loading.dismiss()
  })
  }

  onDateChange() {
    if (this.Fromd && this.Tod) {
      this.GetCustomer(this.Fromd, this.Tod);
    }
  }
customerSearchText: string = '';
customerList: any[] = []; // Original customer list
filteredCustomerList: any[] = [];
showDropdown: boolean = false;
searchHistory: string[] = [];
filterCustomers() {
  const search = this.customerSearchText.trim().toLowerCase();
  console.log(search);
  console.log(this.customerList,this.filteredCustomerList);
  
  if(search=='')
  {

    this.filteredCustomerList=this.customerList
  }
  else
  {

    this.filteredCustomerList = this.CustomerList
    .filter(c => c.CUST_NAME.toLowerCase().includes(search))
    .sort((a, b) => a.CUST_NAME.tostring().localeCompare(b.CUST_NAME));
  }
  

  // Filter existing customers

  // Check if exact name is not in the list and input is not empty
  // const exists = this.customerList.some(c => c.CUST_NAME.toLowerCase() === search);
  // if (search && !exists) {
  //   // Temporarily add the typed customer to the filtered list
  //   this.filteredCustomerList.unshift({ CUST_NAME: this.capitalizeFirstLetter(this.customerSearchText) });
  // }
}

selectCustomer(customer: any) {
  console.log(customer);

  
  this.customerSearchText=customer.CUST_NAME
  this.CustId=customer.CUST_ID

  // this.BillWiseReportData = this.BillWiseReportDatafilter.
   this.Getonepartyallitemwise(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),
    this.datepipe.transform(this.Tod,'dd/MM/yyyy'),this.CustId,this.SctId)
    
  
  // this.customerSearchText = customer.CUST_NAME;
  // this.showDropdown = false;

  // // If the selected customer is newly typed, save it to the main list
  // if (!this.customerList.some(c => c.CUST_NAME.toLowerCase() === customer.CUST_NAME.toLowerCase())) {
  //   this.customerList.push({ CUST_NAME: customer.CUST_NAME });
  //   // Re-sort the main list
  //   this.customerList.sort((a, b) => a.CUST_NAME.localeCompare(b.CUST_NAME));
  // }
}

// hideDropdown() {
//   // Delay to allow click selection
//   setTimeout(() => {
//     this.showDropdown = false;
//   }, 200);
// }

capitalizeFirstLetter(name: string): string {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
exportToExcel(): void {
  const worksheetData = this.BillWiseReportData.map((item, index) => ({
    '#': index + 1,
    'Customer Name': item.CUST_NAME,
    'Item Name': item.ITEM_NAME,
    'Unit Code': item.UNIT_CODE,
    'Sale Qty': item.SALE_QTY,
    'RTN Qty': item.RTN_QTY,
    'Net Sale Qty': item.NET_SALE_QTY,
    'Sale Amount': item.SALE_AMOUNT,
    'RTN Net Amount': item.RTN_NET_AMT,
    'Net Amount': item.NET_AMT
  }));

  const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(worksheetData);
  const workbook: XLSX.WorkBook = { Sheets: { 'Report': worksheet }, SheetNames: ['Report'] };
  const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
 // FileSaver.saveAs(blob, 'OnePartyAllItemReport.xlsx');
}
exportToPDF(): void {
  const doc = new jsPDF('l', 'mm', 'a4'); // Landscape, millimeter, A4

  doc.text('One Party All Item Report', 14, 10);

  const headers = [['#', 'Customer Name', 'Item Name', 'Unit Code', 'Sale Qty', 'RTN Qty', 'Net Sale Qty', 'Sale Amount', 'RTN Net Amount', 'Net Amount']];
  
  const rows = this.BillWiseReportData.map((item, index) => [
    index + 1,
    item.CUST_NAME,
    item.ITEM_NAME,
    item.UNIT_CODE,
    item.SALE_QTY,
    item.RTN_QTY,
    item.NET_SALE_QTY,
    item.SALE_AMOUNT,
    item.RTN_NET_AMT,
    item.NET_AMT
  ]);

  autoTable(doc, {
    head: headers,
    body: rows,
    startY: 20,
    styles: { fontSize: 7 }
  });

  doc.save('OnePartyAllItemReport.pdf');
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
        // this.GetAllUserRightsTab(data.MenuGroupId)
          this.sctList=data.Data
          //this.getReport()
           this.customerList=data.Data
          this.filteredCustomerList=data.Data
          console.log(this.customerList,this.filteredCustomerList);
        }
        else
        {
           this.customerList=[]
          this.filteredCustomerList=[]
          this.sctList=[]
         this.BillWiseReportData = [];
        }
 
     }
      else
     {
       this.customerList=[]
          this.sctList=[]
          this.getReport()
        
     }
   },
 (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
 }
}


