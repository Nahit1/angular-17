import {
  AfterViewInit,
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
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  httpClient = inject(HttpClient);

  @ViewChild('products', { read: ViewContainerRef })
  viewContainerRef!: ViewContainerRef;
  @ViewChild('placeholder') placeHolderRef!: TemplateRef<{}>;
  @ViewChild('loading') loadingRef!: TemplateRef<{}>;
  @ViewChild('error') errorRef!: TemplateRef<{}>;

  productList: any;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.viewContainerRef.createEmbeddedView(this.placeHolderRef);

    this.httpClient.get('https://fakestoreapi.com/products').subscribe(
      (item) => {
        this.viewContainerRef.clear();
        this.viewContainerRef.createEmbeddedView(this.loadingRef);
        import('./product/product.component').then((c) => {
          this.viewContainerRef.clear();
          const productComponent = this.viewContainerRef.createComponent(
            c.ProductComponent
          );
          productComponent.instance.products = item;
        });
      },
      (error) => {
        this.viewContainerRef.clear();
        this.viewContainerRef.createEmbeddedView(this.errorRef);
      }
    );
  }
}
