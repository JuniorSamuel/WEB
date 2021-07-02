import { IUsuario } from './../../modelo/usuario';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  // user!: string;
  // usuario!= IUsuario;
  
  constructor( ) { }

  ngOnInit(): void {
  }

}
