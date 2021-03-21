import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public price: number;
  public  name: string;
  public qty: number;

  constructor() { }
}
