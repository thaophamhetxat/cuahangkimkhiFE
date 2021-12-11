import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

import {FormControl, FormGroup} from "@angular/forms";
import {Supplier} from "../../../model/supplier";


@Component({
  selector: 'app-category-create',
  templateUrl: './supplier-create.component.html',
  styleUrls: ['./supplier-create.component.css']
})
export class SupplierCreateComponent implements OnInit {
  suppliers: Supplier[] = [];

  supplierForm: FormGroup = new FormGroup({
    id: new FormControl(),
    nameSupplier: new FormControl(),
    provider: new FormControl(),
    phone: new FormControl()
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
    this.http.post<Supplier>('http://localhost:8080/kimkhi/categories/', this.supplierForm.value).subscribe((data) => {
      alert("Tạo thành công - " + data.nameSupplier)
      this.router.navigate(['/supplier/home']);
    })
  }
}
