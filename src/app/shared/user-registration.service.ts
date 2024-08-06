import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { UserReg } from './user-reg.model'; 
import { NgForm } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  
  url: string = environment.apiBaseUrl + "User_registration"
  constructor(private http: HttpClient) { }
  mylist: UserReg[] = [];
  formData: UserReg = new UserReg()
  formSubmitted: boolean=false;

  refreshList() {
    this.http.get(this.url)
      .subscribe({
        next: res => {
          console.log(res)
        },
        error: err => {
          console.log(err)
        }
      })
  }

  PostUser_registration(){
    return this.http.post(this.url, this.formData)

  }
  resetForm(form:NgForm){
    form.form.reset()
    this.formData=new UserReg()
    this.formSubmitted=false;
  
  
  }
}



