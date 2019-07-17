import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { OffersComponent } from './offers/offers.component';
import { CategoriesComponent } from './categories/categories.component';
import { CartModule } from './cart/cart.module';
import { OffersModule } from './offers/offers.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { BannerComponent } from './layout/banner/banner.component';
import { AuthModule } from './auth/auth.module';

const routes:Routes = [
  {path:'',component:HomeComponent},
  {path:'products',component:ProductsComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'offers',component:OffersComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'cart',component:CartComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ProductsModule,
    CategoriesModule,
    OffersModule,
    AuthModule,
    CartModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
