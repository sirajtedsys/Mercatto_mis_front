import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { BehaviorSubject, catchError, retry, throwError } from 'rxjs';
// import { AppConfig } from 'src/Class/AppConfig';
import { AuthService } from './auth.service';
import { LoadingController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
// import { AppConfig } from 'src/class/AppConfig';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AppConfig } from 'src/class/AppConfig';
import { BehaviorSubject, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  appconfig =new AppConfig()
  decryptiondata:any

  

  constructor(private http:HttpClient,private authser:AuthService,private loadingCtrl:LoadingController,
    private datePipe:DatePipe,private router:Router) { }
  isLoading:boolean=false
  async presentLoading() {
    this.isLoading = true;
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
      message: 'Loading...', // Optional: Custom message
      spinner: 'dots', // Optional: Choose a spinner
      // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
    });
    await loading.present();

    // Uncomment below line to auto-hide the loader after 2 seconds (duration)
    // setTimeout(() => loading.dismiss(), 2000);
  }

  CheckForUnAuthorised(error:any){
    if(error.status==401)
    {
      // window.location.reload()
      // localStorage.clear()
      
      // this.router.navigate(['login'])
      // this.logoutfn
      this.authser.Logoutfn()
    }

  }

  async dismissLoading() {
    this.isLoading = false;
    await this.loadingCtrl.dismiss();
  }

  formatDate(date: string): string {
    const transformedDate = this.datePipe.transform(date, 'yyyy-MM-dd');
    return transformedDate ? transformedDate : ''; // Handle null case
  }

  //mob view sibe bar
  private mobsidebarStateSubject = new BehaviorSubject<boolean>(false); // false = collapsed, true = expanded
  mobsidebarState$ = this.mobsidebarStateSubject.asObservable();

  togglemobSidebar() {
    this.mobsidebarStateSubject.next(!this.mobsidebarStateSubject.value);
  }

  setmobSidebarState(state: boolean) {
    this.mobsidebarStateSubject.next(state);
  }

  //desk vieew sidebar
  private sidebarStateSubject = new BehaviorSubject<boolean>(true); // false = collapsed, true = expanded
  sidebarState$ = this.sidebarStateSubject.asObservable();

  toggleSidebar() {
    this.sidebarStateSubject.next(!this.sidebarStateSubject.value);
  }

  setSidebarState(state: boolean) {
    this.sidebarStateSubject.next(state);
  }




  GetDecryptedData(){
    this.decryptiondata= this.authser.DecryptToken()
    }

    calculateAge(dob: string): number {
      const birthDate = new Date(dob);
      // console.log(birthDate);
      
      const today = new Date();
      
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();
  
      if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
          age--;
      }
      // console.log(age);
      
      return age;
    }

    isValidEmail(email: string): boolean {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }
    isUrlOrIp(input: string): boolean {
      // Updated regular expression for URLs, including localhost and optional port numbers
      const urlRegex = /^(https?:\/\/)?((localhost|[a-zA-Z0-9-]+\.[a-zA-Z]{2,})|(\d{1,3}\.){3}\d{1,3})(:\d+)?(\/.*)?$/;
    
      // Regular expression for IPv4 addresses
      const ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    
      // Check if the input matches either the updated URL regex or the IP regex
      return urlRegex.test(input) || ipRegex.test(input);
    }

    hasSpaces(input: string): boolean {
      return /\s/.test(input); // Returns true if any whitespace is found
  }
   isStringNumeric(input: string): boolean {
    // Use a regular expression to check if the string contains only digits
    return /^\d+$/.test(input);
  }

    isValidUrl(input: string): boolean {
      const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/;
      return urlRegex.test(input);
    }
  
    // Method to check if the string is an IP address
    isValidIp(input: string): boolean {
      const ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
      return ipRegex.test(input);
    }
    

  LoginCheck(Username:string,password:string) 
  {
  let cred={
      UserName:Username,
      Password:password

    }
    let headers = new HttpHeaders();
    headers.set("Accept", 'application/json');
    headers.set('Content-Type', 'application/json');
    // headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
    let options ={ headers: headers };
    return this.http.post(this.appconfig.url + '/Common/CheckLogin',cred, options)
    .pipe(
        
      catchError((error: any) => {
        // alert(error)
        console.log(error);
        
        // Handle the error here or rethrow it as needed
        console.error('Error in LoginCheck:', error);
        return throwError(error); // Rethrow the error
      })
    );
}


GetAppEmpWiseSct() 
{

  this.GetDecryptedData()
  let headers = new HttpHeaders();
  headers.set("Accept", 'application/json');
  headers.set('Content-Type', 'application/json');
  headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
  let options ={ headers: headers };
  return this.http.get(this.appconfig.url + '/Common/GetAppEmpWiseSct', options)
  .pipe(
    
    catchError((error: any) => {
      this.CheckForUnAuthorised(error)
      
      // Handle the error here or rethrow it as needed
      console.error('Error in GetAppEmpWiseSct:', error);
      return throwError(error); // Rethrow the error
    })
  );
}

GetUserDetails() 
{

  this.GetDecryptedData()
  let headers = new HttpHeaders();
  headers.set("Accept", 'application/json');
  headers.set('Content-Type', 'application/json');
  headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
  let options ={ headers: headers };
  return this.http.get(this.appconfig.url + '/Common/GetUserDetails', options)
  .pipe(
    
    catchError((error: any) => {
      this.CheckForUnAuthorised(error)
      
      // Handle the error here or rethrow it as needed
      console.error('Error in GetUserDetails:', error);
      return throwError(error); // Rethrow the error
    })
  );
}
// GetAppEmpWiseSct








getAllCustomers() 
{

  this.GetDecryptedData()
  let headers = new HttpHeaders();
  headers.set("Accept", 'application/json');
  headers.set('Content-Type', 'application/json');
  headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
  let options ={ headers: headers };
  return this.http.get(this.appconfig.url + '/Common/GetAppCustomer', options)
  .pipe(
    
    catchError((error: any) => {
      this.CheckForUnAuthorised(error)
      // Handle the error here or rethrow it as needed
      console.error('Error in getAllClients:', error);
      return throwError(error); // Rethrow the error
    })
  );
}

getAllFinanceYear() 
{

  this.GetDecryptedData()
  let headers = new HttpHeaders();
  headers.set("Accept", 'application/json');
  headers.set('Content-Type', 'application/json');
  headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
  let options ={ headers: headers };
  return this.http.get(this.appconfig.url + '/Common/GetAppFinYear', options)
  .pipe(
    
    catchError((error: any) => {
      this.CheckForUnAuthorised(error)
      // Handle the error here or rethrow it as needed
      console.error('Error in GetAppFinYear:', error);
      return throwError(error); // Rethrow the error
    })
  );
}

GetCreditbillSettings() 
{

  this.GetDecryptedData()
  let headers = new HttpHeaders();
  headers.set("Accept", 'application/json');
  headers.set('Content-Type', 'application/json');
  headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
  let options ={ headers: headers };
  return this.http.get(this.appconfig.url + '/Common/GetCreditbillSettings', options)
  .pipe(
    
    catchError((error: any) => {
      this.CheckForUnAuthorised(error)
      // Handle the error here or rethrow it as needed
      console.error('Error in GetAppWallet:', error);
      return throwError(error); // Rethrow the error
    })
  );
}


GetAppWallet() 
{

  this.GetDecryptedData()
  let headers = new HttpHeaders();
  headers.set("Accept", 'application/json');
  headers.set('Content-Type', 'application/json');
  headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
  let options ={ headers: headers };
  return this.http.get(this.appconfig.url + '/Common/GetAppWallet', options)
  .pipe(
    
    catchError((error: any) => {
      this.CheckForUnAuthorised(error)
      // Handle the error here or rethrow it as needed
      console.error('Error in GetAppWallet:', error);
      return throwError(error); // Rethrow the error
    })
  );
}

GetAppBank() 
{

  this.GetDecryptedData()
  let headers = new HttpHeaders();
  headers.set("Accept", 'application/json');
  headers.set('Content-Type', 'application/json');
  headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
  let options ={ headers: headers };
  return this.http.get(this.appconfig.url + '/Common/GetAppBank', options)
  .pipe(
    
    catchError((error: any) => {
      this.CheckForUnAuthorised(error)
      // Handle the error here or rethrow it as needed
      console.error('Error in GetAppBank:', error);
      return throwError(error); // Rethrow the error
    })
  );
}

GetCRBCPrefix() 
{

  this.GetDecryptedData()
  let headers = new HttpHeaders();
  headers.set("Accept", 'application/json');
  headers.set('Content-Type', 'application/json');
  headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
  let options ={ headers: headers };
  return this.http.get(this.appconfig.url + '/Common/GetCRBCPrefix', options)
  .pipe(
    
    catchError((error: any) => {
      this.CheckForUnAuthorised(error)
      // Handle the error here or rethrow it as needed
      console.error('Error in GetCRBCPrefix:', error);
      return throwError(error); // Rethrow the error
    })
  );
}


GetSectionCounterDetails(Sect:string){

  this.GetDecryptedData() 
  let headers = new HttpHeaders();
  headers.set("Accept", 'application/json');
  headers.set('Content-Type', 'application/json');
  headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
  let options ={ headers: headers };
  return this.http.get(this.appconfig.url + '/Common/GetSectionCounterDetails?sectionId='+Sect, options)
  .pipe(
    
    catchError((error: any) => {
      this.CheckForUnAuthorised(error)
      // Handle the error here or rethrow it as needed
      console.error('Error in changeClientStatus:', error);
      return throwError(error); // Rethrow the error
    })
  );
}




SaveAppCrBillMaster(cbill:any){

  this.GetDecryptedData() 
  let headers = new HttpHeaders();
  headers.set("Accept", 'application/json');
  headers.set('Content-Type', 'application/json');
  headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
  let options ={ headers: headers };
  return this.http.post(this.appconfig.url + '/Common/SaveAppCrBillMaster',cbill, options)
  .pipe(
    
    catchError((error: any) => {
      this.CheckForUnAuthorised(error)
      // Handle the error here or rethrow it as needed
      console.error('Error in changeClientStatus:', error);
      return throwError(error); // Rethrow the error
    })
  );
}


GetAppCustBranch(mainCustId:string){

  this.GetDecryptedData() 
  let headers = new HttpHeaders();
  headers.set("Accept", 'application/json');
  headers.set('Content-Type', 'application/json');
  headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
  let options ={ headers: headers };
  return this.http.get(this.appconfig.url + '/Common/GetAppCustBranch?mainCustId='+mainCustId, options)
  .pipe(
    
    catchError((error: any) => {
      this.CheckForUnAuthorised(error)
      // Handle the error here or rethrow it as needed
      console.error('Error in changeClientStatus:', error);
      return throwError(error); // Rethrow the error
    })
  );
}

GetAppCustFlexFill(sctId:string,filterCust:string){

  this.GetDecryptedData() 
  let headers = new HttpHeaders();
  headers.set("Accept", 'application/json');
  headers.set('Content-Type', 'application/json');
  headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
  let options ={ headers: headers };
  return this.http.get(this.appconfig.url + '/Common/GetAppCustFlexFill?sctId='+sctId+'&filterCust='+filterCust, options)
  .pipe(
    
    catchError((error: any) => {
      this.CheckForUnAuthorised(error)
      // Handle the error here or rethrow it as needed
      console.error('Error in GetAppCustFlexFill:', error);
      return throwError(error); // Rethrow the error
    })
  );
}

// GetManualInvoiceFlexFill(string sctId, string manualInvNo,int finYearID)
GetManualInvoiceFlexFill(sctId:string,manualInvNo:string,finYearID:any){

  this.GetDecryptedData() 
  let headers = new HttpHeaders();
  headers.set("Accept", 'application/json');
  headers.set('Content-Type', 'application/json');
  headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
  let options ={ headers: headers };
  return this.http.get(this.appconfig.url + '/Common/GetManualInvoiceFlexFill?sctId='+sctId+'&manualInvNo='+manualInvNo+'&finYearID='+finYearID, options)
  .pipe(
    
    catchError((error: any) => {
      this.CheckForUnAuthorised(error)
      // Handle the error here or rethrow it as needed
      console.error('Error in GetManualInvoiceFlexFill:', error);
      return throwError(error); // Rethrow the error
    })
  );
}


GetAppBillNoFlexFill(sctId:string,BillNO:string,finYearID:any){

  this.GetDecryptedData() 
  let headers = new HttpHeaders();
  headers.set("Accept", 'application/json');
  headers.set('Content-Type', 'application/json');
  headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
  let options ={ headers: headers };
  return this.http.get(this.appconfig.url + '/Common/GetAppBillNoFlexFill?sctId='+sctId+'&BillNO='+BillNO+'&finYearID='+finYearID, options)
  .pipe(
    
    catchError((error: any) => {
      this.CheckForUnAuthorised(error)
      // Handle the error here or rethrow it as needed
      console.error('Error in GetManualInvoiceFlexFill:', error);
      return throwError(error); // Rethrow the error
    })
  );
}
GetCompanyFinYearDetails() 
{

  this.GetDecryptedData()
  let headers = new HttpHeaders();
  headers.set("Accept", 'application/json');
  headers.set('Content-Type', 'application/json');
  headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
  let options ={ headers: headers };
  return this.http.get(this.appconfig.url + '/Common/GetCompanyFinYearDetails', options)
  .pipe(
    
    catchError((error: any) => {
      this.CheckForUnAuthorised(error)
      // Handle the error here or rethrow it as needed
      console.error('Error in GetCompanyFinYearDetails:', error);
      return throwError(error); // Rethrow the error
    })
  );
}

// int compID, int finYearID, string compCode, string finYearCode, int sctID

GenerateCRBillRefNo(compID:any,finYearID:any,compCode:any,finYearCode:any,sctID:any){

  this.GetDecryptedData() 
  let headers = new HttpHeaders();
  headers.set("Accept", 'application/json');
  headers.set('Content-Type', 'application/json');
  headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
  let options ={ headers: headers };
  return this.http.get(this.appconfig.url + '/Common/GenerateCRBillRefNo?compID='+compID+'&finYearID='+finYearID+'&compCode='+compCode+'&finYearCode='+finYearCode+'&sctID='+sctID, options)
  .pipe(
    
    catchError((error: any) => {
      this.CheckForUnAuthorised(error)
      // Handle the error here or rethrow it as needed
      console.error('Error in GenerateCRBillRefNo:', error);
      return throwError(error); // Rethrow the error
    })
  );
}




InsertClients(client:any) 
{

  this.GetDecryptedData()
  let headers = new HttpHeaders();
  headers.set("Accept", 'application/json');
  headers.set('Content-Type', 'application/json');
  headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
  let options ={ headers: headers };
  return this.http.post(this.appconfig.url + '/Client/InsertClients',client, options)
  .pipe(
    
    catchError((error: any) => {
      this.CheckForUnAuthorised(error)
      // Handle the error here or rethrow it as needed
      console.error('Error in InsertClients:', error);
      return throwError(error); // Rethrow the error
    })
  );
}


changeClientStatus(cid:number,stat:number){

  this.GetDecryptedData() 
  let headers = new HttpHeaders();
  headers.set("Accept", 'application/json');
  headers.set('Content-Type', 'application/json');
  headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
  let options ={ headers: headers };
  return this.http.get(this.appconfig.url + '/Client/changeClientStatus?Cid='+cid+'&Status='+stat, options)
  .pipe(
    
    catchError((error: any) => {
      this.CheckForUnAuthorised(error)
      // Handle the error here or rethrow it as needed
      console.error('Error in changeClientStatus:', error);
      return throwError(error); // Rethrow the error
    })
  );
}


}
