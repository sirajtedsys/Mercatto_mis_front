import { DatePipe } from '@angular/common';
import { Component, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { ReportService } from 'src/services/report.service';
import { CommonService } from 'src/services/common.service';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { CommonModalPage } from 'src/app/shared/common-modal/common-modal.page';


@Component({
  selector: 'app-customer-aging-report',
  templateUrl: './customer-aging-report.page.html',
  styleUrls: ['./customer-aging-report.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomerAgingReportPage implements OnInit {



  Today:any
  Fromd:any
  Tod:any
  CustId:string=''
  MonthSubtotals:any
  BillWiseReportData:any[]=[]
  TaskList:any[]=[]
  CustomerList:any[]=[]
  CurrentCustomer:number=0
  SelectedCustName:string=''
    sctList:any[]=[]
  SctId:string =''
  constructor(private renderer: Renderer2,private loadingCtrl:LoadingController,
    private comser:CommonService,private repser:ReportService,private datepipe:DatePipe,private modalController:ModalController) { 

    this.Today= this.datepipe.transform(new Date(),'yyyy-MM-dd')
    this.Fromd=this.Today
    this.Tod=this.Today
    this.GetDepartment()
    // this.CustId='1210000001'
   this.GetCustomer(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),
   this.datepipe.transform(this.Tod,'dd/MM/yyyy'),this.CustId,this.SctId)

  }

  ngOnInit() {
    
  
  }
  getReport(){
   
    this.GetCustomerAging(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),
    this.datepipe.transform(this.Tod,'dd/MM/yyyy'),this.CustId,this.SctId)
    
   
    // this.GetBillwiseSale(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'))
  }
  async GetCustomerAging(fd: any, td: any,custid:any,SctId:any) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading',
      message: 'Loading...',
      spinner: 'dots',
    });
    await loading.present();
  
    this.repser.GetCustomerAging(fd, td,custid,SctId).subscribe(
      (data: any) => {
       loading.dismiss();
        console.log(data);
  
        if (data.Status === 200) {
          if (data.Data.length > 0) {
            this.BillWiseReportData = data.Data
            
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
    
    this.GetCustomerAgingDtls(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),this.datepipe.transform(this.Tod,'dd/MM/yyyy'),items.CUST_ID,this.SctId)

        
  }

  async GetCustomerAgingDtls(fd: any, td: any,custid:any,SctId:any) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading',
      message: 'Loading...',
      spinner: 'dots',
    });
    await loading.present();
  
    this.repser.GetCustomerAgingDtls(fd, td,custid,SctId).subscribe(
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


  OnDateChange(event:any,type:any)
  {
    type=='from'?this.Fromd=this.datepipe.transform(event.target.value,'yyyy-MM-dd'):this.Tod=this.datepipe.transform(event.target.value,'yyyy-MM-dd')
    if(this.Fromd<this.Tod)
    {
      this.GetCustomer(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),
      this.datepipe.transform(this.Tod,'dd/MM/yyyy'),this.CustId,this.SctId)
    }
  }

  async GetCustomer(fromDate:any,toDate:any,custid:any,SctId:any){
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading',
      message: 'Loading...',
      spinner: 'dots',
   });
    await loading.present();
    this.repser.GetCustomerAging(fromDate,toDate,custid,SctId).subscribe((data:any)=>{
      loading.dismiss()
     console.log(data);
      
      // this.comser.dismissLoading();
      if(data.Status==200)
      {
        if(data.Data.length>0)
        {
          for(let i=0;i<data.Data.length;i++)
            {
              if(!this.CustomerList.some((x:any)=>x.CUST_ID==data.Data[i].CUST_ID))
              {
                let obj = {CUST_ID:data.Data[i].CUST_ID,CUST_NAME:data.Data[i].CUST_NAME}
                this.CustomerList.push(obj)
                this.filteredCustomerList.push(obj)
    
              }
            
            }
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
      this.GetCustomer(this.datepipe.transform(this.Fromd,'dd/MM/yyyy'),
      this.datepipe.transform(this.Tod,'dd/MM/yyyy'),this.CustId,this.SctId);
    }
  }
customerSearchText: string = '';
// customerList: any[] = []; // Original customer list
filteredCustomerList: any[] = [];
showDropdown: boolean = false;
searchHistory: string[] = [];




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
  const rawTitle =' Customr Ageing Report from ' +
    this.datepipe.transform(this.Fromd, 'dd/MMM/yyyy') +
    ' to ' + this.datepipe.transform(this.Tod, 'dd/MMM/yyyy');

  // Map your data for export
  const exportData = this.BillWiseReportData.map((item, index) => [
    index + 1,
    item.CUST_NAME,
    item["'30'"],
    item["'60'"],
    item["'90'"],
    item["'120'"],
    item["'ABOVE 120'"]
  ]);
  
  const header = ['Sl.No', 'Customer', '30', '60', '90', '120', 'ABOVE 120'];

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
//   const doc = new jsPDF('l', 'mm', 'a4'); // Landscape, millimeter, A4

//   doc.text('One Party All Item Report', 14, 10);

//   const headers = [['#', 'Customer Name', 'Item Name', 'Unit Code', 'Sale Qty', 'RTN Qty', 'Net Sale Qty', 'Sale Amount', 'RTN Net Amount', 'Net Amount']];
  
//   const rows = this.BillWiseReportData.map((item, index) => [
//     index + 1,
//     item.CUST_NAME,
//     item.ITEM_NAME,
//     item.UNIT_CODE,
//     item.SALE_QTY,
//     item.RTN_QTY,
//     item.NET_SALE_QTY,
//     item.SALE_AMOUNT,
//     item.RTN_NET_AMT,
//     item.NET_AMT
//   ]);

//   autoTable(doc, {
//     head: headers,
//     body: rows,
//     startY: 20,
//     styles: { fontSize: 7 }
//   });

//   doc.save('OnePartyAllItemReport.pdf');
// }



exportToPDF(): void {
  const doc = new jsPDF();

  const rawTitle = ' Customr Ageing Report from ' +
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

  const columns = ['#', 'Customer', '30', '60', '90', '120', 'ABOVE 120'];
  const rows = this.BillWiseReportData.map((item, index) => [
        index + 1,
        item.CUST_NAME,
        item["'30'"],
        item["'60'"],
        item["'90'"],
        item["'120'"],
        item["'ABOVE 120'"]
  ]);

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
        // this.GetAllUserRightsTab(data.MenuGroupId)
          this.sctList=data.Data
          //this.getReport()
          //  this.CustomerList=data.Data
          // this.filteredCustomerList=data.Data
          console.log(this.CustomerList,this.filteredCustomerList);
        }
        else
        {
          //  this.CustomerList=[]
          // this.filteredCustomerList=[]
          this.sctList=[]
        //  this.BillWiseReportData = [];
        }
 
     }
      else
     {
       this.CustomerList=[]
          this.sctList=[]
          this.getReport()
        
     }
   },
 (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
 }


 CustomersName:string=''
 SelectedCustomers:any[]=[]

 async OpencustomerModal(){
  const modal = await this.modalController.create({
    component: CommonModalPage,
    componentProps: {
      DropDownData:this.CustomerList,
      Headers:['Customer'],
      Fields:['CUST_NAME'],
      ModalHeader:'Customer List',
      CheckType:'check',
      UniqueField:'CUST_ID',
      SelectedItems:this.SelectedCustomers
      
      // AttendenceData: this.Attendence,
      // taskDescription: task.description
    }
  });

   await modal.present();
  const { data, role } = await modal.onWillDismiss(); // You can also use onDidDismiss()

    // `data` contains the output data from the modal
    // `role` contains the role (e.g., "cancel", "confirm")
    if (role === 'confirm') {
      console.log('Selected Data:', data); // Handle the returned data
      let values = data.selected
      this.SelectedCustomers=data.selected
      console.log(values);
      // this.CustomersName = values['Customer Name'];

      this.CustomersName = values.map((item:any) => item.CUST_NAME);
      console.log(this.CustomersName);
      let custid = values.map((v:any) => v.CUST_ID).join(',');
      this.CustId=custid
      console.log(custid);
     
      
      console.log(custid,'custids');
    } else {
      
      console.log('Modal dismissed without selection');
    }
}
}


