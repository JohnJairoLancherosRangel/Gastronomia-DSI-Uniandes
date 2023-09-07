import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaisesComponent } from './paises/paises.component';
import { CulturaComponent } from './cultura/cultura.component';
import { RecetasComponent } from './recetas/recetas.component';
import { ProductosComponent } from './productos/productos.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';

@NgModule({
  declarations: [
    AppComponent,
    PaisesComponent,
    CulturaComponent,
    RecetasComponent,
    ProductosComponent,
    RestaurantesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
