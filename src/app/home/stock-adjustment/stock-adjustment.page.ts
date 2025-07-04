import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { CommonModalPage } from 'src/app/shared/common-modal/common-modal.page';
import { StockAdjustmentCombine } from 'src/class/StockAdjustment';
import { AuthService } from 'src/services/auth.service';
import { CommonService } from 'src/services/common.service';
import { StockAdjustmentService } from 'src/services/stock-adjustment.service';
import Swal from 'sweetalert2';
interface ItemDetail {
  ITEM_ID:number
  LAST_STK_ADJ_DATE:string
  ITEM_NAME:string
  ITEM_CODE: string;
  LBL_ID: number;
  BATCH_CODE: string;
  CUR_QTY: number;
  UNIT_ID: number;
  UNIT_CODE: string;
  SALE_RATE: number;
  MRP: number;
  SUM_ADJ_QTY: number;
  LBL_ADJ_COUNT: number;
  LBL_CONFRMED_COUNT: number;
  COLOUR_CODE: string;
  ADD_REPLACE: string; // MRP might be optional for some items
  cStock?: number; // Current Stock might be optional
  physicalStock: number | null; // Can be null if not yet entered
    //           {
    // "ITEM_ID": 1210000139,
    // "LAST_STK_ADJ_DATE": null,
    // "ITEM_NAME": "N SMOOTHY PUSH CHOPPER ROUND 2IN1 EX-PC1000",
    // "ITEM_CODE": "IT002",
    // "LBL_ID": 121250000052,
    // "BATCH_CODE": "VIRTUAL",
    // "CUR_QTY": 130,
    // "UNIT_ID": 1010000013,
    // "UNIT_CODE": "PCS",
    // "SALE_RATE": 5.5,
    // "MRP": 0,
    // "SUM_ADJ_QTY": 0,
    // "LBL_ADJ_COUNT": 0,
    // "LBL_CONFRMED_COUNT": 0,
    // "COLOUR_CODE": "#222341",
    // "ADD_REPLACE": "N"
// }
}
@Component({
  selector: 'app-stock-adjustment',
  templateUrl: './stock-adjustment.page.html',
  styleUrls: ['./stock-adjustment.page.scss'],
})

export class StockAdjustmentPage implements OnInit {
ItemNameList:any[]=[]

// Define an interface for your item data for better type safety

SectionData:any
CounterData:any
StartDate:any
ToDate:any
BarcodeType:number=1
CompId:number=0


  // State to manage which screen is visible
  showSearchScreen: boolean = true; // Start with the search screen visible
SctId:string=''
CounterId:string=''
  // Properties for Search Screen
  showNillStock: boolean = true;
  itemBarcode: string = '';
  itemName: string = '';
  itemCode: string = '';

  // Properties for Item Details Screen
  items: StockAdjustmentCombine[] = []; // Array to hold multiple item details

  // Properties for Navbar (now managed within this component)
  navbarTitle: string = 'Stock Adjustment';
  showBackButton: boolean = false;
  currentTime: string = '';
  CurrentFinancialYear:number=0

  constructor(
    private loader:LoadingController,
    private authser:AuthService,
    private saser:StockAdjustmentService,
    private modalController:ModalController,
    private comser:CommonService,
    private datepipe:DatePipe

  ) { 
    this.GetStockTakingDateRangeAsync()
    this.GetCompanyFinYearDetails()
    this.GetSectionId()
    this.GetCounterId()
    this.GetActiveItemNames()
  }

  ngOnInit(): void {
    this.updateTime();
    setInterval(() => this.updateTime(), 60000); // Update every minute

    // Initialize item details (mock data)
    // this.loadItemDetailsMockData();
  }

   GetCounterId() {
    const CounterData = localStorage.getItem('Counter');
  
    if (!CounterData) {
      console.error('No data found in localStorage for key "Section".');
      return; // Exit if no data
    }
  
    try {
      const parsedData = JSON.parse(CounterData); // Parse JSON string
      console.log('Parsed Data:', parsedData);
  
      const decryptedData = this.authser.Decrypt(parsedData); // Decrypt the parsed data
      this.CounterData=decryptedData
      this.CounterId=this.CounterData.COUNTER_ID
      console.log('Decrypted Data:', decryptedData);
    } catch (error) {
      console.error('Error parsing or decrypting data:', error);
    }
  }

   GetSectionId() {
    const sectionData = localStorage.getItem('Section');
  
    if (!sectionData) {
      console.error('No data found in localStorage for key "Section".');
      return; // Exit if no data
    }
  
    try {
      const parsedData = JSON.parse(sectionData); // Parse JSON string
      console.log('Parsed Data:', parsedData);
  
      const decryptedData = this.authser.Decrypt(parsedData); // Decrypt the parsed data
      this.SectionData=decryptedData
      this.SctId = this.SectionData.SCT_ID
      console.log('Decrypted Data:', decryptedData);
    } catch (error) {
      console.error('Error parsing or decrypting data:', error);
    }
  }

  updateTime(): void {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    this.currentTime = `${formattedHours}:${formattedMinutes} ${ampm}`;
  }

  // --- Search Screen Methods ---
  onClear(): void {
    this.itemBarcode = '';
    this.itemName = '';
    this.itemCode = '';
    this.showNillStock = true; // Reset checkbox as well
    this.SelectedItem=[]
    console.log('Clear search fields');
  }

  onSearch(): void {
    // In a real app:
    // 1. Collect search parameters: { barcode: this.itemBarcode, name: this.itemName, code: this.itemCode, showNill: this.showNillStock }
    // 2. Call a service to fetch data based on these parameters.
    // 3. Populate this.items with the fetched data.
    console.log('Performing search with:', {
      barcode: this.itemBarcode,
      name: this.itemName,
      code: this.itemCode,
      showNill: this.showNillStock
    });

    // Simulate showing the details screen after search
    this.showDetailsScreen();
  }

  onScan(): void {
    console.log('Initiate scan functionality');
    // Implement native device scanning logic here, often via Capacitor/Cordova plugins.
  }



  onUpdate(): void {
    // In a real app:
    // 1. Collect updated physical stock values from this.items
    // 2. Send updated data to a backend service.
    console.log('Updating items:', this.items);
    // After successful update, you might navigate back or show a success message.
    // This.showSearchScreen() might be called here to go back to search.
  }

  // --- Screen Navigation Methods ---
  showSearchScreenView(): void {
    this.showSearchScreen = true;
    this.navbarTitle = 'Stock adjustment';
    this.showBackButton = false;
  }

  showDetailsScreen(): void {
    this.showSearchScreen = false;
    this.navbarTitle = 'Mercato';
    this.showBackButton = true;
  }

 


   async GetActiveItemNames() {
      const loading = await this.loader.create({
        cssClass: 'custom-loading',
        message: 'Loading...',
        spinner: 'dots',
      });
      await loading.present();
  
      this.saser.GetActiveItemNames().subscribe(
        (data: any) => {
          loading.dismiss();
          console.log(data);
          if(data.Status==200)
          {
              this.ItemNameList = data.Data
          
          }
          else
          {
            Swal.fire(data.Message,'','error')
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

    async GetStockTakingDateRangeAsync() {
      const loading = await this.loader.create({
        cssClass: 'custom-loading',
        message: 'Loading...',
        spinner: 'dots',
      });
      await loading.present();
  
      this.saser.GetStockTakingDateRangeAsync().subscribe(
        (data: any) => {
          loading.dismiss();
          console.log(data);
          if(data.Status==200)
          {
            
            this.ToDate= this.parseDate(data.Data.ToDate)
            this.StartDate=data.Data.FromDate
//             {
//     "FromDate": "01/01/2024",
//     "ToDate": "23/08/2025"

// }
              // this.ItemNameList = data.Data
          
          }
          else
          {
            Swal.fire(data.Message,'','error')
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

    parseDate(str: string): Date {
  const [day, month, year] = str.split('/');
  return new Date(+year, +month - 1, +day);
}


 async GetCompanyFinYearDetails(){
    const loading = await this.loader.create({
      cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
      message: 'Loading...', // Optional: Custom message
      spinner: 'dots', // Optional: Choose a spinner
      // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
    });
    await loading.present();
    this.saser.GetCurrentFinancialYearSettingsAsync().subscribe((data:any)=>{
      loading.dismiss()
      console.log(data,'GetCurrentFinancialYearSettingsAsync');
      
      // this.comser.dismissLoading();
      if(data.Status==200)
      {
      //  this.GetAllUserRightsTab(data.MenuGroupId)
      // this.FinanceYearList=data
        this.CurrentFinancialYear=data.Data.CurFinYearId
        this.CompId=data.Data.CompId
        // this.GenerateCRBillRefNo(data[0].COMP_ID,data[0].FIN_YEAR_ID,this.SectionData.COMP_CODE,data[0].CUR_FIN_YEAR_CODE,this.SectionData.SCT_ID)
      }
      else
      {
          // this.FinanceYearList=[]
          this.CurrentFinancialYear=0
        
      }
    },
  (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
  }



     async GetItemDetailsAsync() {
      this.items=[]
      // let getval = this.itemName!=''?this.itemName:this.itemCode!=''?this.itemCode:this.itemBarcode!=''?this.itemBarcode:Swal.fire('Enter any field to submit','','warning') 
      let getval = '';
      let searchby =0
      let finalval =''

      if (this.itemName) {
        getval = this.itemName;
        searchby=2
      } else if (this.itemCode) {
        getval = this.itemCode;
        searchby=3
      } else if (this.itemBarcode) {
        getval = this.itemBarcode;
        searchby=1
      } else {
        Swal.fire('Enter any field to submit', '', 'warning');
        return;
      }

      if(searchby==1)
      {
        if(getval.includes('/'))
        {
          this.BarcodeType=0
          finalval =  getval.split('/')[0]

        }
        else
        {
          this.BarcodeType=1
        }
      }
      else
      {
        this.BarcodeType=1
        finalval =getval
      }

      const loading = await this.loader.create({
        cssClass: 'custom-loading',
        message: 'Loading...',
        spinner: 'dots',
      });
      await loading.present();
  
      this.saser.GetItemDetailsAsync(this.StartDate,this.SctId,this.showNillStock==true?1:0,getval,searchby,this.BarcodeType).subscribe(
        (data: any) => {
          loading.dismiss();
          console.log(data);
          if(data.Status==200)
          {

            
            if(data.Data.length>0)
            {
              let d:ItemDetail[]=[] 
              d=data.Data
              for(let i = 0;i<d.length;i++)
              {
                let a  =  new StockAdjustmentCombine()
                a.StockAdjustmentHeader.CounterId = this.CounterId
                a.StockAdjustmentHeader.FromDate =this.StartDate
                a.StockAdjustmentHeader.ToDate = this.datepipe.transform(this.ToDate,'dd/MM/yyyy')
                a.StockAdjustmentHeader.SctId = this.SctId
                a.StockAdjustmentHeader.Reason = this.StartDate
                a.StockAdjustmentDetails.BatchCode = d[i].BATCH_CODE
                a.StockAdjustmentDetails.ItemId = d[i].ITEM_ID
                a.StockAdjustmentDetails.UnitId = d[i].UNIT_ID
                a.StockAdjustmentDetails.FinYearId = this.CurrentFinancialYear
                a.StockAdjustmentDetails.SysQty =d[i].CUR_QTY
                a.StockAdjustmentDetails.ITEM_CODE=d[i].ITEM_CODE
                a.StockAdjustmentDetails.ITEM_NAME=d[i].ITEM_NAME
                a.StockAdjustmentDetails.LblId=d[i].LBL_ID
                a.StockAdjustmentDetails.Mrp=d[i].MRP
                a.StockAdjustmentDetails.Mfp=d[i].SALE_RATE
                a.StockAdjustmentDetails.Quantity=0
                // a.StockAdjustmentDetails.SALE_RATE=d[i].SALE_RATE
                // a.StockAdjustmentDetails.SysQty = d[i].
                a.StockAdjustmentDetails.UNIT_CODE=d[i].UNIT_CODE
                a.StockAdjustmentDetails.SysUnitId =d[i].UNIT_ID

                a.StockAdjustmentDetails.CompId=this.CompId

                this.items.push(a)
                
              }
              this.showSearchScreen=false
              this.showBackButton=true
              this.navbarTitle='Items'
            }
            else
            {
               const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.onmouseenter = Swal.stopTimer;
                      toast.onmouseleave = Swal.resumeTimer;
                    },
                  });
                  Toast.fire({
                    icon: 'info',
                    title: 'No data found',
                  });
            }
          
          }
          else
          {
            Swal.fire(data.Message,'','error')
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



SelectedItem:any[]=[]
    async OpenitemModal(){
        const modal = await this.modalController.create({
          component: CommonModalPage,
          componentProps: {
            DropDownData:this.ItemNameList,
            Headers:['Item Name'],
            Fields:['ItemName'],
            ModalHeader:'Item Name List',
            CheckType:'radio',
            UniqueField:'ItemName',
            SelectedItems:this.SelectedItem
            
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
            this.onClear()
            this.SelectedItem = data.selected
            this.itemName = this.SelectedItem[0].ItemName
            this.GetItemDetailsAsync()
          
    
              
           
          } else {
            console.log('Modal dismissed without selection');
          }
      }



      OnEnteringOtherFields(Field:'barcode' | 'code'){
        this.itemName=''
        Field=='barcode'?this.itemCode='' :this.itemBarcode=''

      }

     
       async SubmitDetails(){
       
    const loading = await this.loader.create({
      cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
      message: 'Loading...', // Optional: Custom message
      spinner: 'dots', // Optional: Choose a spinner
      // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
    });

    let finalitems =[]
      if(this.items.some((x:any)=>x.StockAdjustmentDetails.Quantity!=0))
      {
        finalitems = this.items.filter((x:any)=>x.Quantity!=0)
      }
      else
      {
        Swal.fire("Enter Physical qty to submit",'','warning')
        return
      }

    
    await loading.present();
    this.saser.SaveStockAdjustmentAsync(finalitems).subscribe((data:any)=>{
      loading.dismiss()
      console.log(data,'GetCurrentFinancialYearSettingsAsync');
      
      // this.comser.dismissLoading();
      if(data.Status==200)
      {
        // this.showBackButton=false
        this.showSearchScreenView()
        this.items=[]
        this.onClear()
        Swal.fire(data.Message,'','success')
      }
      else
      {
        Swal.fire(data.Message,'','error')
          // this.FinanceYearList=[]
          // this.CurrentFinancialYear=0
        
      }
    },
  (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
  }
}
