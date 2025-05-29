import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AppConfig } from 'src/class/AppConfig';
import { AuthService } from './auth.service';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  getItem(Fromd: any, Tod: any) {
    throw new Error('Method not implemented.');
  }
  GetCustomerOutstanding(fd: any, td: any) {
    throw new Error('Method not implemented.');
  }
  GetSupplierOutstanding(fd: any, td: any) {
    throw new Error('Method not implemented.');
  }
  appconfig =new AppConfig()
  decryptiondata:any

  

  constructor(private http:HttpClient,private authser:AuthService,private loadingCtrl:LoadingController,
    private datePipe:DatePipe,private router:Router) { }

    GetDecryptedData(){
      this.decryptiondata= this.authser.DecryptToken()
      }
      CheckForUnAuthorised(error:any){
        if(error.status==401)
        {
          // window.location.reload()
          // localStorage.clear()
          // this.router.navigate(['login'])
          
      this.authser.Logoutfn()
        }
    
      }

      GetSalesDetails(fromDate:any,toDate:any){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetSalesDetails?fromDate='+fromDate+'&toDate='+toDate, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetAppCustFlexFill:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }

      GetBillwiseSale(fromDate:any,toDate:any){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetBillwiseSale?fromDate='+fromDate+'&toDate='+toDate, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetBillwiseSale:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }

      GetItemwiseSale(fromDate:any,toDate:any){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetItemwiseSale?fromDate='+fromDate+'&toDate='+toDate, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetItemwiseSale:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }

      GetItemCategorywiseSale(fromDate:any,toDate:any){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetItemCategorywiseSale?fromDate='+fromDate+'&toDate='+toDate, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetBGetItemCategorywiseSaleillwiseSale:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }

      GetCounterwiseCollection(fromDate:any,toDate:any){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetCounterwiseCollection?fromDate='+fromDate+'&toDate='+toDate, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetCounterwiseCollection:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }

      GetPurchasewise(fromDate:any,toDate:any){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetPurchasewise?fromDate='+fromDate+'&toDate='+toDate, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetPurchasewise:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }


      GetPurchaseSummary(fromDate:any,toDate:any){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetPurchaseSummary?fromDate='+fromDate+'&toDate='+toDate, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetPurchasewise:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }


      GetPurchaseItemCategorywise(fromDate:any,toDate:any){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetPurchaseItemCategorywise?fromDate='+fromDate+'&toDate='+toDate, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetPurchasewise:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }
      // GetBillwiseSale

      GetPurchaseItemwise(fromDate:any,toDate:any){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetPurchaseItemwise?fromDate='+fromDate+'&toDate='+toDate, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetPurchaseItemwise:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }



      GetPurchasevendorwise(fromDate:any,toDate:any){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetPurchasevendorwise?fromDate='+fromDate+'&toDate='+toDate, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetPurchasevendorwise:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }

      GetProfitBreakup(fromDate:any,toDate:any){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetProfitBreakup?fromDate='+fromDate+'&toDate='+toDate, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetPurchasevendorwise:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }
      

      GetStockBreakup(){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetStockBreakup', options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetStockBreakup:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }

      GetProitItemWise(fromDate:any,toDate:any){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetProitItemWise?fromDate='+fromDate+'&toDate='+toDate, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetProitItemWise:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }

      GetStockItemWise(){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetStockItemWise', options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetStockItemWise:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }

      GetVendorWiseProfit(fromDate:any,toDate:any){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetVendorWiseProfit?fromDate='+fromDate+'&toDate='+toDate, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetVendorWiseProfit:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }

      GetOnlineProfitCategoryWise(fromDate:any,toDate:any){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetOnlineProfitCategoryWise?fromDate='+fromDate+'&toDate='+toDate, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetOnlineProfitCategoryWise:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }

      GetCateWiseStock(){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetCateWiseStock', options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetCateWiseStock:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }

      GetVendorWiseStock(){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetVendorWiseStock', options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetVendorWiseStock:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }
      
      GetItemwise(fromDate:any,toDate:any){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetItemwise?fromDate='+fromDate+'&toDate='+toDate, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetItemwise:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }

      GetItemwiseDetails(fromDate:any,toDate:any,itemid:any){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetItemwiseDetails?fromDate='+fromDate+'&toDate='+toDate+'&itemid='+itemid, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetItemwise:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }

      GetItemwiseMonthPivot(fromDate:any, toDate:any,MonthList:any,SctId:any){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetItemwiseMonthPivot?fromDate='+fromDate+'&toDate='+toDate+'&MonthList='+MonthList+'&SctId='+SctId, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetItemwise:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }
      GetCustomerwiseMonthPivot(fromDate:any, toDate:any,MonthList:any,SctId:any){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetCustomerwiseMonthPivot?fromDate='+fromDate+'&toDate='+toDate+'&MonthList='+MonthList+'&SctId='+SctId, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetCustomerwiseMonthPivot:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }
      GetGroupwiseMonthPivot(fromDate:any, toDate:any,MonthList:any,SctId:any){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetGroupwiseMonthPivot?fromDate='+fromDate+'&toDate='+toDate+'&MonthList='+MonthList+'&SctId='+SctId, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetGroupwiseMonthPivot:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }
      GetItemwiseMonth(fromDate:any,toDate:any,SctId:any){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetItemwiseMonth?fromDate='+fromDate+'&toDate='+toDate+'&SctId='+SctId, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetItemwise:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }
      GetCustomerwiseMonth(fromDate:any,toDate:any,SctId:any){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetCustomerwiseMonth?fromDate='+fromDate+'&toDate='+toDate+'&SctId='+SctId, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetCustomerwiseMonth:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }
      GetGroupwiseMonth(fromDate:any,toDate:any,SctId:any){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetGroupwiseMonth?fromDate='+fromDate+'&toDate='+toDate+'&SctId='+SctId, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetCustomerwiseMonth:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }


      GetCustomerwise(fromDate:any,toDate:any){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetCustomerwise?fromDate='+fromDate+'&toDate='+toDate, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetCustomerwise:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }

      GetCustomerwiseDetails(fromDate:any,toDate:any,customerid:any){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetCustomerwiseDetails?fromDate='+fromDate+'&toDate='+toDate+'&customerid='+customerid, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetCustomerwiseDetails:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }

      Getonepartyallitemwise(fromDate:any,toDate:any,custid:any,SctId:any){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetOnepartyitemwise?fromDate='+fromDate+'&toDate='+toDate+'&custid='+custid+'&SctId='+SctId, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in Getonepartyallitemwise:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }
      GetCustomer(fromDate:any,toDate:any) 
      {
      
        this.GetDecryptedData()
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetCustomer?fromDate='+ fromDate+'&toDate='+toDate, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetCustomer:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }
      GetCust(fromDate:any,toDate:any) 
      {
      
        this.GetDecryptedData()
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetCustomer?fromDate='+ fromDate+'&toDate='+toDate, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetCustomer:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }
      
      GetCreditbill(fromDate:any,toDate:any,custid:any){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Common/GetCreditbill?fromDate='+fromDate+'&toDate='+toDate+'&custid='+custid, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetCreditbill:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }
      GetCreditbillSettled(fromDate:any,toDate:any,custid:any){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Common/GetCreditbillSettled?fromDate='+fromDate+'&toDate='+toDate+'&custid='+custid, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetCreditbillSettled:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }
      
      
      GetOnepartyitemwiseDetails(fromDate:any,toDate:any,custid:any,itemid:any,SctId:any){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetOnepartyitemwiseDetails?fromDate='+fromDate+'&toDate='+toDate+'&custid='+custid+'&itemid='+itemid+'&SctId='+SctId, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetCustomerwiseDetails:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }

      GetItemGroupwise(fromDate:any,toDate:any){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetItemGroupwise?fromDate='+fromDate+'&toDate='+toDate, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetItemGroupwise:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }

      GetItemGroupwiseDetails(fromDate:any,toDate:any,groupid:any,monthlst:any){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetItemGroupwiseDetails?fromDate='+fromDate+'&toDate='+toDate+'&groupid='+groupid+'&monthList='+monthlst, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetItemGroupwise:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }

      

      GetSalesItemDetails(fromDate:any,toDate:any,itemid:any){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetSalesItemDetails?fromDate='+fromDate+'&toDate='+toDate+'&itemid='+itemid, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetItemGroupwise:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }

      Getoneitemallparty(fromDate: any, toDate: any, itemid: any, sctid: any){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetOneitemAllparties?fromDate='+fromDate+
          '&toDate='+toDate+'&itemid='+itemid+'&sctid='+sctid, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetOneitemwAllparties:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }

      GetItem(fromDate: any, toDate: any) // SctId: any, itemid: any
      {
      
        this.GetDecryptedData()
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetItem?fromDate='+fromDate+'&toDate='+toDate, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetItem:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }

      GetDepartment() 
      {
      
        this.GetDecryptedData()
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetDepartment', options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetDepartment:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }



      GetCustomerOutStanding(fromDate:any,toDate:any,SctId:any){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetCustomerOutstanding?fromDate='+fromDate+'&toDate='+toDate+'&SctId='+SctId, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetCustomerOutstanding:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }

      GetCustomerSales(fromDate:any,toDate:any,SctId:any){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetCustomerSales?fromDate='+fromDate+'&toDate='+toDate+'&SctId='+SctId, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetCustomerOutstanding:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }
      

      GetCustomerCollection(fromDate:any,toDate:any,SctId:any){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetCustomerCollection?fromDate='+fromDate+'&toDate='+toDate+'&SctId='+SctId, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetCustomerOutstanding:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }

      GetCustomerBalance(fromDate:any,toDate:any,SctId:any){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetCustomerBalance?fromDate='+fromDate+'&toDate='+toDate+'&SctId='+SctId, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetCustomerBalance:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }





      GetSupplierOutStanding(fromDate:any,toDate:any,SctId:any){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetSupplierOutstanding?fromDate='+fromDate+'&toDate='+toDate+'&SctId='+SctId, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetCustomerOutstanding:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }

      GetSupplierPurchases(fromDate:any,toDate:any,SctId:any){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetSupplierPurchases?fromDate='+fromDate+'&toDate='+toDate+'&SctId='+SctId, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetSupplierPurchases:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }
      

      GetSupplierPayment(fromDate:any,toDate:any,SctId:any){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetSupplierPayment?fromDate='+fromDate+'&toDate='+toDate+'&SctId='+SctId, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetSupplierPayment:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }

      GetSupplierBalance(fromDate:any,toDate:any,SctId:any){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetSupplierBalance?fromDate='+fromDate+'&toDate='+toDate+'&SctId='+SctId, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetSupplierBalance:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }


      GetProfitMarginLC(fromDate:any,toDate:any,SctId:any){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetProfitMarginLC?fromDate='+fromDate+'&toDate='+toDate+'&SctId='+SctId, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetProfitMarginLC:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }


      GetCustomerAging(fromDate: any, toDate: any, CustId: any, sctid: any){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetCustomerAging?fromDate='+fromDate+
          '&toDate='+toDate+'&CustId='+CustId+'&sctid='+sctid, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetOneitemwAllparties:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }


      GetCustomerAgingDtls(fromDate: any, toDate: any, CustId: any, sctid: any){

        this.GetDecryptedData() 
        let headers = new HttpHeaders();
        headers.set("Accept", 'application/json');
        headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
        let options ={ headers: headers };
        return this.http.get(this.appconfig.url + '/Sales/GetCustAgingDtls?fromDate='+fromDate+
          '&toDate='+toDate+'&CustId='+CustId+'&sctid='+sctid, options)
        .pipe(
          
          catchError((error: any) => {
            this.CheckForUnAuthorised(error)
            // Handle the error here or rethrow it as needed
            console.error('Error in GetCustomerAgingDtls:', error);
            return throwError(error); // Rethrow the error
          })
        );
      }
}
