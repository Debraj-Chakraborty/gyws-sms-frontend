import { Component ,OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(
    private platform: Platform,
    private router: Router,
    private dataserv:DataserviceService
  ) {}

  ngOnInit() { }


  async verifylogin(form: NgForm) {
    if(form.invalid) {
      console.log("invalid")
      return;
    } else {
        console.log(form.value)
        let jsonData = {
          "data":{
            "username":form.value.username,
            "password":form.value.password
          }
        }
        this.dataserv.postMethod('institute/login',jsonData).then(data =>{
          const res = JSON.parse(JSON.stringify(data));
          if(res.success){
            this.router.navigateByUrl('/dashboard-admin')
          }else{
            this.dataserv.Erroralert(res.message);
          }
        });
    }
  }

  institudeRegister(){
    this.router.navigateByUrl('/register-institute');
  }
}
