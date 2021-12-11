import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup} from "@angular/forms";
import {Category} from "../../../model/category";
import {Supplier} from "../../../model/supplier";


@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  categories: Category[] = [];
  suppliers: Supplier[] = [];
  categoryFrom!:FormGroup;
  id!: number;

  constructor(private activatedRoute: ActivatedRoute,
              private http :HttpClient,
              private router :Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = parseInt(<string>paramMap.get('id'));
      this.getCategory(this.id);
    });
  }

  ngOnInit(): void {
    this.getSupplier();
  }

  getCategory(id: number) {
    this.http.get<Category>(`http://localhost:8080/kimkhi/categories/${id}`).subscribe((data) => {
      this.categoryFrom = new FormGroup({
        id: new FormControl(data.id),
        nameCategory: new FormControl(data.nameCategory),
        description: new FormControl(data.description),
        supplier: new FormControl(data.supplier?.id),
      });
    })
  }

  saveCategory() {
    this.http.put<Category>(`http://localhost:8080/kimkhi/categories/${this.id}`, this.categoryFrom.value).subscribe((data) => {
      alert("edit thành công - " + data.nameCategory)
      this.router.navigate(['/category/home']);
    })
  }

  getSupplier() {
    this.http.get<Supplier[]>('http://localhost:8080/kimkhi/suppliers/').subscribe((data) => {
      this.suppliers = data;
    })
  }

}
