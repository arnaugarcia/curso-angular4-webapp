import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HomeComponent} from "./components/home.component";
import {appRoutingProviders, routing} from "./app.routing";
import {ErrorComponent} from "./components/error.component";
import {ProductosListComponent} from "./components/productos-list.component";
import {HttpModule} from "@angular/http";
import {ProductoAddComponent} from "./components/producto-add.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ProductosListComponent,
    ProductoAddComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
