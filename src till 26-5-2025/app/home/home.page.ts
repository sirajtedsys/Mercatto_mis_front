import { Component, AfterViewInit,HostListener  } from '@angular/core';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { CommonService } from 'src/services/common.service';
import { LocationService } from 'src/services/location.service';
import Swal from 'sweetalert2';
import { Diagnostic } from '@awesome-cordova-plugins/diagnostic/ngx';
import { AppConfig } from 'src/class/AppConfig';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  sidebarlook:string=''
    mode:string=''

  isSidebarExpanded = false;

  ismobSidebarExpanded = false;
  MenuGroupsListDup: any[]=[];
  MenuGroupsList: any[]=[];
  locationCheckInterval: any;
  appconfig = new AppConfig()

  constructor(private comser: CommonService,private router:Router,private commstr : CommonService,private loadingCtrl:LoadingController   ,
     private diagnostic: Diagnostic,
    private locationService:LocationService
  ) {
    // this.checkLocationPermission()
    // this.getUserDetails()
    
    // Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);
    const ModeType = localStorage.getItem('ModeType');
    console.log(ModeType);
    this.mode = ModeType ?? '';
  }

  ngOnInit(): void {
    // this.comser.sidebarState$.subscribe(state => {
    //   this.isSidebarExpanded = state;
    // });

    // this.comser.mobsidebarState$.subscribe(state => {
    //   this.isSidebarExpanded = true;
    //   this.ismobSidebarExpanded=state
    // });
  }

  ngAfterViewInit() {
    this.initializeCharts();
    this.setupSidebarToggle();
  }

  initializeCharts() {
    const myChart = new Chart(document.getElementById('myChart') as HTMLCanvasElement, {
      type: 'bar',
      data: {
        labels: ["January", "February", "March", "April", 'May', 'June', 'August', 'September'],
        datasets: [{
          label: "Lost",
          data: [45, 25, 40, 20, 60, 20, 35, 25],
          backgroundColor: "#0d6efd",
          borderColor: 'transparent',
          borderWidth: 2.5,
          barPercentage: 0.4,
        }, {
          label: "Success",
          data: [20, 40, 20, 50, 25, 40, 25, 10],
          backgroundColor: "#dc3545",
          borderColor: 'transparent',
          borderWidth: 2.5,
          barPercentage: 0.4,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 15,
            },
            grid: {
              display: true,
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
      }
    });
  }

  // Set up sidebar toggle and other DOM manipulations
  setupSidebarToggle() {
    // console.log('sdfsdfsdf');
    
    const showAsideBtn = document.querySelector('.show-side-btn');
    const sidebar = document.querySelector('.sidebar');
    const wrapper = document.querySelector('#wrapper');

    if (showAsideBtn && sidebar && wrapper) {
      showAsideBtn.addEventListener('click', () => {
        const targetSidebar = document.getElementById(showAsideBtn.getAttribute('data-show')!);
        if (targetSidebar) {
          targetSidebar.classList.toggle('show-sidebar');
          wrapper.classList.toggle('fullwidth');
        }
      });

      window.addEventListener('resize', () => {
        if (window.innerWidth > 767) {
          sidebar.classList.remove('show-sidebar');
        }
      });
    }
  }

 

  // toggleSidebar() {
  //   const sidebar = document.querySelector('.sidebar');
  //   const wrapper = document.getElementById('wrapper');
  //   if (sidebar && wrapper) {
  //     sidebar.classList.toggle('show-sidebar');
  //     wrapper.classList.toggle('fullwidth');
  //   }
  // }

 

  NavigateTo(url:any){

   
      
    this.router.navigate(['home/'+url])
    if(this.appconfig.MobileApp)
    {
      this.toggleSidebar()

    }

    

  }

  async getUserDetails(){
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
      message: 'Loading...', // Optional: Custom message
      spinner: 'dots', // Optional: Choose a spinner
      // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
    });
    await loading.present();
    this.comser.GetUserDetails().subscribe((data:any)=>{
      loading.dismiss()
      console.log(data);
      
      // this.comser.dismissLoading();
      if(data && data!=null && data!=undefined && data.length!=0)
      {
      //  this.GetAllUserRightsTab(data.MenuGroupId)
      
        
      }
      else
      {
        // console.log('ddd');
        this.router.navigate(['login'])
        localStorage.removeItem('type')
        
      }
    },
  (error:any)=>{
    // this.comser.dismissLoading()
    loading.dismiss()
  })
  }

  async GetAllUserRightsTab(menugpid: any) {  
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading', // Optional: Apply custom CSS class for styling
      message: 'Loading...', // Optional: Custom message
      spinner: 'dots', // Optional: Choose a spinner
      // duration: 2000 // Optional: Set a duration after which the loader will automatically dismiss
    });
    await loading.present();
  
    // this.commstr.GetAllTRabsByMEnuygroupid(menugpid).subscribe(
    //   (data: any) => {
    //     console.log(data);
    //     loading.dismiss();
  
    //     if (Array.isArray(data) && data.length > 0) {
    //       let allTabs = data;
    //       let mainMenus: any[] = [];
    //       let submenus: any[] = [];
  
    //       for (let i = 0; i < allTabs.length; i++) {
    //         if (allTabs[i].adminlinkid == 0) {
    //           mainMenus.push(allTabs[i]);
    //         } else {
    //           submenus.push(allTabs[i]);
    //         }
    //       }
  
    //       // Map submenus to their respective main menus
    //       mainMenus.forEach(menu => {
    //         menu.submenus = submenus.filter(
    //           submenu => submenu.adminlinkid == menu.tabid
    //         );
    //       });
  
    //       this.MenuGroupsList = mainMenus;
    //       this.MenuGroupsListDup = mainMenus;
  
    //       console.log(this.MenuGroupsList);
    //     } else {
    //       Swal.fire('No Page rights assigned contact administrator', '', 'error');
    //       localStorage.clear();
    //       this.router.navigate(['login']);
    //     }
    //   },
    //   (error: any) => {
    //     console.error('Error fetching user rights:', error);
    //     loading.dismiss();
    //     Swal.fire('Error fetching user rights', '', 'error');
    //   }
    // );
  }
  

 

  singlesidemenu(Id: number) {
    const head = document.getElementById('subheadact' + Id);
    if (head) {
      if (head.classList.contains('active')) {
        head.classList.remove('active');
        // head.style.display = 'none'
      } else {
        head.classList.add('active');
        // head.style.display = 'block'
        this.closeothersidemenu(Id);
      }
    }
  }

  closeothersidemenu(Id: number) {
    for (let i = 0; i < 10; i++) {
      if (i != Id) {
        // const iio = document.getElementById('sidedrop' + i);
        const head = document.getElementById('subheadact' + i);
        if (head) {
          // head.style.display = 'none';
          
          head.classList.remove('active');
        }
       
      }
    }
  }

  singlesidemenumob(Id: number) {
    const head = document.getElementById('subheadactmob' + Id);
    if (head) {
      if (head.classList.contains('active')) {
        head.classList.remove('active');
        head.style.display = 'none'
      } else {
        head.classList.add('active');
        head.style.display = 'block'
        this.closeothersidemenumob(Id);
      }
    }
  }

  closeothersidemenumob(Id: number) {
    for (let i = 0; i < 10; i++) {
      if (i != Id) {
        // const iio = document.getElementById('sidedrop' + i);
        const head = document.getElementById('subheadactmob' + i);
        if (head) {
          head.style.display = 'none';
          
          head.classList.remove('active');
        }
       
      }
    }
  }

  LogOut()
  {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to logout?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes,LogOut!',
    }).then((result) => {
      if (result.isConfirmed) {
        // Exit the app
        // navigator['app'].exitApp();
        localStorage.removeItem('type')
        this.router.navigate(['login'])
      }
    });
    

  }
  // checkLocationPermission() {
  //   this.diagnostic.isLocationAvailable().then((available) => {
  //     if (available) {
  //       // Proceed with geolocation
  //       this.locationService.getLocation();
  //     } else {
  //       // Ask for permission
  //       this.diagnostic.requestLocationAuthorization().then((status) => {
  //         if (status === this.diagnostic.permissionStatus.GRANTED) {
  //           this.locationService.getLocation();
  //         }
  //         else
  //         {
  //           Swal.fire({
  //             title: 'Are you sure?',
  //             text: "grant location Permission to Continue or LogOut,",
  //             icon: 'warning',
  //             showCancelButton: true,
  //             confirmButtonColor: '#3085d6',
  //             cancelButtonColor: 'green',
  //             confirmButtonText: 'LogOut!',
  //             cancelButtonText:'Grant Permission'
              
  //           }).then((result) => {
  //             if (result.isConfirmed) {
  //               // Exit the app
  //               // navigator['app'].exitApp();
  //               localStorage.removeItem('type')
  //               this.router.navigate(['login'])
  //             }
  //             else
  //             {
  //               this.checkLocationPermission()
  //             }
  //           });
  //           Swal.fire(",",'','warning')
  //         }
  //       });
  //     }
  //   });
  
  // }


  // ngOnDestroy() {
  //   if (this.subscription) {
  //     this.subscription.unsubscribe();
  //   }
  // }
  checkLocationPermission() {
    this.diagnostic.isLocationAvailable().then((available) => {
      if (available) {
        // Proceed with geolocation
        this.locationService.getLocation();
        this.startMonitoringLocation(); // Start monitoring once permission is granted
      } else {
        // Ask for permission
        this.diagnostic.requestLocationAuthorization().then((status) => {
          if (status === this.diagnostic.permissionStatus.GRANTED) {
            // this.locationService.getLocation();
            this.startMonitoringLocation(); // Start monitoring after permission is granted
          } else {
            this.showPermissionAlert();
          }
        });
      }
    });
  }

  // Show alert asking to grant permission or logout
  showPermissionAlert() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Grant location Permission to Continue or LogOut.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: 'green',
      confirmButtonText: 'LogOut!',
      cancelButtonText: 'Grant Permission',
    }).then((result) => {
      if (result.isConfirmed) {
        // Log out the user
        localStorage.removeItem('type');
        this.router.navigate(['login']);
      } else {
        // Recheck permission if user chooses to grant permission
        this.checkLocationPermission();
      }
    });
  }

  // Monitor if the location services are turned off after permission is granted
  startMonitoringLocation() {
    // Clear any existing intervals
    if (this.locationCheckInterval) {
      clearInterval(this.locationCheckInterval);
    }

    // Set an interval to continuously check if location services are enabled
    this.locationCheckInterval = setInterval(() => {
      this.diagnostic.isLocationAvailable().then((available) => {
        if (!available) {
          // If location is turned off, show alert and log out
          Swal.fire({
            title: 'Location Turned Off',
            text: 'Please enable location services to continue, or you will be logged out.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: 'green',
            confirmButtonText: 'LogOut!',
            cancelButtonText: 'Enable Location',
          }).then((result) => {
            if (result.isConfirmed) {
              // Log out the user
              localStorage.removeItem('type');
              this.router.navigate(['login']);
            } else {
              // Optionally guide the user to the device's location settings
              this.diagnostic.switchToLocationSettings();
            }
          });
        }
      });
    }, 5000); // Check every 5 seconds
  }

  // Stop monitoring when user logs out or app closes
  stopMonitoringLocation() {
    if (this.locationCheckInterval) {
      clearInterval(this.locationCheckInterval);
    }
  }




  isSidebarVisible: boolean = false;

  toggleSidebar(): void {
    this.isSidebarVisible = !this.isSidebarVisible;
    const sidebar = document.querySelector<HTMLElement>('.sidebar');
    const wrapper = document.querySelector<HTMLElement>('#wrapper');

    if (sidebar && wrapper) {
      sidebar.classList.toggle('show-sidebar', this.isSidebarVisible);
      wrapper.classList.toggle('fullwidth', this.isSidebarVisible);
    }
  }

  // Automatically show/hide sidebar on window resize
  // @HostListener('window:resize', ['$event'])
  // onResize(event: UIEvent): void {
  //   const width = (event.target as Window).innerWidth;
  //   const sidebar = document.querySelector<HTMLElement>('.sidebar');
  //   if (sidebar) {
  //     if (width > 767) {
  //       sidebar.classList.remove('show-sidebar');
  //       this.isSidebarVisible = false;
  //     }
  //   }
  // }





}


