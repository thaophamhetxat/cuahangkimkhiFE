import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Product} from "../../../model/product";

import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize} from "rxjs/operators";


@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {
  products: Product[] = [];
  arrfiles: any;
  arrayPicture: any;

  constructor(private activatedRoute: ActivatedRoute,
              private http: HttpClient,
              private storage: AngularFireStorage) {
  }

  ngOnInit(): void {
    this.getProduct();
  }

  uploadFileImg() {
    for (const argument of this.avatarDom1?.nativeElement.files) {
      this.arrfiles.push(argument)
    }
  }

  @ViewChild('uploadFile1', {static: true}) public avatarDom1: ElementRef | undefined;
  title = 'demoUploadFile';
  getProduct() {
    this.http.get<Product[]>('http://localhost:8080/kimkhi/sanphams/').subscribe((data) => {
      this.products = data;
    })
    this.uploadFileImg();
  }

  // getProduct(pid: number) {
  //   this.http.get<Product>(`http://localhost:8080/kimkhi/sanphams/${pid}`).subscribe((data) => {
  //     this.productFrom = new FormGroup({
  //       pid: new FormControl(data.pid),
  //       image: new FormControl(data.image),
  //       nameProduct: new FormControl(data.nameProduct),
  //       quantity: new FormControl(data.quantity),
  //       importPrice: new FormControl(data.importPrice),
  //       price: new FormControl(data.price),
  //       discount: new FormControl(data.discount),
  //       description: new FormControl(data.description),
  //       dateAdd: new FormControl(data.dateAdd)
  //     });
  //   })
  // }





  deleteProduct(id: number | undefined) {
    var r = confirm("Xác nhận xóa!");
    if (r) {
      this.http.delete(`http://localhost:8080/kimkhi/sanphams/${id}`).subscribe((data) => {
        alert("xóa thành công");
        this.getProduct();
      })
    } else {
      return;
    }
  }
}
