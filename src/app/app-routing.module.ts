import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DivisasComponent } from './componentes/divisas/divisas.component';
import { FechaComponent } from './componentes/fecha/fecha.component';
import { MayusculaComponent } from './componentes/mayuscula/mayuscula.component';
import { OrdenComponent } from './componentes/orden/orden.component';
import { NumerosComponent } from './componentes/numeros/numeros.component';
import { PersonalizadoComponent } from './componentes/personalizado/personalizado.component';


const routes: Routes = [
  {path: 'divisas', component: DivisasComponent},
  {path: 'fecha', component: FechaComponent},
  {path: 'mayuscula', component: MayusculaComponent},
  {path: 'numeros', component: NumerosComponent},
  {path: 'orden', component: OrdenComponent},
  {path: 'personalizado', component: PersonalizadoComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'divisas' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
