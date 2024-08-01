import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { PaymentDetail } from './payment-detail.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  url: string = environment.apiBaseUrl + "PaymentDetails"
  constructor(private http: HttpClient) { }
  mylist: PaymentDetail[] = [];
  formData: PaymentDetail = new PaymentDetail()
  formSubmitted: boolean=false;

  // formData: any = {}; // Add this line

  refreshList() {
    this.http.get(this.url)
      .subscribe({
        next: res => {
          console.log(res)
          this.mylist = res as PaymentDetail[]
        },
        error: err => {
          console.log(err)
        }
      })
  }

  postPaymentDetail() {
    console.log(this.formData, "my formdata")
    return this.http.post(this.url, this.formData)
  }
  putPaymentDetail() {
    console.log(this.formData, "my formdata")
    return this.http.put(this.url +'/'+ this.formData.paymentDetailId, this.formData)
  }
  deletePaymentDetail(id:number) {
    console.log(this.formData, "my formdata")
    return this.http.delete(this.url +'/'+ id )
  }

resetForm(form:NgForm){
  form.form.reset()
  this.formData=new PaymentDetail()
  this.formSubmitted=false;


}

}
