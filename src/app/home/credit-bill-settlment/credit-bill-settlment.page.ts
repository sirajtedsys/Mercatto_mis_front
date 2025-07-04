import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { CommonModalPage } from 'src/app/shared/common-modal/common-modal.page';
import { AppConfig } from 'src/class/AppConfig';
import { CRBill } from 'src/class/CrBill';
import { CRBillDtls } from 'src/class/CRBillDtls';
import { AuthService } from 'src/services/auth.service';
import { CommonService } from 'src/services/common.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-credit-bill-settlment',
  templateUrl: './credit-bill-settlment.page.html',
  styleUrls: ['./credit-bill-settlment.page.scss'],
  
})
export class CreditBillSettlmentPage implements OnInit {

  CustomerList:any[]=[]
  FinanceYearList:any[]=[]
  CustomersName:string=''
  SectionData:any
  CounterData:any
  cb = new CRBill()
  cbd = new CRBillDtls()
  crbilldetailslist:any[]=[]
  CurrentFinancialYear:number=0

  SettlementNo:string=''
  BillDate:any
  Today:any
  BankList:any[]=[]
  SearchType:string='Cust'    //Cust //Bill  //Invoice  
InvoiceBillNo:string=''
appconfig = new AppConfig()
WalletList:any[]=[]


  Billtype:string='consolidate'  //bill,consolidate
  Prefix: any[]=[];
  searchQuery: string='';
  constructor(
    private loader:LoadingController,
    private modalController:ModalController,
    private comser:CommonService,
    private authser:AuthService,
    private datepipe:DatePipe

  ) 
  { 
    this.GetCreditbillSettings()
    this.Today= this.datepipe.transform(new Date(),'yyyy-MM-dd')
    this.BillDate=this.Today
    // this.GetSectionId()
    // this.GetCounterId()
    this.getcompprefix()
    this.getallCustomers()
    this.getallFinYear()
    this.GetCompanyFinYearDetails()
    this.GetAppBank()
    this.GetAppWallet()
  }


  ClearAll(){
    this.Today= this.datepipe.transform(new Date(),'yyyy-MM-dd')
    this.BillDate=this.Today
    this.CustomerPaymentList=[]
    this.CustomerPaymentListDup=[]
    this.CustomersName=''
    this.BranchCustomersName=''
    this.CustomerListByBranch=[]
    this.CashCheck=false
    this.ChequeCheck=false
    this.BtCheck=false
    this.WalletCheck=false
    this.CreditCardCheck=false
    this.InvoiceBillNo=''
    this.searchQuery=''
    this.cbd = new CRBillDtls()
    this.cb = new CRBill()
    // this.GetSectionId()
    // this.GetCounterId()
    this.GetCreditbillSettings()
    this.getcompprefix()
    this.getallCustomers()
    this.getallFinYear()
    this.GetCompanyFinYearDetails()
    this.GetAppBank()


  }

  GetCreditbillSettings(){
    this.comser.GetCreditbillSettings().subscribe((data:any)=>{
      console.log(data);
      this.SectionData={SCT_ID:data.Data.Creditbill.Section,COMP_CODE:data.Data.Creditbill.Section_Comp_Code}
      this.CounterData = {COUNTER_ID:data.Data.Creditbill.Counter}
    
    })
  }


  ClearForm(){
    Swal.fire({
      title: 'Are you sure?',
      text: "Entered Data will be Lost?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes,Clear!',
    }).then((result) => {
      if (result.isConfirmed) {
        // Exit the app
        // navigator['app'].exitApp();
        // localStorage.removeItem('type')
        // this.router.navigate(['login'])
        this.ClearAll()
      }
    });
  }

  ngOnInit() {
    console.log();
    
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
      console.log('Decrypted Data:', decryptedData);
    } catch (error) {
      console.error('Error parsing or decrypting data:', error);
    }
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
      console.log('Decrypted Data:', decryptedData);
    } catch (error) {
      console.error('Error parsing or decrypting data:', error);
    }
  }
  
  async getcompprefix(){
    const loading = await this.loader.create({
      cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
      message: 'Loading...', // Optional: Custom message
      spinner: 'dots', // Optional: Choose a spinner
      // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
    });
    await loading.present();
    this.comser.GetCRBCPrefix().subscribe((data:any)=>{
      loading.dismiss()
      console.log(data,'GetCRBCPrefix');
      
      // this.comser.dismissLoading();
      if(data && data!=null && data!=undefined && data.length!=0)
      {
      //  this.GetAllUserRightsTab(data.MenuGroupId)
      // this.CustomerList=data
      this.Prefix=data
        
      }
      else
      {
          // this.CustomerList=[]
          this.Prefix=[]
      }
    },
  (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
  }

  async getallCustomers(){
    const loading = await this.loader.create({
      cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
      message: 'Loading...', // Optional: Custom message
      spinner: 'dots', // Optional: Choose a spinner
      // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
    });
    await loading.present();
    this.comser.getAllCustomers().subscribe((data:any)=>{
      loading.dismiss()
      console.log(data);
      
      // this.comser.dismissLoading();
      if(data && data!=null && data!=undefined && data.length!=0)
      {
      //  this.GetAllUserRightsTab(data.MenuGroupId)
      this.CustomerList=data
        
      }
      else
      {
          this.CustomerList=[]
        
      }
    },
  (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
  }

  async getallFinYear(){
    const loading = await this.loader.create({
      cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
      message: 'Loading...', // Optional: Custom message
      spinner: 'dots', // Optional: Choose a spinner
      // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
    });
    await loading.present();
    this.comser.getAllFinanceYear().subscribe((data:any)=>{
      loading.dismiss()
      console.log(data);
      
      // this.comser.dismissLoading();
      if(data && data!=null && data!=undefined && data.length!=0)
      {
      //  this.GetAllUserRightsTab(data.MenuGroupId)
      this.FinanceYearList=data
        
      }
      else
      {
          this.FinanceYearList=[]
        
      }
    },
  (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
  }
  async GetAppBank(){
    const loading = await this.loader.create({
      cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
      message: 'Loading...', // Optional: Custom message
      spinner: 'dots', // Optional: Choose a spinner
      // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
    });
    await loading.present();
    this.comser.GetAppBank().subscribe((data:any)=>{
      loading.dismiss()
      console.log(data);
      
      // this.comser.dismissLoading();
      if(data && data!=null && data!=undefined && data.length!=0)
      {
      //  this.GetAllUserRightsTab(data.MenuGroupId)
      this.BankList=data
        
      }
      else
      {
          this.BankList=[]
        
      }
    },
  (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
  }

  async GetAppWallet(){
    const loading = await this.loader.create({
      cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
      message: 'Loading...', // Optional: Custom message
      spinner: 'dots', // Optional: Choose a spinner
      // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
    });
    await loading.present();
    this.comser.GetAppWallet().subscribe((data:any)=>{
      loading.dismiss()
      console.log(data);
      
      // this.comser.dismissLoading();
      if(data && data!=null && data!=undefined && data.length!=0)
      {
      //  this.GetAllUserRightsTab(data.MenuGroupId)
      this.WalletList=data
        
      }
      else
      {
          this.WalletList=[]
        
      }
    },
  (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
  }

  async GetCompanyFinYearDetails(){
    const loading = await this.loader.create({
      cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
      message: 'Loading...', // Optional: Custom message
      spinner: 'dots', // Optional: Choose a spinner
      // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
    });
    await loading.present();
    this.comser.GetCompanyFinYearDetails().subscribe((data:any)=>{
      loading.dismiss()
      console.log(data,'GetCompanyFinYearDetails');
      
      // this.comser.dismissLoading();
      if(data && data!=null && data!=undefined && data.length!=0)
      {
      //  this.GetAllUserRightsTab(data.MenuGroupId)
      // this.FinanceYearList=data
        this.CurrentFinancialYear=data[0].FIN_YEAR_ID
        this.GenerateCRBillRefNo(data[0].COMP_ID,data[0].FIN_YEAR_ID,this.SectionData.COMP_CODE,data[0].CUR_FIN_YEAR_CODE,this.SectionData.SCT_ID)
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

  async GenerateCRBillRefNo(compID:any,finYearID:any,compCode:any,finYearCode:any,sctID:any){
    const loading = await this.loader.create({
      cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
      message: 'Loading...', // Optional: Custom message
      spinner: 'dots', // Optional: Choose a spinner
      // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
    });
    await loading.present();
    this.comser.GenerateCRBillRefNo(compID,finYearID,compCode,finYearCode,sctID).subscribe((data:any)=>{
      loading.dismiss()
      console.log(data,'GenerateCRBillRefNo');
      
      // this.comser.dismissLoading();
      if(data && data!=null && data!=undefined && data.length!=0)
      {
      //  this.GetAllUserRightsTab(data.MenuGroupId)
      // this.FinanceYearList=data
        // this.CurrentFinancialYear=data[0].FIN_YEAR_ID
        this.SettlementNo=data
      }
      else
      {
        this.SettlementNo=''
          // this.FinanceYearList=[]
          // this.CurrentFinancialYear=0
        
      }
    },
  (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
  }

  BillTypeChange(event:any,type:any)
  {
    if(event.target.checked==true)
    {
      this.Billtype=type
      this.cb.CrbcDiscAmt=''
      if(this.Billtype=='consolidate')
        {
          this.CustomerPaymentList.forEach((x: any) => x.SETTLED_DISC_AMT = 0);
        }
    }
  }

  GetBalanceAMount(DiscAMount:any,SettledAMt:any,SAleAMt:any,EnteredSettleAmt:any){
    // console. log(EnteredSettleAmt,DiscAMount,SettledAMt,SAleAMt);
    

    let Discamt = Number(DiscAMount)
    let SettleAmount = Number(SettledAMt)
    let SaleAmount = Number(SAleAMt)
    let set_amt_enter = Number(EnteredSettleAmt==undefined?0:EnteredSettleAmt==null?0:EnteredSettleAmt)
    // console.log();
    

    let bmt =  ((SaleAmount==null?0:SaleAmount)-(Discamt==null?0:Discamt)-(SettleAmount==null?0:SettleAmount)-(set_amt_enter==null?0:set_amt_enter==undefined?0:set_amt_enter)).toFixed(3)
    return bmt
  }

  EnterDiscount(event:any,item:any,index:any)
  {
    let val  = event.target.value
    // item.SETTLED_DISC_AMT = val
    this.CustomerPaymentList[index].SETTLED_DISC_AMT=val
    
    // this.CustomerPaymentList[index].Entered_settle_amt=(Number(this.CustomerPaymentList[index].SALE_NET_AMT)-val-Number(this.CustomerPaymentList[index].SETTLED_AMT)).toFixed(3)
    console.log(this.CustomerPaymentList);
    
  }

  EnterSettledAmount(event:any,item:any,index:any)
  {
    let val  = event.target.value
    // item.SETTLED_DISC_AMT = val
    this.CustomerPaymentList[index].Entered_settle_amt=val
    console.log(this.CustomerPaymentList);
    
  }


  CheckAll(event:any)
  {
    if(event.target.checked==true)
    {
      for(let i = 0 ; i<this.CustomerPaymentList.length;i++)
      {
        this.CustomerPaymentList[i].Checked =true
        
        // if(this.Billtype=='consolidate')
        //   {
            this.CustomerPaymentList[i].Entered_settle_amt = ((Number(this.CustomerPaymentList[i].SALE_NET_AMT)-Number(this.CustomerPaymentList[i].SETTLED_DISC_AMT)-Number(this.CustomerPaymentList[i].SETTLED_AMT))).toFixed(3)
          // }
      }
    }
    else
    {
      for(let i = 0 ; i<this.CustomerPaymentList.length;i++)
        {
          this.CustomerPaymentList[i].Checked =false
          // if(this.Billtype=='consolidate')
          //   {
              this.CustomerPaymentList[i].Entered_settle_amt = 0
            // }
        }
    }
  } 

  CheckForAllChecked(){
    // console.log(this.CustomerPaymentList.every((x:any)=>x.Checked==true));
    
    return this.CustomerPaymentList.every((x:any)=>x.Checked==true)
  }


  CheckItems(event:any,items:any,index:any)
  {
    if(event.target.checked==true)
    {
      this.CustomerPaymentList[index].Checked=true
      // if(this.Billtype=='consolidate')
      // {
        this.CustomerPaymentList[index].Entered_settle_amt = (Number(this.CustomerPaymentList[index].SALE_NET_AMT)-Number(this.CustomerPaymentList[index].SETTLED_DISC_AMT)-Number(this.CustomerPaymentList[index].SETTLED_AMT)).toFixed(3)
      // }
    }
    else
    {
      this.CustomerPaymentList[index].Checked=false
      // if(this.Billtype=='consolidate')
      //   {
          this.CustomerPaymentList[index].Entered_settle_amt = 0
        // }
    }
  }

  CashCheck:boolean=false
  CashCheckButton(event:any)
  {
    this.CashCheck = event.target.checked
  }

  CreditCardCheck:boolean=false
  CreditCardCheckButton(event:any)
  {
    this.CreditCardCheck = event.target.checked
  }


  ChequeCheck:boolean=false
  ChequeCheckButton(event:any)
  {
    this.ChequeCheck = event.target.checked
  }

  // BtCheckButton
  BtCheck:boolean=false
  BtCheckButton(event:any)
  {
    this.BtCheck = event.target.checked
  }
  WalletCheck:boolean=false
  WalletCheckButton(event:any)
  {
    this.WalletCheck = event.target.checked
  }

  BranchCustomersName:string=''
SelectedCustomers:any[]=[]
CustomerListByBranch:any[]=[]
CustomerPaymentList:any[]=[]
CustomerPaymentListDup:any[]=[]


SelectedBranchCustomers:any[]=[]

  async OpencustomerModal(){
    const modal = await this.modalController.create({
      component: CommonModalPage,
      componentProps: {
        DropDownData:this.CustomerList,
        Headers:['Customer','Code'],
        Fields:['Customer Name','Code'],
        ModalHeader:'Customer List',
        CheckType:'radio',
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

        this.CustomersName = values.map((item:any) => item['Customer Name']);
        console.log(this.CustomersName);
        let custid = values[0].CUST_ID
        console.log(custid);
        if(custid!=0)
        {
          await this.GetAppCustBranch(custid)

          
        // added by siraj 3-feb-2025  if selected customers doesnot have branches then show the selected cusotmer bills
        if(this.CustomerListByBranch.length==0)
          {
            // console.log();

            // alert('sfdsdfsdf')
            await this.GetAppCustFlexFill(this.SectionData.SCT_ID,(custid).toString())
          }
        }
        
        console.log(custid,'custids');
      } else {
        console.log('Modal dismissed without selection');
      }
  }

  async OpenBranchcustomerModal(){
    const modal = await this.modalController.create({
      component: CommonModalPage,
      componentProps: {
        DropDownData:this.CustomerListByBranch,
        Headers:['Customer'],
        Fields:['CUST_NAME'],
        ModalHeader:'Branch Customer List',
        CheckType:'check',
        UniqueField:'CUST_ID',
        SelectedItems:this.SelectedBranchCustomers
        
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
        this.SelectedBranchCustomers=data.selected
        console.log(values);
        // this.CustomersName = values['Customer Name'];

        this.BranchCustomersName = values.map((item:any) => item.CUST_NAME).join(', ');
        console.log(this.BranchCustomersName);
        let custid  = values.map((item: any) => `${item.CUST_ID}`).join(',');

        let scid = this.SectionData.SCT_ID
        await this.GetAppCustFlexFill(scid,custid)
    
      
        
        console.log(custid,'custids');
      } else {
        console.log('Modal dismissed without selection');
      }
  }


  async GetAppCustBranch(id: any): Promise<void> {
    const loading = await this.loader.create({
      cssClass: 'custom-loading',
      message: 'Loading...',
      spinner: 'dots'
    });
  
    await loading.present();
  
    return new Promise((resolve, reject) => {
      this.comser.GetAppCustBranch(id).subscribe(
        (data: any) => {
          loading.dismiss();
          console.log("Branch Data:", data);
          this.CustomerListByBranch = data?.length ? data : [];
          resolve(); // Ensure function resolves after API call
        },
        (error: any) => {
          loading.dismiss();
          console.error("Error fetching branches:", error);
          reject(error); // Reject in case of error
        }
      );
    });
  }

  async GetAppCustFlexFill(scid:any,ids:string){
    const loading = await this.loader.create({
      cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
      message: 'Loading...', // Optional: Custom message
      spinner: 'dots', // Optional: Choose a spinner
      // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
    });
    await loading.present();
    this.comser.GetAppCustFlexFill(scid,ids).subscribe((data:any)=>{
      loading.dismiss()
      console.log(data);
      
      // this.comser.dismissLoading();
      if(data && data!=null && data!=undefined && data.length!=0)
      {
      //  this.GetAllUserRightsTab(data.MenuGroupId)
      // this.FinanceYearList=data
          this.CustomerPaymentList=JSON.parse(JSON.stringify(data))
         this.CustomerPaymentListDup=JSON.parse(JSON.stringify(data))
        
      }
      else
      {
          // this.FinanceYearList=[]
          this.CustomerPaymentList=[]
          this.CustomerPaymentListDup=[]
          Swal.fire('No Record Found','','warning')
        
      }
    },
  (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
  }

  async GetManualInvoiceFlexFill(scid:any,ids:string,finYearID:any){
    const loading = await this.loader.create({
      cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
      message: 'Loading...', // Optional: Custom message
      spinner: 'dots', // Optional: Choose a spinner
      // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
    });
    await loading.present();
    this.comser.GetManualInvoiceFlexFill(scid,ids,finYearID).subscribe((data:any)=>{
      loading.dismiss()
      console.log(data);
      
      // this.comser.dismissLoading();
      if(data && data!=null && data!=undefined && data.length!=0)
      {
      //  this.GetAllUserRightsTab(data.MenuGroupId)
      // this.FinanceYearList=data
       
      this.CustomerPaymentList=JSON.parse(JSON.stringify(data))
      this.CustomerPaymentListDup=JSON.parse(JSON.stringify(data))
        
      }
      else
      {
          // this.FinanceYearList=[]
          this.CustomerPaymentList=[]
          this.CustomerPaymentListDup=[]
          Swal.fire('No Record Found','','warning')
        
      }
    },
  (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
  }

  async GetAppBillNoFlexFill(scid:any,ids:string,finYearID:any){
    const loading = await this.loader.create({
      cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
      message: 'Loading...', // Optional: Custom message
      spinner: 'dots', // Optional: Choose a spinner
      // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
    });
    await loading.present();
    this.comser.GetAppBillNoFlexFill(scid,ids,finYearID).subscribe((data:any)=>{
      loading.dismiss()
      console.log(data);
      
      // this.comser.dismissLoading();
      if(data && data!=null && data!=undefined && data.length!=0)
      {
      //  this.GetAllUserRightsTab(data.MenuGroupId)
      // this.FinanceYearList=data
        
      this.CustomerPaymentList=JSON.parse(JSON.stringify(data))
      this.CustomerPaymentListDup=JSON.parse(JSON.stringify(data))
        
      }
      else
      {
          // this.FinanceYearList=[]
          this.CustomerPaymentList=[]
          
         this.CustomerPaymentListDup=[]
          Swal.fire('No Record Found','','warning')
        
      }
    },
  (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
  }
  checkAnyPaymentMethodUsed(){
    if(this.CashCheck==true)
    {
      return true
    }

  if(this.ChequeCheck==true)
    {
      return true
    }

  if(this.WalletCheck==true)
    {
      return true
    }

    if(this.BtCheck==true)
      {
        return true
      }

    if(this.CreditCardCheck==true)
      {
        return true
      }

      Swal.fire('Enter Payment Details','','warning')
      
      return false

    
  }

  checkMandatoryFields(){

    //Check for any payment method triggererd



    //check for cash check button
    if(this.CashCheck==true)
    {
      if(this.cb.PayCashAmt=='')
      {
        Swal.fire('Cash Amount Required','','warning')
        return false
      }
    }

    //check for cardcheck button
    if(this.CreditCardCheck==true)
    {
      if(this.cb.PayCcAmt=='')
      {
        Swal.fire('Enter cardAmount','','warning')
        return false
      }
    }

    //check for cheque check button
    if(this.ChequeCheck==true)
      {
        if(this.cb.PayChqAmt=='')
        {
          Swal.fire('Enter Cheque amount','','warning')
          return false
        }
        if(this.cb.PayChqNo=='')
          {
            Swal.fire('Enter Cheque Number','','warning')
            return false
          }
          if(this.cb.PayToChequeBankId=='')
            {
              Swal.fire('Enter Cheque To Bank','','warning')
              return false
            }
            if(this.cb.PayChqDate=='')
              {
                Swal.fire('Enter Cheque Date','','warning')
                return false
              }
      }

      if(this.BtCheck==true)
      {
        if(this.cb.PayBankTransAmt=='')
          {
            Swal.fire('Enter TransferAmount','','warning')
            return false
          }
          if(this.cb.PayToTransBankId=='')
            {
              Swal.fire('Enter To Bank ','','warning')
              return false
            }  

      }


    return true
  }

  async Submit(){
    // CRBC_PREFIX
    const loading = await this.loader.create({
      cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
      message: 'Loading...', // Optional: Custom message
      spinner: 'dots', // Optional: Choose a spinner
      // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
    });
    if(this.checkAnyPaymentMethodUsed())
    {
      if(this.getPayableBalanceAMount()==0)
      {
        if(this.CustomerPaymentList.some((x:any)=>x.Checked==true))
          {
            if(this.checkMandatoryFields())
              {
    
      
                this.cb.CompPrefixCode = this.Prefix[0].CRBC_PREFIX
                this.cb.CounterId = this.CounterData.COUNTER_ID
                this.cb.SctId = this.SectionData.SCT_ID
                this.cb.CustId = this.SelectedCustomers[0].CUST_ID
                this.cb.PartyName = this.CustomersName[0]
                this.cb.CrbcDiscAmt = this.cb.CrbcDiscAmt==null||""||0?this.GetDiscountAmount():this.cb.CrbcDiscAmt
                this.cb.CrbcSettledAmt = this.cb.CrbcSettledAmt==null||""||0?this.GetSettledAmount():this.cb.CrbcSettledAmt
                this.cb.CrbcTotalAmt= this.cb.CrbcTotalAmt==null||""||0?this.GetNetAmount():this.cb.CrbcTotalAmt
                for(let i =0 ;i<this.CustomerPaymentList.length;i++)
                {
                  if(this.CustomerPaymentList[i].Checked==true)
                  {
                    this.cbd = new CRBillDtls()
                    this.cbd.CustId = this.CustomerPaymentList[i].SALE_CUSTOMER_ID
                    this.cbd.DiscAmt = this.CustomerPaymentList[i].SETTLED_DISC_AMT
                    this.cbd.PrevColAmt = this.CustomerPaymentList[i].SETTLED_AMT==null?0:this.CustomerPaymentList[i].SETTLED_AMT
                    this.cbd.SetAmt = this.CustomerPaymentList[i].Entered_settle_amt==null?0:this.CustomerPaymentList[i].Entered_settle_amt
                    this.cbd.Section = 'S'
                    this.cbd.TransId = this.CustomerPaymentList[i].SALE_ID
                    this.cbd.TransNo = this.CustomerPaymentList[i].SALE_BILL_NO
                    if(this.CustomerPaymentList[i].SALE_DATE!=null)
                    {
                      let d =this.datepipe.transform(this.CustomerPaymentList[i].SALE_DATE,'dd/MM/yyyy hh:mm:ss a')
                      this.cbd.TransDate = d??""
                    
                    }
                   this.cbd.TransAmt = this.CustomerPaymentList[i].SALE_NET_AMT
                    this.cb.crbilDetails.push(this.cbd)
    
    //                 PRMTRANS.SP_SAVE_APP_CRBILL_MASTER
    
    // PRMTRANS.GEN_CRBILL_COLLECTION_MASTER
    
    // PRMTRANS.SP_SAVE_APP_CRBILL_DETAILS
    
    // PRMTRANS.GEN_CRBILL_COLLECTION_DTLS
    
    
    // select * from PRMTRANS.GEN_CRBILL_COLLECTION_MASTER where CRBC_ID =121250000517
      
                  }
                }
              //   {
              //     "SCT_ID": 1210000001,
              //     "SECTION_TYPE": "1",
              //     "SECTION": "Sales",
              //     "SALE_DATE": "2024-12-23T12:08:12",
              //     "CUST_NAME": "ABBAS ARABI",
              //     "MANUAL_INVOICE_NO": "90214",
              //     "SALE_BILL_NO": "36567",
              //     "SALE_NET_AMT": 1233.31,
              //     "SETTLED_AMT": null,
              //     "SETTLED_DISC_AMT": 0,
              //     "SALE_CUSTOMER_ID": 1210000125,
              //     "SALE_ID": 121240038748
              // }
                
                await loading.present();
                this.comser.SaveAppCrBillMaster(this.cb).subscribe((data:any)=>{
                  loading.dismiss()
                  if(data)
                  {
                    if(data.Status==200)
                    {
                      Swal.fire('Bills Added SuccessFully','','success')
                      this.ClearAll()

                    }
                    else
                    {
                      Swal.fire(data.Mesage,'','warning')
                    }
                    
                  }
                },(error:any)=>{
                  loading.dismiss()
                })
          
              }
    
          }
          else
          {
            Swal.fire('Select Any bills to Submit','','warning')
          }

      }
      else
      {
        Swal.fire('Amount Miss match in payment details','','warning')
      }
     
    

    }
   
  }


 getTotal<T>(arr: T[], key: keyof T): number {
    return arr.reduce((sum, obj) => sum + (Number(obj[key]) || 0), 0);
}



GetAmountToPay(){
  let arr = this.CustomerPaymentList.filter((x:any)=>x.Checked==true)
  // console.log(arr);
  let total = (this.getTotal(arr,'Entered_settle_amt')).toFixed(3)
  
  // let disctot = this.cb.CrbcDiscAmt==null||undefined||""?0:this.cb.CrbcDiscAmt
  
  // let total = (Number(settleamttot) + Number(disctot)).toFixed(3)
  return total
  
}

GetDiscountAmount(){
  
  let arr = this.CustomerPaymentList.filter((x:any)=>x.Checked==true)
  let total = (this.getTotal(arr,'SETTLED_DISC_AMT')).toFixed(3)
  console.log(total);
  let val = Number(total)==0||null?this.cb.CrbcDiscAmt:total
  
  
  this.cb.CrbcDiscAmt=val
  console.log(this.cb.CrbcDiscAmt);
  
  return val
}

GetSettledAmount(){
  
  let arr = this.CustomerPaymentList.filter((x:any)=>x.Checked==true)
  let total = (this.getTotal(arr,'Entered_settle_amt')).toFixed(3)
  // let disctot = this.cb.CrbcDiscAmt==null||undefined||""?0:this.cb.CrbcDiscAmt
  // console.log(disctot);
  
  // let total = (Number(settleamttot) + Number(disctot)).toFixed(3)
  
  return total
}

GetNetAmount(){
  let arr = this.CustomerPaymentList.filter((x:any)=>x.Checked==true)
  let totalSettles = (this.getTotal(arr,'Entered_settle_amt')).toFixed(3)
  let totalDisc =this.Billtype=='bill'? (this.getTotal(arr,'SETTLED_DISC_AMT')).toFixed(3):this.cb.CrbcDiscAmt==null||undefined||""?0:this.cb.CrbcDiscAmt
  let tot =  Number(Number(totalSettles)-Number(totalDisc)).toFixed(3)
  return tot
}


async SearchInvoiceorBill(){
  if(this.SearchType!='Cust')
  {
    //logic for getting Bill wise 
    if(this.SearchType=='Bill')
    {
      await this.GetAppBillNoFlexFill(this.SectionData.SCT_ID,this.InvoiceBillNo,this.CurrentFinancialYear)
    }
    //logic for gettinf Invoice type
    else if(this.SearchType=='Invoice')
    {
      await this.GetManualInvoiceFlexFill(this.SectionData.SCT_ID,this.InvoiceBillNo,this.CurrentFinancialYear)
    }
  }
}

getFilteredCustomerPayments(): any[] {
  const query = this.searchQuery.toLowerCase().trim();
  if (!query) return this.CustomerPaymentList; // Return all if search is empty

  return this.CustomerPaymentList.filter(item =>
    Object.keys(item).some(key =>
      String(item[key]).toString().toLowerCase().includes(query)
    )
  );
}

GetCheckedListcount(){
  let da = this.CustomerPaymentList.filter((x:any)=>x.Checked==true)
  return da.length
}

RecievedAMoutInsert(event: any) {
  let val = Number(event.target.value);
  console.log(val);

  let ramt = parseFloat(val.toFixed(3)); // Changed from const to let
  console.log(this.CustomerPaymentListDup);
  
  this.CustomerPaymentList = JSON.parse(JSON.stringify(this.CustomerPaymentListDup))

  for (let i = 0; i < this.CustomerPaymentList.length; i++) {
    if (ramt > 0) {
      this.CustomerPaymentList[i].Checked = true;

      const enteredamt = Number(
        (this.CustomerPaymentList[i].SALE_NET_AMT ?? 0) -
        (this.CustomerPaymentList[i].SETTLED_DISC_AMT ?? 0) -
        (this.CustomerPaymentList[i].SETTLED_AMT ?? 0)
      );

      if (enteredamt <= ramt) {
        this.CustomerPaymentList[i].Entered_settle_amt = enteredamt.toFixed(3);
        ramt = parseFloat((ramt - enteredamt).toFixed(3)); // Ensure ramt stays a number
      } else {
        this.CustomerPaymentList[i].Entered_settle_amt = ramt.toFixed(3);
        ramt = 0; // Exit as remaining amount is settled
      }
    } else {
      break;
    }
  }
}


getPayableBalanceAMount(){
    let entered_settle_amt = Number((this.getTotal(this.CustomerPaymentList,'Entered_settle_amt'))- Number(this.cb.CrbcDiscAmt)).toFixed(3)
    // console.log(entered_settle_amt);
    let cashamt = Number(this.cb.PayCashAmt==null||undefined?0:this.cb.PayCashAmt).toFixed(3)
    let walletamt = Number(this.cb.PayWalletAmt==null||undefined?0:this.cb.PayWalletAmt).toFixed(3)//this.cb.PayWalletAmt
    let btamt = Number(this.cb.PayBankTransAmt==null||undefined?0:this.cb.PayBankTransAmt).toFixed(3)//this.cb.PayBankTransAmt
    let cheqamt =Number(this.cb.PayChqAmt==null||undefined?0:this.cb.PayChqAmt).toFixed(3)// this.cb.PayChqAmt
    let cardamt = Number(this.cb.PayCcAmt==null||undefined?0:this.cb.PayCcAmt).toFixed(3)//this.cb.
    let payemntmodeamt = Number(Number(cashamt)+Number(walletamt)+Number(btamt)+Number(cheqamt)+Number(cardamt)).toFixed(3)
    // console.log(payemntmodeamt);
    
    
    const tot = Number(Number(entered_settle_amt) - Number(payemntmodeamt)).toFixed(3)
    return Number(tot)
    
}


}
