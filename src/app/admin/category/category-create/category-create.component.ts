import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

import {FormControl, FormGroup} from "@angular/forms";
import {Category} from "../../../model/category";
import {Supplier} from "../../../model/supplier";


@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  categories: Category[] = [];
  suppliers: Supplier[] = [];

  categoryForm: FormGroup = new FormGroup({
    cid: new FormControl(),
    nameCategory: new FormControl(),
    description: new FormControl(),
    supplier: new FormControl()
  })

  constructor(private activatedRoute: ActivatedRoute,
              private http: HttpClient,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllSupplier();
  }

  getAllSupplier() {
    this.http.get<Supplier[]>('http://localhost:8080/kimkhi/suppliers/').subscribe((data) => {
      this.suppliers = data;
    })
  }

  submit() {
    this.http.post<Category>('http://localhost:8080/kimkhi/categories/', this.categoryForm.value).subscribe((data) => {
      alert("Tạo thành công - " + data.nameCategory)
      this.router.navigate(['/category/home']);
    })
  }
}
