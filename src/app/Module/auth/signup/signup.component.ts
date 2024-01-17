import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth-service.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  @Input() changeTamplate: any;

  constructor(private builder: FormBuilder, private authService: AuthService,
    private toastr: ToastrService, private dialog: MatDialog) { }

  loginForm: FormGroup = this.builder.group({
    firstName: ["", [Validators.required]],
    lastName: ["", [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  })

  signUser: any;
  public submitForm() {
    if (this.loginForm.valid) {
      this.signUser = this.loginForm.value.firstName;
      console.log("Register req data", this.loginForm.value);
      this.authService.ProceedRegister(this.loginForm.value).subscribe(res => {
        this.toastr.success(this.signUser, 'You are Registered Successfully')
        this.dialog.closeAll();
        this.loginForm.reset();
      })

    } else {
      this.toastr.warning('Please enter valid data')
    }
  }
}
