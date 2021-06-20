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
  ,{ path: "Nav", component: NavegacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
