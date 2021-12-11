import {Component, OnInit} from '@angular/core';

import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Supplier} from "../../../model/supplier";


@Component({
  selector: 'app-category-home',
  templateUrl: './supplier-home.component.html',
  styleUrls: ['./supplier-home.component.css']
})
export class SupplierHomeComponent implements OnInit {
  suppliers: Supplier[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getSupplier();
  }

  getSupplier() {
    this.http.get<Supplier[]>('http://localhost:8080/kimkhi/suppliers/').subscribe((data) => {
      this.suppliers = data;
    })
  }

  deleteSupplier(id: number | undefined) {
    var r = confirm("Xác nhận xóa!");
    if (r) {
      this.http.delete(`http://localhost:8080/kimkhi/suppliers/${id}`).subscribe((data) => {
        alert("xóa thành công");
        this.getSupplier();
      })
    } else {
      return;
    }
  }
}
