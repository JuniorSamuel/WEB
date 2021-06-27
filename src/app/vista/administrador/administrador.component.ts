import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ICategoria } from 'src/app/modelo/categoria';
import { IUsuario } from 'src/app/modelo/usuario';
import { IVacante } from 'src/app/modelo/vacante';
import { ApiService } from 'src/app/servicios/Api/api.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {


  constructor() {

  }

  ngOnInit(): void {
    
  }
}
