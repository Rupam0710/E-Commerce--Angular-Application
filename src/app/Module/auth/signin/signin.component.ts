import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth-service.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';




@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {

  @Input() changeTamplate: any;

  constructor(private builder: FormBuilder, private authService: AuthService, private toastr: ToastrService, private dialog: MatDialog, private router: Router) { }

  loginForm: FormGroup = this.builder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  })

  userdata: any;

  submitForm() {
    if (this.loginForm.valid) {
      console.log("login req data", this.loginForm.value);

      this.authService.GetUsersData().subscribe(res => {
        this.userdata = res.find((user: any) => {
          return user.email === this.loginForm.value.email && user.password === this.loginForm.value.password

        });

        if (this.userdata) {
          this.toastr.success('You are successfully login')
          sessionStorage.setItem("username", this.userdata.firstName)
          this.authService.login();
          this.dialog.closeAll();

        }
        else {
          this.toastr.error('Invalid Credentials');
        }
      })

    } else {
      this.toastr.warning('User not found')
    }
  }
}
