import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, Platform } from '@ionic/angular';
import { CommonService } from 'src/services/common.service';
// import { CommonService } from 'src/services/common.service';
import Swal from 'sweetalert2';
// import { Device } from '@awesome-cordova-plugins/device/ngx';
import { AuthService } from 'src/services/auth.service';


declare var macaddress: any;
@Component({
  selector: 'app-enter-url',
  templateUrl: './enter-url.page.html',
  styleUrls: ['./enter-url.page.scss'],
  standalone:false
})
export class EnterUrlPage implements OnInit,OnDestroy {

  Url:any=''
  ur:string='http://'
  CompleteUrl:string=''
  LocationList:any[]=[]
  Location:number=0
  Deviceid:any
  DevName:string=''
  Fcm_token:string='FCM_TOKEN'
 
  storedUrl: string | null =null;
  ViewType:string='config'  //config //Location

  

  constructor(
    private comser:CommonService,
    private router:Router,
    private loader:LoadingController,
    // private device:Device,
    private platform:Platform,
    private authser:AuthService
  
  
  ) {
    this.CheckEmployeeAlreadyLogined()
    // this.GetAllLocations()
    
    // this.GetDeviceID()
   }

  ngOnInit() {
    // this.GetDeviceID()
    this.platform.ready().then(() => {
      // this.GetDeviceID();
    });
  }

  // GetDeviceID() {
  //   if (this.platform.is('cordova')) {
  //     // Running on a real device
  //     console.log('Device UUID:', this.device.uuid);
  //     Swal.fire( this.device.uuid)
  //     this.Deviceid = this.device.uuid || 'Unknown';
  //   } else {
  //     // Running in a browser (Cordova not available)
  //     console.warn('Cordova is not available. Generating a random ID.');
  //     this.Deviceid ='browser'
  //   }
  // }



 

  // GetDeviceID() {
  //   if (this.platform.is('cordova')) {
  //     // Running on a real device
  //     console.log('Device UUID:', this.device.uuid);
  //     Swal.fire(this.device.uuid);
  //     this.Deviceid = this.device.uuid || 'Unknown';
  //   } else {
  //     // Running in a browser or PC
  //     console.warn('Cordova is not available. Fetching MAC address.');

  //     if (typeof macaddress !== 'undefined') {
  //       macaddress.getMacAddress(
  //         (mac:any) => {
  //           console.log('MAC Address:', mac);
  //           Swal.fire(`MAC Address: ${mac}`);
  //           this.Deviceid = mac;
  //         },
  //         (error:any) => {
  //           console.error('Error getting MAC Address:', error);
  //           this.Deviceid = 'Unknown';
  //         }
  //       );
  //     } else {
  //       console.warn('MAC Address plugin not available.');
  //       this.Deviceid = 'Unknown';
  //     }
  //   }
  // }

  AddUrl() {
    if (this.Url && this.comser.isUrlOrIp(this.Url)) {
      let compurl = this.ur+this.Url
      this.CompleteUrl = compurl
      localStorage.setItem('mercattomisurl', compurl);
      window.location.reload()
      // this.router.navigate(['login'])
      this.ViewType='Location'
      // reload()
    } else {
      Swal.fire(
        this.CompleteUrl ? 'Enter a Valid Url or IP' : 'Please enter a valid URL to confirm',
        '',
        'warning'
      );
    }
  }


  CheckDeviceConfigurationinLocalStorage(){
    if(localStorage.getItem('DeviceConfig'))
    {
      let decrypted = localStorage.getItem('DeviceConfig')
      if(decrypted!=null)
      {

        let data  = this.authser.Decrypt(decrypted)
        
      this.Deviceid = data.DeviceId
      this.DevName = data.DeviceName
      this.Location = data.Location
      this.Fcm_token = data.FcmToken

      Swal.fire({
        title: 'Existing Configuration Found',
        text: `Do you want to continue with the saved Device (${this.DevName}) or change it?`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Continue',
        cancelButtonText: 'Change Device Configuration',
        backdrop:false
      }).then((result) => {
        if (result.isConfirmed) {
          // Safely call continueWithUrl with a non-null string
          this.continueWithUrl(this.storedUrl); 
        } else {
          // If user chooses to change, prompt to enter a new URL
          // this.promptForNewUrl();
          // this.CompleteUrl = (this.storedUrl)?.toString()
          if(this.storedUrl!=null)
          {
            this.ViewType='Location'
  
  
          }
        }
      });
      
    }

    }
    else
    {
      Swal.fire('Device Configuration not found','','warning')
      
      this.ViewType='Location'
    }
  
  }

 
  checkUrlInLocalStorage() {
      if(localStorage.getItem('mercattomisurl'))
      {

        this.storedUrl = localStorage.getItem('mercattomisurl'); 
      }// Check if there's a URL in localStorage
  
    if (this.storedUrl) {
      // If URL exists in localStorage, prompt the user
      Swal.fire({
        title: 'Stored URL Found',
        text: `Do you want to continue with the saved URL (${this.storedUrl}) or change it?`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Continue',
        cancelButtonText: 'Change URL',
        backdrop:false
      }).then((result) => {
        if (result.isConfirmed) {
          // Safely call continueWithUrl with a non-null string
          this.continueWithUrl(this.storedUrl); 
          // this.CheckDeviceConfigurationinLocalStorage()
        } else {
          // If user chooses to change, prompt to enter a new URL
          // this.promptForNewUrl();
          // this.CompleteUrl = (this.storedUrl)?.toString()
          if(this.storedUrl!=null)
          {
            this.Url=this.extractIPWithPort(this.storedUrl)
            
            let ur = (this.extractProtocol(this.storedUrl)==null?'http://':this.extractProtocol(this.storedUrl)+'://')
            // if(ur!=null)
            // {
              this.ur = ur

            // }


          }
        }
      });
    }else
    {

    }
  }

  extractProtocol(url: string): string | null {
    const match = url.match(/^(https?):\/\//);
    return match ? match[1] : null;
}
  
  extractIPWithPort(url: string): string | null {
    const match = url.match(/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(?::\d+)?)/);
    return match ? match[0] : null;
}

  continueWithUrl(url: any) {
    console.log(`Continuing with the URL: ${url}`);
    // Proceed with the stored URL (implement as needed)
    this.router.navigate(['login'])
    
  }

  promptForNewUrl() {
    Swal.fire({
      title: 'Enter New URL',
      input: 'url',
      inputLabel: 'URL',
      inputPlaceholder: 'Enter the new URL here',
      showCancelButton: true
    }).then((result) => {
      if (result.value) {
        const newUrl = result.value;
        localStorage.setItem('mercattomisurl', newUrl); // Save the new URL to localStorage
        Swal.fire('URL Saved!', `New URL (${newUrl}) has been saved.`, 'success');
      }
    });
  }


  CheckEmployeeAlreadyLogined(){
    // if(localStorage.getItem('user'))
    // {
    //   this.router.navigate(['home/enter-url'])
      
    // }
    // else
    // {
      
    this.checkUrlInLocalStorage()
    // }
    
  }


  ngOnDestroy(){
    window.location.reload()
  }




}
