import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProductsService} from '../products.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  constructor(private router: Router,
              private dataProvider: ProductsService,
              ) { }

  ngOnInit(): void { }
  createOrder(): void {
    this.dataProvider.qty = 1;
    window.alert('Ha agrado un producto');
    this.navigateCarrito();
}
  navigateCarrito(): void {
    this.router.navigate(['carrito']);
  }
}
