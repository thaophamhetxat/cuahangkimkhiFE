import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Product} from "../../../model/product";
import {Category} from "../../../model/category";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize} from "rxjs/operators";


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];

  arrfiles: any = [];
  arrayPicture: string[] = [];

  productForm: FormGroup = new FormGroup({
    pid: new FormControl(),
    nameProduct: new FormControl(),
    image: new FormControl(),
    quantity: new FormControl(),
    importPrice: new FormControl(),
    price: new FormControl(),
    discount: new FormControl(),
    description: new FormControl(),
    dateAdd: new FormControl(),
    category: new FormControl(),
  })

  constructor(private http: HttpClient,
              private router: Router,
              private storage: AngularFireStorage) {
  }


  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory() {
    this.http.get<Category[]>('http://localhost:8080/kimkhi/categories/').subscribe((data) => {
      this.categories = data;
    })
  }


  @ViewChild('uploadFile1', {static: true}) public avatarDom1: ElementRef | undefined;
  title = 'demoUploadFile';

  submitFileBase() {
    for (let file of this.arrfiles) {
      if (file != null) {
        const filePath = file.name;
        const fileRef = this.storage.ref(filePath);
        this.storage.upload(filePath, file).snapshotChanges().pipe(
          finalize(() => (fileRef.getDownloadURL().subscribe(
            url => {
              this.arrayPicture.push(url);
              console.log(url);
            })))
        ).subscribe();
      }
    }
  }


  submit() {
    for (const argument of this.avatarDom1?.nativeElement.files) {
      this.arrfiles.push(argument)
    }
    this.http.post<Product>('http://localhost:8080/kimkhi/sanphams/', this.productForm.value).subscribe((data) => {
      alert("create thành công - " + data.nameProduct)
      this.submitFileBase();
      this.router.navigate(['/admin/product/home']);
    })
  }

}
