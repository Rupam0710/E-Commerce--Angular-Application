import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.scss'
})
export class AddressFormComponent {

  addresses = [1, 1, 1]

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute,
    private toastr: ToastrService) { }

  myForm: FormGroup = this.formBuilder.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    streetAddress: ["", Validators.required],
    city: ["", Validators.required],
    state: ["", Validators.required],
    zipCode: ["", Validators.required],
    mobile: ["", Validators.required],
  })


  public handleCreateOrder(item: any) { }

  public handleSubmit() {

    const formValue = this.myForm.value;
    console.log("form data", formValue);


  }

  public onNavigate() {
    if (this.myForm.valid) {
      this.router.navigate(['payment/20'], { relativeTo: this.route })
    } else {
      this.toastr.warning('Please fill in the shopping address to proceed to payment')
    }
  }
}
