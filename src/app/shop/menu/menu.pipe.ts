import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "../../model/product";

@Pipe({
  name: 'menu'
})
export class MenuPipe implements PipeTransform {

  transform(list: Product[], searchText: string): Product[] {
    if (!searchText){
      return list;
    }
    searchText = searchText.toLocaleLowerCase();
    list = list.filter(s=>{
      return s.nameProduct.toLocaleLowerCase().includes(searchText);
    });
    return list;
  }

}
