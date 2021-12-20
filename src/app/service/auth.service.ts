import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {JwtResponse} from "../model/JwtResponse";
import {SingInFrom} from "../model/SingInFrom";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_SIGNUP = environment.API_LOCAL + 'signup';
  private API_SIGNIN = environment.API_LOCAL + 'auth/signin';

  constructor(private http: HttpClient) {
  }

  signIn(signIn: SingInFrom): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.API_SIGNIN, signIn);
  }

}
