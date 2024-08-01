import { Component ,inject,OnInit} from '@angular/core';
import { PaymentDetailsFormComponent } from './payment-details-form/payment-details-form.component';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { NgFor } from '@angular/common';
import { PaymentDetail } from '../shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-payment-details',
  standalone: true,
  imports: [PaymentDetailsFormComponent,NgFor],
  templateUrl: './payment-details.component.html',
  styles: ``
})
export class PaymentDetailsComponent implements OnInit {
  constructor(public service : PaymentDetailService, private toastr: ToastrService ){
  }
  ngOnInit(): void {
    this.service.refreshList()
  }

  myname :string = "jisna "
   populateForm(selectedRecord: PaymentDetail) {
  this.service.formData = Object.assign({}, selectedRecord);
  }
  
  onDelete(id: number){
    console.log("id",id)

    if(confirm('Are you sure to delete this record?'))
    this.service.deletePaymentDetail(id).subscribe({
      next: res => {
        console.log("dddd")

        this.service.mylist = res as PaymentDetail[]
        
        this.toastr.error('successfully Deleted');
      },
      error: err => {
        console.log(err)
      }
    })
  }

  // onDelete(id: number) {
  //   if (confirm('Are you sure to delete this record?'))
  //     this.service.deletePaymentDetail(id)
  //       .subscribe({
  //         next: res => {
  //           this.service.list = res as PaymentDetail[]
  //           this.toastr.error('Deleted successfully', 'Payment Detail Register')
  //         },
  //         error: err => { console.log(err) }
  //       })
  // }

}
