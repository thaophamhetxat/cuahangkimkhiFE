import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Product} from "../../../model/product";


@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {
  products: Product[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getProduct();

  }



  getProduct() {
    this.http.get<Product[]>('http://localhost:8080/kimkhi/sanphams/').subscribe((data) => {
      this.products = data;
    })
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

  deleteProduct(id:number|undefined) {
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
