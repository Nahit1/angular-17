import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  inject,
} from '@angular/core';
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
  template: `
    <div class="container mx-auto px-4 mt-5">
      <button #product mat-raised-button color="primary mr-2">
        Show Product
      </button>
      <button #prefetch mat-raised-button color="primary">Prefetch</button>
      @defer (on interaction(product); prefetch on hover(prefetch)) {
      <app-product></app-product>
      } @placeholder {
      <app-placeholder></app-placeholder>
      } @error {
      <span>Error</span>
      } @loading() {
      <app-loading></app-loading>
      }
    </div>
  `,
})
export class AppComponent implements OnInit {
  isShow = false;
  httpClient = inject(HttpClient);
  productsList: any;

  ngOnInit(): void {
    // this.httpClient
    //   .get('https://fakestoreapi.com/products')
    //   .subscribe((res) => (this.productsList = res));
  }
}
