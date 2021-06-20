import { PerfilComponent } from './vista/perfil/perfil.component';
import { AgregarcategoriaComponent } from './vista/agregarcategoria/agregarcategoria.component';
import { TrabajoDetallesComponent } from './vista/trabajo-detalles/trabajo-detalles.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavegacionComponent } from './compomente/navegacion/navegacion.component';
import { AgregarPostComponent } from './vista/agregar-post/agregar-post.component';

import { LoginComponent } from './vista/login/login.component';
import { PrincipalComponent } from './vista/principal/principal.component';
import { RegistroComponent } from './vista/registro/registro.component';

const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: "Login", component: LoginComponent},
  { path: "Registro", component: RegistroComponent},
  { path: "Principal", component: PrincipalComponent},
  { path: "Agregar_Post", component: AgregarPostComponent}


  // Prueba
  ,{ path: "Nav", component: NavegacionComponent},
  {path: "Detalles_Trabajo", component: TrabajoDetallesComponent},
  {path: "Agregar_Categoria", component: AgregarcategoriaComponent},
  {path: "PerfilU", component: PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
