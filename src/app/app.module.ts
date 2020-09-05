import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DivisasComponent } from './componentes/divisas/divisas.component';
import { MayusculaComponent } from './componentes/mayuscula/mayuscula.component';
import { NumerosComponent } from './componentes/numeros/numeros.component';
import { FechaComponent } from './componentes/fecha/fecha.component';
import { OrdenComponent } from './componentes/orden/orden.component';
import { PersonalizadoComponent } from './componentes/personalizado/personalizado.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { CuadradoPipe } from './pipes/cuadrado.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DivisasComponent,
    MayusculaComponent,
    NumerosComponent,
    FechaComponent,
    OrdenComponent,
    PersonalizadoComponent,
    MenuComponent,
    CuadradoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
