import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../service/token.service";
import {AuthService} from "../../service/auth.service";
import {SingInFrom} from "../../model/SingInFrom";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name!: string;
  isLogin = false;
  role = false;


  constructor(private tokenService: TokenService,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.name = this.tokenService.getName();
      this.isLogin = true;
    }
  }

  logOut() {

  }

}
