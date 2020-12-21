import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController, AlertController, Platform } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  backendUrl = "http://sms.codesbyte.com:4101/";
  baseUrl = this.backendUrl+"api/v1/";
  constructor(
    private http: HttpClient,
    public alertController:AlertController,
  ) { }



   /**
   * This function calls the POST APIs
   * @param api 
   * @param jsondata 
   */
  async postMethod(api:string, jsondata:any){
    return new Promise(resolve => {
      this.http.post(this.baseUrl + api, jsondata).subscribe(res => {
        console.log("jsondata =======>"+jsondata)
        console.log(api+"....responce=======>",res);
        resolve(res);
      }, err => {
        // resolve(err)
        console.log(api,+"....error=======>"+err);
      });
    });
  }



  /**
   * This function calls the GET APIs
   * @param api 
   * @param data 
   */
  async getMethod(api:string, data:any){
    return new Promise(resolve => {
      this.http.get(this.baseUrl + api, data).subscribe(res => {
        resolve(res);
      }, err => {
        console.log(err);
      });
    });
  }



  /**
   * success messages 
   */
  async Successalert(msg) {
    const alert = await this.alertController.create({
      header: 'Success',
      message: msg,
      cssClass: 'langDelete',
      buttons: [
         {
          text: 'Ok',
          cssClass: 'secondary',
          role:"cancel"
        }
      ]
    });
    await alert.present();
  }




  /**
   * Error message
   */
  async Erroralert(msg) {
    const alert = await this.alertController.create({
      header: 'Error!',
      message: msg,
      cssClass: 'langDelete',
      buttons: [
         {
          text: 'Ok',
          cssClass: 'secondary',
          role:"cancel"
        }
      ]
    });
    await alert.present();
  }


}
