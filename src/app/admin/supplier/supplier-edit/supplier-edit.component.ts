import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup} from "@angular/forms";
import {Supplier} from "../../../model/supplier";


@Component({
  selector: 'app-category-edit',
  templateUrl: './supplier-edit.component.html',
  styleUrls: ['./supplier-edit.component.css']
})
export class SupplierEditComponent implements OnInit {
  suppliers: Supplier[] = [];
  supplierFrom!:FormGroup;
  id!: number;

  constructor(private activatedRoute: ActivatedRoute,
              private http :HttpClient,
              private router :Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = parseInt(<string>paramMap.get('id'));
      this.getSupplier(this.id);
    });
  }

  ngOnInit(): void {
  }

  getSupplier(id: number) {
    this.http.get<Supplier>(`http://localhost:8080/kimkhi/suppliers/${id}`).subscribe((data) => {
      this.supplierFrom = new FormGroup({
        id: new FormControl(data.id),
        nameSupplier: new FormControl(data.nameSupplier),
        provider: new FormControl(data.provider),
        phone: new FormControl(data.phone),
      });
    })
  }

  saveSupplier() {
    this.http.put<Supplier>(`http://localhost:8080/kimkhi/suppliers/${this.id}`, this.supplierFrom.value).subscribe((data) => {
      alert("edit thành công - " + data.nameSupplier)
      this.router.navigate(['/supplier/home']);
    })
  }



}
