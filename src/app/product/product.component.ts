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
  @Input() products: any;
  productList: any;
  ngOnInit(): void {
    this.products.subscribe((x: any) => (this.productList = x));
  }
}
