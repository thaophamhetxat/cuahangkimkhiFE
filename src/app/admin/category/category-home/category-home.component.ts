import {Component, OnInit} from '@angular/core';

import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Category} from "../../../model/category";
import {Supplier} from "../../../model/supplier";


@Component({
  selector: 'app-category-home',
  templateUrl: './category-home.component.html',
  styleUrls: ['./category-home.component.css']
})
export class CategoryHomeComponent implements OnInit {
  categories: Category[] = [];
  suppliers: Supplier[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getCategory();
    this.getSupplier();
  }

  getSupplier() {
    this.http.get<Supplier[]>('http://localhost:8080/kimkhi/suppliers/').subscribe((data) => {
      this.suppliers = data;
    })
  }

  getCategory() {
    this.http.get<Category[]>('http://localhost:8080/kimkhi/categories/').subscribe((data) => {
      this.categories = data;
    })
  }


  deleteCategory(id: number| undefined) {
    var r = confirm("Xác nhận xóa!");
    if (r) {
      this.http.delete(`http://localhost:8080/kimkhi/categories/${id}`).subscribe((data) => {
        alert("xóa thành công");
        this.getCategory();
      })
    } else {
      return;
    }
  }
}
