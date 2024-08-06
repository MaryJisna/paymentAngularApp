import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserRegistrationService } from '../shared/user-registration.service';
import { ToastrService } from 'ngx-toastr';
import { UserReg } from '../shared/user-reg.model';


@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [FormsModule],

  templateUrl: './user-registration.component.html',
  styles: ``
})
export class UserRegistrationComponent {
  constructor(public service: UserRegistrationService, private toastr: ToastrService) {
  }


  onSubmit(form: NgForm){
    console.log("kkkkkkkk");
    this.service.PostUser_registration().subscribe({
    
      next: res => {
        this.service.mylist = res as UserReg[]
        this.service.resetForm(form)
        // console.log(res, "my resoponse")
        this.toastr.success('successfully inserted');
      },
      error: err => {
        console.log(err)
      }
    })
  }
}