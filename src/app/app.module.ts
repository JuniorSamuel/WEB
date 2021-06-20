import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './vista/login/login.component';
import { RegistroComponent } from './vista/registro/registro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PieComponent } from './compomente/pie/pie.component';
import { PrincipalComponent } from './vista/principal/principal.component';
import { AgregarPostComponent } from './vista/agregar-post/agregar-post.component';
import { NavegacionComponent } from './compomente/navegacion/navegacion.component';
import { TrabajoDetallesComponent } from './vista/trabajo-detalles/trabajo-detalles.component';
import { AgregarcategoriaComponent } from './vista/agregarcategoria/agregarcategoria.component';
import { PerfilComponent } from './vista/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    PieComponent,
    PrincipalComponent,
    AgregarPostComponent,
    NavegacionComponent,    
    TrabajoDetallesComponent,
    AgregarcategoriaComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    MatRadioModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],

  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
