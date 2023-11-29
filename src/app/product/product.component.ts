import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="grid grid-cols-2 gap-5 mt-3">
    <div
      class="w-[450px] h-44 border border-slate-700 rounded p-3 flex flex-col"
      *ngFor="let item of products"
    >
      <div class="flex gap-2 h-[80px] w-full">
        <div class="w-14 h-14">
          <img [src]="item.image" alt="" class="w-full h-full" />
        </div>
        <div class="flex flex-col mt-3 min-w-[355px] text-sm gap-1">
          <div class="flex">
            <span class="font-bold">Title:</span>
            <span class="text-sm">{{ item.title.slice(0, 30) + '...' }}</span>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center gap-1">
              <span class="font-bold">Category:</span>
              <span>{{ item.category }}</span>
            </div>
            <div class="flex items-center gap-1">
              <span class="font-bold">Price:</span>
              <span>{{ item.price }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col">
        <span class="font-bold">Description:</span>
        <span>{{ item.description.slice(0, 100) + '...' }}</span>
      </div>
    </div>
  </div> `,
})
export class ProductComponent implements OnInit {
  httpClient = inject(HttpClient);
  products: any;

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    setTimeout(() => {
      this.httpClient
        .get('https://fakestoreapi.com/products')
        .subscribe((res) => (this.products = res));
    }, 3000);
  }
}
