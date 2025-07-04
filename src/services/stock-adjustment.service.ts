import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from 'src/class/AppConfig';
import { AuthService } from './auth.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockAdjustmentService {
  appconfig =new AppConfig()
  decryptiondata:any

  

  constructor(private http:HttpClient,private authser:AuthService,private loadingCtrl:LoadingController,
    private datePipe:DatePipe,private router:Router) { }


  GetDecryptedData(){
    this.decryptiondata= this.authser.DecryptToken()
    }

    GetActiveItemNames() 
    {
    
      this.GetDecryptedData()
      let headers = new HttpHeaders();
      headers.set("Accept", 'application/json');
      headers.set('Content-Type', 'application/json');
      headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
      let options ={ headers: headers };
      return this.http.get(this.appconfig.url + '/StockAdjustment/GetActiveItemNames', options)
      .pipe(
        
        catchError((error: any) => {
          this.authser.CheckForUnAuthorised(error)
          
          // Handle the error here or rethrow it as needed
          console.error('Error in GetActiveItemNames:', error);
          return throwError(error); // Rethrow the error
        })
      );
    }


     GetStockTakingDateRangeAsync() 
    {
    
      this.GetDecryptedData()
      let headers = new HttpHeaders();
      headers.set("Accept", 'application/json');
      headers.set('Content-Type', 'application/json');
      headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
      let options ={ headers: headers };
      return this.http.get(this.appconfig.url + '/StockAdjustment/GetStockTakingDateRangeAsync', options)
      .pipe(
        
        catchError((error: any) => {
          this.authser.CheckForUnAuthorised(error)
          
          // Handle the error here or rethrow it as needed
          console.error('Error in GetActiveItemNames:', error);
          return throwError(error); // Rethrow the error
        })
      );
    }

      GetCurrentFinancialYearSettingsAsync() 
    {
    
      this.GetDecryptedData()
      let headers = new HttpHeaders();
      headers.set("Accept", 'application/json');
      headers.set('Content-Type', 'application/json');
      headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
      let options ={ headers: headers };
      return this.http.get(this.appconfig.url + '/StockAdjustment/GetCurrentFinancialYearSettingsAsync', options)
      .pipe(
        
        catchError((error: any) => {
          this.authser.CheckForUnAuthorised(error)
          
          // Handle the error here or rethrow it as needed
          console.error('Error in GetCurrentFinancialYearSettingsAsync:', error);
          return throwError(error); // Rethrow the error
        })
      );
      }


      SaveStockAdjustmentAsync(a:any) 
    {
    
      this.GetDecryptedData()
      let headers = new HttpHeaders();
      headers.set("Accept", 'application/json');
      headers.set('Content-Type', 'application/json');
      headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
      let options ={ headers: headers };
      return this.http.post(this.appconfig.url + '/StockAdjustment/SaveStockAdjustmentAsync', a,options)
      .pipe(
        
        catchError((error: any) => {
          this.authser.CheckForUnAuthorised(error)
          
          // Handle the error here or rethrow it as needed
          console.error('Error in GetCurrentFinancialYearSettingsAsync:', error);
          return throwError(error); // Rethrow the error
        })
      );
      }

    
    


    GetItemDetailsAsync(startDate:any,sctId:any,slctNull:any,getValue:any,searchBy:any,barcodeType:any){

  this.GetDecryptedData() 
  let headers = new HttpHeaders();
  headers.set("Accept", 'application/json');
  headers.set('Content-Type', 'application/json');
  headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata); 
  let options ={ headers: headers };
  return this.http.get(this.appconfig.url + '/StockAdjustment/GetItemDetailsAsync?startDate='+startDate+'&sctId='+sctId+'&slctNull='+slctNull+'&getValue='+getValue+'&searchBy='+searchBy+'&barcodeType='+barcodeType, options)
  .pipe(
    
    catchError((error: any) => {
      this.authser.CheckForUnAuthorised(error)
      // Handle the error here or rethrow it as needed
      console.error('Error in GenerateCRBillRefNo:', error);
      return throwError(error); // Rethrow the error
    })
  );
    }

}
