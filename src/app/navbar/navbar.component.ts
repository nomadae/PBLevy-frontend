import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isInCart = false;

  constructor() { }

  ngOnInit(): void {
  }
  toggleisInCart(): void {
      this.isInCart = !this.isInCart;
  }

}
