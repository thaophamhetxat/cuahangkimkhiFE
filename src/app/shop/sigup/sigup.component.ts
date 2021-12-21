import {Component, OnInit} from '@angular/core';
import {SingInFrom} from "../../model/SingInFrom";
import {AuthService} from "../../service/auth.service";
import {TokenService} from "../../service/token.service";
import {Router} from "@angular/router";
import {SingUpFrom} from "../../model/SignUpFrom";

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.css']
})
export class SigupComponent implements OnInit {
  form: any = {};
  hide = true;

  roles: string[] = [];
  name!: string;
  signUpForm!: SingUpFrom;

  status = 'please fill in';
  error1: any = {
    message:"nouser"
  }
  error2: any={
    message: "noemail"
  }

  success:any={
    message: "yes"
  }

  constructor(private authService: AuthService,
              private tokenService: TokenService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  ngSubmit() {
    this.signUpForm = new SingUpFrom(
      this.form.username,
      this.form.password,
      this.form.email,
      this.form.name)

    this.authService.signUp(this.signUpForm).subscribe(data => {
      if (JSON.stringify(data) == JSON.stringify(this.error1)) {
        this.status = 'username đã tồn tại'
      }
      if (JSON.stringify(data) == JSON.stringify(this.error2)) {
        this.status = 'email đã tồn tại'
      }
      if (JSON.stringify(data) == JSON.stringify(this.success)) {
        this.status = 'create success'
      }
    })
  }

  // check_pass() {
  //   // @ts-ignore
  //   if (document.getElementById('password').value == document.getElementById('confirmPassword').value) {
  //     // @ts-ignore
  //     document.getElementById('submit').disabled = false;
  //   } else {
  //     // @ts-ignore
  //     document.getElementById('submit').disabled = true;
  //
  //   }
  // }
}
