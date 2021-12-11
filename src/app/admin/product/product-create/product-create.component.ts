import {Component, OnInit} from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Product} from "../../../model/product";
import {Category} from "../../../model/category";


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];

  productForm: FormGroup = new FormGroup({
    pid: new FormControl(),
    nameProduct: new FormControl(),
    image: new FormControl(),
    quantity: new FormControl(),
    importPrice: new FormControl(),
    price: new FormControl(),
    discount: new FormControl(),
    description: new FormControl(),
    dateAdd: new FormControl(),
    category: new FormControl(),
  })

  constructor(private http: HttpClient,
              private router: Router) {
  }



  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory() {
    this.http.get<Category[]>('http://localhost:8080/kimkhi/categories/').subscribe((data) => {
      this.categories = data;
    })
  }

  submit() {
    this.http.post<Product>('http://localhost:8080/kimkhi/sanphams/', this.productForm.value).subscribe((data) => {
      alert("create thành công - " + data.nameProduct)
      this.router.navigate(['/product/home']);
    })
  }
}
