import { DatePipe } from '@angular/common';
import { Component, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ReportService } from 'src/services/report.service';
import { CommonService } from 'src/services/common.service';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';
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

            this.BillWiseReportDatafilter = this.BillWiseReportData
            
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
customerList: any[] = []; // Original customer list
filteredCustomerList: any[] = [];
showDropdown: boolean = false;
searchHistory: string[] = [];
filterCustomers() {
  const search = this.customerSearchText.trim().toLowerCase();
  console.log(search);
  console.log(this.customerList,this.filteredCustomerList);
  
  

  // Filter existing customers
  this.filteredCustomerList = this.customerList
    .filter(c => c.CUST_NAME.toLowerCase().includes(search))
    .sort((a, b) => a.CUST_NAME.tostring().localeCompare(b.CUST_NAME));

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

  // this.BillWiseReportData = this.BillWiseReportDatafilter.
   this.GetCreditbill(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'),customer.CUST_ID)
   
  
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

exportToPDF() {
  const doc = new jsPDF();

  const headers = [['#', 'Bill No', 'Bill Date', 'Customer', 'Trans Type', 'Bill Amt', 'Settled Amt', ...(this.SelectedStatus === 'Pending' ? ['Balance'] : [])]];
  
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
    head: headers,
    body: data
  });

  doc.save('CreditBillReport.pdf');
}

// Export to Excel
exportToExcel() {
  const exportData = this.BillWiseReportData.map((item, index) => ({
    '#': index + 1,
    'Bill No': item.BILL_NO,
    'Bill Date': this.datepipe.transform(item.BILL_DATE, 'dd-MMM-yyyy'),
    'Customer': item.SALE_CUST_NAME,
    'Trans Type': item.TRANS_TYPE,
    'Bill Amt': item.BILL_AMT,
    'Settled Amt': item.SETTLED_AMT,
    ...(this.SelectedStatus === 'Pending' && { 'Balance': item.BALC_AMT })
  }));

  const worksheet = XLSX.utils.json_to_sheet(exportData);
  const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
  const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
  saveAs(blob, 'CreditBillReport.xlsx');
}
 
async GetCustomer(fromDate:any,toDate:any){
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading',
      message: 'Loading...',
      spinner: 'dots',
    });
    await loading.present();
    this.repser.GetCust(fromDate,toDate).subscribe((data:any)=>{
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
          this.customerList=data.Data

          this.filteredCustomerList=data.Data
          console.log(this.customerList,this.filteredCustomerList);
          // this.customerSearchText
          
          
        }
        else
        {
          this.customerList=[]
          this.filteredCustomerList=[]
          this.BillWiseReportData = [];
          
        }
 
      }
      else
      {
          this.customerList=[]
        this.getReport()
      }
    },
  (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
}
  onDateChange() {
    if (this.Fromd && this.Tod) {
      this.GetCustomer(this.Fromd, this.Tod);
    }
  }
  

  onStatusChange(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    if (selectedValue === 'Pending') {
      this.SelectedStatus='Pending'
    //  this.getReport();
    }
    else if (selectedValue === 'Settled') {
       this.SelectedStatus='Settled'
      //this.getReportSettled();
    }
    else
    {
        this.BillWiseReportData = [];
    }
  }

  getTotal(field: 'BILL_AMT' | 'SETTLED_AMT' | 'BALC_AMT'): number {
    return this.BillWiseReportData?.reduce((sum, item) => sum + (Number(item[field]) || 0), 0);
  }

}
function saveAs(blob: Blob, arg1: string) {
  throw new Error('Function not implemented.');
}

