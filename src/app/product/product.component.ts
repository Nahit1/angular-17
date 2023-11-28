import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  httpClient = inject(HttpClient);
  products: any;

  ngOnInit(): void {
    this.httpClient
      .get('https://fakestoreapi.com/products')
      .subscribe((res) => (this.products = res));
  }
}
