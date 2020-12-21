import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DataserviceService } from '../service/dataservice.service';
@Component({
  selector: 'app-register-institude',
  templateUrl: './register-institude.page.html',
  styleUrls: ['./register-institude.page.scss'],
})
export class RegisterInstitudePage implements OnInit {
  profile_picture: string | ArrayBuffer = "../../../../assets/images/noimg.jpg";
  profileimg: boolean = false;
  errormsg: string;

  constructor(
    private dataserv:DataserviceService
  ) { }

  ngOnInit() {
  }


  async instituderegistration(form: NgForm) {
    if(form.invalid) {
      console.log("invalid")
      return;
    } else {
        if(this.profileimg){
          let jsonData = {
            "data":{
                "institute_name":form.value.instname,
                "city":form.value.city,
                "state": form.value.state,
                "dist": form.value.dist,
                "pincode":form.value.pincode,
                "username":form.value.user,
                "password":form.value.password,
                "logo":this.profile_picture
            }
          }
          this.dataserv.postMethod('institute/instituteRegister',jsonData).then(data =>{
            const res = JSON.parse(JSON.stringify(data));
            if(res.success){
              this.dataserv.Successalert(res.message);
              form.resetForm();
            }else{
              this.dataserv.Erroralert(res.message);
            }
          });
        }else{
          this.errormsg ="Institute logo is required";
        }
    }
  }


  changeprofilePic(ev) {
    let file = ev.files[0];
    if(file.type=="image/jpeg" || file.type=="image/png"){
      let reader = new FileReader();
      reader.onloadend = (e)=>{
        this.profile_picture = reader.result;
        this.profileimg= true;
      }
      reader.readAsDataURL(file);
    }  
  }
}
