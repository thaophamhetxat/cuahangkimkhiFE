import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Category} from "../../model/category";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  listProductPage: Product[] = [];
  searchText: any;
  indexPagination: number = 1;
  totalPagination!: number;

  constructor(private activatedRoute: ActivatedRoute,
              private http: HttpClient,
              private router: Router,
              private productService: ProductService) {
  }

  ngOnInit(): void {
this.getProduct();
this.getCategory();
    // this.productService.getAllProductPage(0).subscribe((data: Product[]) => {
    //   this.products = data;
    //   console.log(this.products);
    // });

    // this.productService.getAllProduct().subscribe((data: Product[]) => {
    //   this.listProductPage = data;
    //   if ((this.listProductPage.length % 3) != 0) {
    //     this.totalPagination = (Math.round(this.listProductPage.length / 3)) + 1;
    //   }
    // })
  }

  getProduct() {
    this.http.get<Product[]>('http://localhost:8080/kimkhi/sanphams/').subscribe((data) => {
      this.products = data;
    })
  }

  // getProductPage() {
  //   this.http.get<Product[]>('http://localhost:8080/kimkhi/sanphams/page').subscribe((data) => {
  //     this.listProductPage = data;
  //
  //     if ((this.listProductPage.length % 3) != 0) {
  //       this.totalPagination = (Math.round(this.listProductPage.length / 3)) + 1;
  //     }
  //   })
  // }

  // nextPage() {
  //   this.indexPagination = this.indexPagination + 1;
  //   if (this.indexPagination > this.totalPagination) {
  //     this.indexPagination = this.indexPagination - 1;
  //   }
  //   this.productService.getAllProductPage((this.indexPagination * 3)+3).subscribe((data: Product[]) => {
  //     this.products = data;
  //   })
  // }

  // prviousPage() {
  //   this.indexPagination = this.indexPagination - 1;
  //   if (this.indexPagination == 0) {
  //     this.indexPagination = 1;
  //     this.ngOnInit();
  //   } else {
  //     this.productService.getAllProductPage((this.indexPagination * 3) - 3).subscribe((data: Product[]) => {
  //       this.products = data;
  //     })
  //   }
  // }


  addCart(id: number | undefined) {
    this.http.get<Product[]>(`http://localhost:8080/kimkhi/sanphams/add/${id}`).subscribe((data) => {
      alert("đã thêm vào giỏ hàng")

      this.router.navigate(['/main/menu']);
    })
  }

  // indexPaginationChage(value: any) {
  //   this.indexPagination = value;
  // }

  getCategory() {
    this.http.get<Category[]>('http://localhost:8080/kimkhi/categories/').subscribe((data) => {
      this.categories = data;
    })
  }

}
