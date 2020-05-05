import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { ProductShellComponent } from './product-shell/product-shell.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { StoreModule } from '@ngrx/store';

const productRoutes: Routes = [
  { path: '', component: ProductShellComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(productRoutes),
    /**
     * The line below will initialize the feature module state
     * allowing for the state to be split in a hierarchical way.
     * Also this way the state for this feature module is only loaded
     * when it is needed
     * This creates a "slice" of state belonging to the products feature module
     * Additionally multiple reducers can be created if the state slice is split
     * indto sub-slices. Linking a reducer with each sub-slice
     *
     * Single slice reducer example:
     *  StoreModule.forFeature('products', reducer)
     *
     * Multiple sub-slices reducer example:
     *  StoreModule.forFeature('products', {
     *    productlist: productListReducer,
     *    productData: productDataRecuder
     *  })
     */
       StoreModule.forFeature('products', {
         productlist: productListReducer,
         productData: productDataRecuder
       })
  ],
  declarations: [
    ProductShellComponent,
    ProductListComponent,
    ProductEditComponent
  ]
})
export class ProductModule { }
