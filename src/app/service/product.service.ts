import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Product} from "../model/product";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_PRODUCT = environment.API_LOCAL + 'sanphams/page';
  private API_PRODUCT_NOT_PAGE = environment.API_LOCAL + 'sanphams/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  pageProduct(nextPage: any | undefined) {
    const params = nextPage;
    return this.http.get(this.API_PRODUCT, {params}) //param thuộc về hàm get của angular
  }

  getAllProductPage(index: number): Observable<any> {
    return this.http.get<any>(this.API_PRODUCT)
  }

  getAll(): Observable<any> {
    return this.http.get<any>(this.API_PRODUCT_NOT_PAGE)
  }


  getAllProduct(index: number): Observable<Product[]> {
    return this.http.get<Product[]>(this.API_PRODUCT + '/shop/' + index)
  }

  getAllProductNotPagination(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API_PRODUCT_NOT_PAGE)
  }

  // search(nameVaccine: string, typeVaccine: string, originVaccine: string, statusVaccine: string): Observable<Product[]> {
  //   return this.http.get<Product[]>(this.API + 'search?nameVaccine=' + nameVaccine + '&typeVaccine=' + typeVaccine + '&originVaccine=' + originVaccine + '&statusVaccine=' + statusVaccine)
  // }

}
