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

  categories: Category[] = [];

  products: Product[] = [];
  listProductNotPagination: Product[] = [];

  searchText: any;


  indexPagination: number = 1;
  totalPagination: number | undefined;

  constructor(private activatedRoute: ActivatedRoute,
              private http: HttpClient,
              private router: Router,
              private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getAllProduct(0).subscribe((data: Product[]) => {
      console.log(data);
      this.products = data;

    });

    this.productService.getAllProductNotPagination().subscribe((data: Product[]) => {

      this.listProductNotPagination = data;

      if ((this.listProductNotPagination.length % 5) != 0) {
        this.totalPagination = (Math.round(this.listProductNotPagination.length / 5)) + 1;
      }
    })
  }

  indexPaginationChage(value: number) {
    this.indexPagination = value;
  }

  firtPage() {
    this.indexPagination = 1;
    this.ngOnInit();
  }

  nextPage() {
    this.indexPagination = this.indexPagination + 1;
    if (this.indexPagination > this.totalPagination!) {
      this.indexPagination = this.indexPagination - 1;
    }
    this.productService.getAllProduct((this.indexPagination * 5) - 5).subscribe((data: Product[]) => {
      this.products = data;
    })
  }

  prviousPage() {
    this.indexPagination = this.indexPagination - 1;
    if (this.indexPagination == 0) {
      this.indexPagination = 1;
      this.ngOnInit();
    } else {
      this.productService.getAllProduct((this.indexPagination * 5) - 5).subscribe((data: Product[]) => {
        this.products = data;
      })
    }
  }

  lastPage() {
    this.indexPagination = this.listProductNotPagination.length / 5;
    this.productService.getAllProduct((this.indexPagination * 5) - 5).subscribe((data: Product[]) => {
      this.products = data;
    })
  }

  // getProductPage(nextPage: any | undefined) {
  //   this.productService.pageProduct(nextPage).subscribe(data => {
  //     // @ts-ignore
  //     this.products = data['content'];
  //
  //     this.totalPagination = data['totalPagination'];
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
