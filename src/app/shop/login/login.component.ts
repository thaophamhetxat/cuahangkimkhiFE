import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {TokenService} from "../../service/token.service";
import {SingInFrom} from "../../model/SingInFrom";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  hide = true;

  roles: string[] = [];
  name!: string;
  signInForm!: SingInFrom;

  constructor(private authService: AuthService,
              private tokenService: TokenService,
              private router:Router) {
  }

  ngOnInit(): void {
  }

  ngSubmit() {
    this.signInForm = new SingInFrom(this.form.username, this.form.password)
    this.authService.signIn(this.signInForm).subscribe(data => {
        // nếu có đăng nhập,có token
      if (data.token != undefined) {
        // khi có đăng nhập thì set trên localStorage
        this.tokenService.setToken(data.token);
        this.tokenService.setName(data.name);
        this.tokenService.setRoles(data.roles);

        this.router.navigate(['shop/home']).then(()=>{
          window.location.reload();
        })
      }
    })
  }


}
