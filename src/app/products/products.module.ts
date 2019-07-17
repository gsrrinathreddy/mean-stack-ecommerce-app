import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductItemComponent } from './product-item/product-item.component';

@NgModule({
  declarations: [ProductsComponent, ProductsListComponent, ProductItemComponent],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
