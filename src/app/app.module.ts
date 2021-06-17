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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    PieComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRadioModule
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
