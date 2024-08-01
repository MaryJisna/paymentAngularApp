import { Component } from '@angular/core';
import { PaymentDetailService } from '../../shared/payment-detail.service';
import { FormsModule, NgForm } from '@angular/forms';

import { subscribeOn } from 'rxjs';
import { PaymentDetail } from '../../shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-details-form',
  standalone: true,
  imports: [FormsModule],

  templateUrl: './payment-details-form.component.html',
  styles: ``
})
export class PaymentDetailsFormComponent {
  constructor(public service: PaymentDetailService, private toastr: ToastrService) {
  }

  onSubmit(form: NgForm) {
    console.log("formformform", form.invalid)
    this.service.formSubmitted = true;
    if (form.valid) {
      if(this.service.formData.paymentDetailId==0)
        this.insertRecord(form)
      else
      this.updateRecord(form)
    }

  }
  insertRecord(form: NgForm){
    
    this.service.postPaymentDetail().subscribe({
      next: res => {
        this.service.mylist = res as PaymentDetail[]
        this.service.resetForm(form)
        // console.log(res, "my resoponse")
        this.toastr.success('successfully inserted');
      },
      error: err => {
        console.log(err)
      }
    })
  }
  updateRecord(form: NgForm){
     
    this.service.putPaymentDetail().subscribe({
      next: res => {
        this.service.mylist = res as PaymentDetail[]
        this.service.resetForm(form)
        // console.log(res, "my resoponse")
        this.toastr.info('successfully updated');
      },
      error: err => {
        console.log(err)
      }
    })
  }




}
