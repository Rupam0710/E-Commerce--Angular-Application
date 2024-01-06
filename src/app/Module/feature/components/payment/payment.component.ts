import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../../services/auth-service.service';

declare var Razorpay: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {
  products = [1, 1, 1]

  constructor(private toastr: ToastrService, private authService: AuthService) { }
  payNow() {

    if (this.authService.isLoggedIn()) {
      const RazorpayOptions = {
        description: 'Sample Razorpay demo',
        currency: 'INR',
        amount: 600000,
        name: 'Rupam',
        key: 'rzp_test_Pi6nQdsklmnC2h',
        image: 'https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg',
        prefill: {
          name: 'Rupam Pal',
          email: 'rupampal001@gmail.com',
          phone: '9830000420'
        },
        theme: {
          color: '#18048a'
        },

        modal: {
          ondismiss: () => {
            console.log('dismissed');

          }
        }
      }


      const successCallback = (paymentid: any) => {
        console.log(paymentid);

      }

      const failureCallback = (e: any) => {
        console.log(e);

      }

      Razorpay.open(RazorpayOptions, successCallback, failureCallback)
    }

    else {
      this.toastr.warning('Please login , to continue with payment')
    }
  }

}
