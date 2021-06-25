import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table'
import { MatInputModule} from '@angular/material/input';

import { AppRoutingModule, routesComponent } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatPaginatorModule } from '@angular/material/paginator';
import { UsuarioComponent } from './vista/administrador/pestañas/usuario/usuario.component';
import { FormControl, FormsModule } from '@angular/forms';
import { PosterComponent } from './vista/administrador/pestañas/poster/poster.component';
import { CategoriaComponent } from './vista/administrador/pestañas/categoria/categoria.component';
import { PostComponent } from './vista/administrador/pestañas/post/post.component';
import { ConfigComponent } from './vista/administrador/pestañas/config/config.component';
import { AdmitComponent } from './vista/administrador/pestañas/admit/admit.component';
import { PieComponent } from './compomente/pie/pie.component';
import { NavegacionComponent } from './compomente/navegacion/navegacion.component';
import { ModalpruebaComponent } from './vista/administrador/pestañas/usuario/modalprueba/modalprueba.component';

import {MatDialogModule} from '@angular/material/dialog';//PARA PRUEBA
import { AgregarcategoriaComponent } from './vista/agregarcategoria/agregarcategoria.component';//PARA PRUEBA
import { AgregarPostComponent } from './vista/agregar-post/agregar-post.component';//PARA PRUEBA

@NgModule({
  declarations: [
    AppComponent,
    routesComponent,
    UsuarioComponent,
    PosterComponent,
    CategoriaComponent,
    PostComponent,
    ConfigComponent,
    AdmitComponent,
    PieComponent,
    NavegacionComponent,
    ModalpruebaComponent,
    // MatDialogModule,
  ],
  imports: [
    BrowserModule,
    MatRadioModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule, 
    MatDialogModule,
  ],

  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
    }
  ],
  bootstrap: [AppComponent],

  entryComponents:[AgregarcategoriaComponent, AgregarPostComponent] //PARA ABRIR DIALOG

})
export class AppModule { }
