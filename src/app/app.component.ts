import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { shareReplay } from 'rxjs';
import { LoadingComponent } from './loading/loading.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ProductComponent,
    PlaceholderComponent,
    LoadingComponent,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  httpClient = inject(HttpClient);
  productStatus = false;

  productsList: any;

  ngOnInit(): void {
    this.httpClient
      .get('https://fakestoreapi.com/products')
      .subscribe((x) => (this.productsList = x));
  }

  // getProduct() {
  //   this.httpClient
  //     .get('https://fakestoreapi.com/products')
  //     .subscribe((x: any) => {
  //       this.products = x;
  //       console.log(x);
  //     });
  // }

  getData() {
    this.productStatus = true;
  }
}
