import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { LoadingComponent } from './loading/loading.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ProductComponent,
    PlaceholderComponent,
    LoadingComponent,
    HttpClientModule,
  ],
  template: `
    <div class="container mx-auto px-4 mt-5">
      @defer () {
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
export class AppComponent {}
