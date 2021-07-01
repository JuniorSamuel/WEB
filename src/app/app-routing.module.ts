import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavegacionComponent } from './compomente/navegacion/navegacion.component';
import { AgregarPostComponent } from './vista/agregar-post/agregar-post.component';

import { LoginComponent } from './vista/login/login.component';
import { PrincipalComponent } from './vista/principal/principal.component';
import { PieComponent } from './compomente/pie/pie.component';
import { AdministradorComponent } from './vista/administrador/administrador.component';

import { PerfilComponent } from './vista/perfil/perfil.component';
import { TrabajoDetallesComponent } from './vista/trabajo-detalles/trabajo-detalles.component';
import { OfertasComponent } from './vista/ofertas/ofertas.component';
import { CargarComponent } from './vista/cargar/cargar.component';
import { MisPostComponent } from './vista/mis-post/mis-post.component';

const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: "Login", component: LoginComponent},
  { path: "Principal", component: PrincipalComponent},
  { path: "Agregar_post", component: AgregarPostComponent},
  { path: "Administrador", component: AdministradorComponent},
  { path: "Ofertas/:id/:categoria", component: OfertasComponent},
  { path: "Vacante", component: TrabajoDetallesComponent},
  { path: "Cargardo", component: CargarComponent},
  { path: "Mis_post", component: MisPostComponent},
  // Prueba
  { path: "Nav", component: NavegacionComponent},
  
  //hasta aqui
 
  // {path: "Agregar_Categoria", component: AgregarcategoriaComponent},
  {path: "PerfilU", component: PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routesComponent = [
  LoginComponent,
  // RegistroComponent,
  PrincipalComponent,
  AgregarPostComponent,
  AdministradorComponent,
  OfertasComponent

  // Prueba
  ,NavegacionComponent,
  // AgregarcategoriaComponent,
  PerfilComponent,
  TrabajoDetallesComponent,
  PieComponent
];