import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { CommonService } from 'src/services/common.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss','../../assets/css/bootstrap.min.css','../../assets/css/animate.css','../../assets/css/style.css'],
})
export class ResetPasswordPage implements OnInit {

  otp:string=''
  Email:string=''

  viewtype:string='email'  //otp   /   pass  /email

  Passnew:string=''
  cpass:string=''
  constructor(private comser:CommonService,private loader:LoadingController,private router:Router) { }

  ngOnInit() {
  }


//  async SubmitOtp(){

//   const loading = await this.loader.create({
//     cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
//     message: 'Loading...', // Optional: Custom message
//     spinner: 'dots', // Optional: Choose a spinner
//     // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
//    });
   
//       if(this.viewtype=='otp')
//       {
//         if(this.otp!='' && this.otp!=null)
//         {
//           // console.log(typeof this.otp=='number');
//           // let ot = Number(this.otp)/
//           if(this.comser.isStringNumeric(this.otp))
//           {
//             loading.present()
//             this.comser.VerifyOtp(this.Email,this.otp).subscribe((data:any)=>{
//               loading.dismiss()
//               if(data.Status==200)
//               {
//                 this.viewtype = 'pass'
//                 Swal.fire(data.Message,'','success')
//               }
//               else
//               {
//                 Swal.fire(data.Message,'','warning')
//               }

//             },(error:any)=>{
//               loading.dismiss()
//           })        
//           }
//           else
//           {
//             Swal.fire('OTP Cannot Contain Characters','','warning')
//           }
        

//         }
//         else
//         {
//           Swal.fire('Please enter a valid OTP to submit','','warning')
//         }
        
//        // otp submission logic
       
//       }
//       else if(this.viewtype == 'email')
//       {
//         // alert('sadasdasdasdasd')
//         this.viewtype='otp'
//         if(this.Email!=null && this.Email!='')
//         {
//           if(this.comser.isValidEmail(this.Email))
//           {
//             loading.present()
//             this.comser.ResetPassword(this.Email).subscribe((data:any)=>{
//               loading.dismiss()
//               console.log(data);
              
//               if(data.Status==200)
//               { 
//                 this.viewtype = 'otp'
//                 Swal.fire(data.Message,'','success')
//                 // return
                
//               }
//               else
//               {
//                 Swal.fire(data.Message,'','warning')
//               }
//             },(error:any)=>{
//               loading.dismiss()
//             })
            
//           }
//           else
//           {
//             Swal.fire('Entered Email is not valid','','warning')
//           }
//         }
//         else
//         {
//           Swal.fire('Please Enter Email','','warning')
//         }
//       }
//       else if(this.viewtype == 'pass')
//       {
//         // console.log('passs');
        
//         if(this.Passnew!='' && this.Passnew!= null)
//         {
//           if(!this.comser.hasSpaces(this.Passnew))
//             {
//               if(this.cpass!='' && this.cpass!=null)
//               {
//                 if(!this.comser.hasSpaces(this.cpass))
//                   {
//                     if(this.Passnew === this.cpass)
//                     {
//                         loading.present()
//                         this.comser.ChangePassword(this.Email,this.cpass).subscribe((data:any)=>{
//                           loading.dismiss()
//                           if(data.Status==200)
//                           {

//                             Swal.fire(data.Message,'','success')
//                             this.router.navigate(['login'])
//                           }
//                           else
//                           {
//                             Swal.fire(data.Message,'','warning')
//                           }
//                     },(error:any)=>{
//                       loading.dismiss()
//                     })
//                     }
//                     else
//                     {
//                       Swal.fire('New Password and Confirm Password should be same','','warning')
//                     }
//                   }
//                   else
//                   {
//                     Swal.fire('Confirm Password Cannot contain Spaces','','warning')
//                   }

//               }
//               else
//               {
//                 Swal.fire('Enter Confirm Password','','warning')
//               }
             
    
//             }
//             else
//             {
//               Swal.fire('New Password Cannot  contain spaces','','warning')
//             }

//         }
//         else
//         {
//           Swal.fire('Enter New Password ','','warning')
//         }
     
//         //pass submission logic
//       }
   
//   }



}
