import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/services/auth.service';
import { CommonService } from 'src/services/common.service';
// import { AuthService } from 'src/app/services/auth.service';
// import { CommonService } from 'src/app/services/common.service';
import Swal from 'sweetalert2';
// import { Diagnostic } from '@awesome-cordova-plugins/diagnostic/ngx';
// import { LocationService } from 'src/services/location.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss','../../assets/css/bootstrap.min.css','../../assets/css/animate.css','../../assets/css/style.css'],
})
export class LoginPage implements OnInit {

  Username:string=''
  Password:string=''
  Branch:number=0 
  BranchList:any[]=[]
  ShowBranch:boolean=false
  rememberme:boolean=false
  SelectedSection:number=0
  CounterList:any[]=[]
  SelectedCounter:number=0
  Mode: string = 'Transaction';

  SectionList:any[]=[]


  constructor(
    private loader:LoadingController,
    private comser:CommonService,
    private authser:AuthService,
    private router:Router,
    // private diagnostic: Diagnostic,
    // private locationService:LocationService
  ) {
    // this.checkLocationPermission()
    this.RememberOPtion()

    // alert("welocmm")
   }

  ngOnInit() {
    console.log();
    
  }

  async GetAllUserSection() {  
    const loading = await this.loader.create({
      cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
      message: 'Loading...', // Optional: Custom message
      spinner: 'dots', // Optional: Choose a spinner
      // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
    });
    await loading.present();
  
    this.comser.GetAppEmpWiseSct().subscribe(
      (data: any) => {
        console.log(data);
        loading.dismiss();
        if(data)
        {
          this.SectionList=data
        }
        else
        {
          this.SectionList=[]
        }
  
    
      },
      (error: any) => {
        console.error('Error fetching user Sections:', error);
        loading.dismiss();
        Swal.fire('Error fetching user Sections', '', 'error');
      }
    );
  }
  async GetAlluserCounters(sid: any): Promise<void> {
    const loading = await this.loader.create({
      cssClass: 'custom-loading',
      message: 'Loading...',
      spinner: 'dots'
    });
    
    await loading.present();
  
    try {
      const data:any = await this.comser.GetSectionCounterDetails(sid).toPromise();
      console.log(data);
      this.CounterList = data ? data : [];
    } catch (error) {
      console.error('Error fetching user Counters:', error);
      Swal.fire('Error fetching user Counters', '', 'error');
    } finally {
      loading.dismiss();
    }
  }
  

  RememberMe(event:any){
    console.log(event.target.checked);
    
    let rememberme =event.target.checked
    this.rememberme = event.target.checked
    // alert(this.rememberme)
    
    localStorage.setItem('remember',JSON.stringify(rememberme))
  }

  Forgetpass(){
    // this.router.navigate(['reset-password'])
  }

  handleSingleBranch() {
    const encryptcode = this.authser.Encrypt(this.BranchList[0]);
    localStorage.setItem('Branch', JSON.stringify(encryptcode));
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
      icon: 'success',
      title: 'Signed in successfully',
    });
    // this.router.navigate(['home/appointment-cards']);
    this.router.navigate(['home/dashboard']);
  }
  

  OnSectionSelection(event:any){
    this.continue()
  }
  async Submit() {
    const loading = await this.loader.create({
      cssClass: 'custom-loading',
      message: 'Loading...',
      spinner: 'dots',
    });
    await loading.present();
  
    this.comser.LoginCheck(this.Username, this.Password).subscribe({
      next: async (data: any) => {
        loading.dismiss();
        if (data?.Status === 200 && data?.Message) {
          this.authser.EncryptToken(data.Message);
          await loading.present();
          localStorage.setItem('ModeType',this.Mode)
          if(this.Mode==='Transaction')
          {
            await  this.GetAllUserSection()

          }
          else
          {
            this.router.navigate(['home/dashboard'])
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
              }
            });
            Toast.fire({
              icon: "success",
              title: "Signed in successfully"
            });
          }
        
        
        } else {
          Swal.fire(data.Message || 'Invalid login', '', 'warning');
        }
      },
      error: (error: any) => {
        loading.dismiss();
        Swal.fire('Login failed', 'Please check your credentials', 'error');
      },
    });
  }

  ChangeConfig(){
    this.router.navigate(['config'])
   }
  

async  continue()
  {
    if(this.SelectedSection!=0 && this.SelectedSection!=null)
    {
      let bran = this.SectionList.filter((x:any)=>x.SCT_ID==this.SelectedSection)    
      console.log(bran);
        
      let encryptcode =  this.authser.Encrypt(bran[0])
      localStorage.setItem('Section',JSON.stringify(encryptcode))
      //added by siraj 4-2-2025 //from line 193 - 
      //need to select counter id for the submission of creditbill settlement form
      //on first continue click ona vlid section id it will bring all teh counters
      if(this.CounterList.length==0)
      {
        await this.GetAlluserCounters(this.SelectedSection)
      }
      //on second continue clck will check for the counter is selected or not and if selected pass teh selected array to yteh local storage
      else
      {
        if(this.SelectedCounter!=0  && this.SelectedCounter!=null)
        {
          let counter = this.CounterList.filter((x:any)=>x.COUNTER_ID==this.SelectedCounter)    
          console.log(bran);
            
          let encryptcode =  this.authser.Encrypt(counter[0])
          localStorage.setItem('Counter',JSON.stringify(encryptcode))
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Signed in successfully"
          });
          // this.router.navigate(['home/sales-status'])
          this.router.navigate(['home/dashboard'])
        }
        else
        {
          Swal.fire('Select a counter to continue','','warning')
        }
      }

  

    }
    else
    {
      Swal.fire('Please select a Section')
    }
 
  }

 RememberOPtion(){
  let rem 
if(localStorage.getItem('remember'))
{
   rem = JSON.parse(`${localStorage.getItem('remember')}`);
  //  alert(rem)
   
   this.rememberme = rem

}
if(rem)
{
  this.AutoLogin()
}
else
{ 
  this.rememberme=false
  localStorage.removeItem('type')
}


 }

 async AutoLogin(){   
  const loading = await this.loader.create({
 cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
 message: 'Loading...', // Optional: Custom message
 spinner: 'dots', // Optional: Choose a spinner
 // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
});

if(localStorage.getItem('mercattomisurl'))
  {
await loading.present();
 this.comser.GetUserDetails().subscribe((data:any)=>{
   // this.comser.dismissLoading()
   loading.dismiss()
   if(data && data!=null)
   {
    //  this.router.navigate(['home/sales-status'])
    this.router.navigate(['home/dashboard'])
     const Toast = Swal.mixin({
       toast: true,
       position: "top-end",
       showConfirmButton: false,
       timer: 3000,
       timerProgressBar: true,
       didOpen: (toast) => {
         toast.onmouseenter = Swal.stopTimer;
         toast.onmouseleave = Swal.resumeTimer;
       }
     });
     Toast.fire({
       icon: "success",
       title: "Signed in successfully"
     });
   }
   else
   {
     Swal.fire('Login Again','','error')
   }
 },
(error:any)=>{
 // console.log(error);
 // this.comser.dismissLoading()
 loading.dismiss()
 
})
  }

    
else
{
  this.ChangeConfig()
}
}







}
