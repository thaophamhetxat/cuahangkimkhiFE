
import {Supplier} from "./supplier";

export class Category {
  id: number | undefined;
  nameCategory?: String;
  description?: String;
  supplier: Supplier | undefined;
}
