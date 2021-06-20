import { PerfilComponent } from './vista/perfil/perfil.component';
import { AgregarcategoriaComponent } from './vista/agregarcategoria/agregarcategoria.component';
import { TrabajoDetallesComponent } from './vista/trabajo-detalles/trabajo-detalles.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarraNavegacionesComponent } from './barra-navegaciones/barra-navegaciones.component';

import { LoginComponent } from './vista/login/login.component';
import { RegistroComponent } from './vista/registro/registro.component';

const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: "Login", component: LoginComponent},
  { path: "Registro", component: RegistroComponent},
  {path: "Navegacion", component: BarraNavegacionesComponent},
  {path: "Detalles_Trabajo", component: TrabajoDetallesComponent},
  {path: "Agregar_Categoria", component: AgregarcategoriaComponent},
  {path: "PerfilU", component: PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
