import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private urlPage = "http://localhost:8080/kimkhi/sanphams/page";
  private url = "http://localhost:8080/kimkhi/sanphams/";

  constructor(private http: HttpClient) { }


  getAllProductPage(index: number): Observable<any> {
    return this.http.get<any>(this.urlPage)
  }
  getAllProduct(): Observable<any> {
    return this.http.get<any>(this.url)
  }
}
