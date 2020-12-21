import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataserviceService } from './dataservice.service';
import { Storage } from '@ionic/storage';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  sess_user_id:number;
  sess_user_name:string;
  sess_user_email:string;
  sess_user_mobile:number;
  sess_user_type:string;
  sess_user_loggedin:boolean = false;
  private logedinuser = new Subject<string>();
  
  constructor(
    public http: HttpClient,
    public dataServ: DataserviceService, 
    private storage: Storage,
  ) { }

  public getuserLoggedin(): Observable<string> {
    return this.logedinuser.asObservable();
  }

public setuserLoggedin(data) {
    this.logedinuser.next(data);
}


  /**
   * Set a single key/value in the session/storage
   * @param key 
   * @param value 
   * Developer: Debraj Chakraborty
   */
  async set(key: string, value: any): Promise<any> {
    try {
      const result = await this.storage.set(key, value);
      return true;
    } catch (error) {
      console.log("if error set function======================>"+error)
      return false;
    }
  }
  
  
  
  
  /**
   * Get a single key from the session/storage
   * @param key 
   * @param value 
   * Developer: Debraj Chakraborty
   */
  async get(key: string): Promise<any> {
    try {
      const result = await this.storage.get(key);
      if (result != null) {
        return result;
      }
      return null;
    } catch (error) {
      console.log("if error get function ======================>"+error)
      return null;
    } 
  }
  
  
  
  
  /**
   * Set a JSON object in the session/storage
   * @param key 
   * @param value
   * Developer: Debraj Chakraborty 
   */
  async setObject(key: string, object: Object) {
    try {
      const result = await this.storage.set(key, JSON.stringify(object));
      return true;
    } catch (error) {
      console.log("if error set object======================>"+error)
      return false;
    }
  }
  
  
  
  
  /**
   * Get the JSON object from the session/storage
   * @param key 
   * @param value
   * Developer: Debraj Chakraborty
   */
  async getObject(key: string): Promise<any> {
    try {
        const result = await this.storage.get(key);
        if(result != null) {
            return JSON.parse(result);
        }
        return null;
    } catch (error) {
        console.log("if error get object======================>"+error)
        return null;
    }
  }




  /**
   * This variable set individual session variable value
   * @param user
   * Developer: Debraj Chakraborty
   */
  async setSessionVariable(user) {
    this.sess_user_id = user.id;
    this.sess_user_name = user.first_name;
    this.sess_user_email = user.email_id;
    this.sess_user_mobile = user.phone;
    this.sess_user_loggedin = true;
  }
  
  
  
  
    
  
  /**
   * Remove a single key from the session/storage
   * @param key 
   * Developer: Debraj Chakraborty
   */
  remove(key: string) {
    this.storage.remove(key);
  }




  /**
   * Delete or clear the whole session/storage
   * Developer: Debraj Chakraborty
   */
  clear() {
    this.storage.clear();
  }
  
  
  
  
  /**
   * Logout a user from the session
   * Developer: Debraj Chakraborty
   */
  async logout() {
    this.storage.ready();
    //Remove the sess_user variable from the session
    await this.storage.remove("session_user").then((sessdata)=>{
    this.storage.clear();
    //Set all the session variables to empty or null
    this.sess_user_id = null;
    this.sess_user_name = '';
    this.sess_user_email = '';
    this.sess_user_mobile = null;
    this.sess_user_type = '';
    this.sess_user_loggedin = false;
    this.setuserLoggedin("user_not_login");
    });
  }

}
