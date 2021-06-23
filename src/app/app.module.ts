import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table'
import {MatInputModule} from '@angular/material/input';

import { AppRoutingModule, routesComponent } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatPaginatorModule } from '@angular/material/paginator';
import { UsuarioComponent } from './vista/administrador/pestañas/usuario/usuario.component';
import { materialComponent } from './material/material.module';
import { FiltrousuarioPipe } from './pipes/filtrousuario.pipe';
import { FormControl, FormsModule } from '@angular/forms';
import { PosterComponent } from './vista/administrador/pestañas/poster/poster.component';
import { AdministradorComponent } from './vista/administrador/pestañas/administrador/administrador.component';
import { CategoriaComponent } from './vista/administrador/pestañas/categoria/categoria.component';
import { PostComponent } from './vista/administrador/pestañas/post/post.component';
import { ConfigComponent } from './vista/administrador/pestañas/config/config.component';


@NgModule({
  declarations: [
    AppComponent,
    routesComponent,
    UsuarioComponent,
    FiltrousuarioPipe,
    PosterComponent,
    AdministradorComponent,
    CategoriaComponent,
    PostComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    MatRadioModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule
    
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
