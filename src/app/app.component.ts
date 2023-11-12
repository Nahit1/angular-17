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
})
export class AppComponent implements OnInit {
  httpClient = inject(HttpClient);
  productsList: any;

  ngOnInit(): void {
    this.httpClient
      .get('https://fakestoreapi.com/products')
      .subscribe((res) => (this.productsList = res));
  }
}
