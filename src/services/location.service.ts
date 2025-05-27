import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { Platform } from '@ionic/angular';
import { catchError, throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  latitude: number=0;
  longitude: number=0;



 
  
  constructor(private platform: Platform, private geolocation: Geolocation,private http:HttpClient) { }
  getLocation(): Promise<{ Latitude: number; Longitude: number } | null> {
    return new Promise((resolve, reject) => {
      if (this.platform.is('cordova')) {
        // Use Cordova Geolocation
        this.geolocation.getCurrentPosition().then((resp) => {
          console.log('Cordova Latitude:', resp.coords.latitude, 'Longitude:', resp.coords.longitude);
          let location = {
            Latitude: resp.coords.latitude,
            Longitude: resp.coords.longitude
          };
          resolve(location);
        }).catch((error) => {
          console.log('Error getting location (Cordova):', error);
          reject(error);
        });
      } else {
        // Use Browser Geolocation
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              console.log('Browser Latitude:', position.coords.latitude, 'Longitude:', position.coords.longitude);
              let location = {
                Latitude: position.coords.latitude,
                Longitude: position.coords.longitude
              };
              resolve(location);
            },
            (error) => {
              console.error('Error getting location (Browser):', error);
              reject(error);
            }
          );
        } else {
          console.log('Geolocation is not supported by this browser.');
          resolve(null);
        }
      }
    });
  }


  FindLocationName(log:number,lati:number)
{
  let placefile  = 'https://nominatim.openstreetmap.org/reverse?lat='+lati+'&lon='+log+'&format=json'
  console.log(placefile)
  // Latitude: 10.8703067 Longitude: 75.9983272

}  
locationname(log:number,lati:number) 
{

  // this.GetDecryptedData()
  let headers = new HttpHeaders();
  headers.set("Accept", 'application/json');
  headers.set('Content-Type', 'application/json');
  // headers = headers.set('Authorization', 'Bearer ' + this.decryptiondata);/ 
  let options ={ headers: headers };
  return this.http.get('https://nominatim.openstreetmap.org/reverse?lat='+lati+'&lon='+log+'&format=json', options)
  .pipe(
    
    catchError((error: any) => {
      Swal.fire("Error while fetching location,please try again after some times or move around")
      window.location.reload()
      // this.CheckForUnAuthorised(error)
      // Handle the error here or rethrow it as needed
      console.error('Error in locationname:', error);
      return throwError(error); // Rethrow the error
    })
  );
}
  
}
