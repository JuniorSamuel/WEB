import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-administrador',
  templateUrl: './agregar-administrador.component.html',
  styleUrls: ['./agregar-administrador.component.css']
})
export class AgregarAdministradorComponent implements OnInit {


  formAdmi = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    cedula: new FormControl('',[Validators.required]),
    telefono: new FormControl('', [Validators.required, Validators.email]),
    correo: new FormControl('', [Validators.required]),
    contrasena1: new FormControl('', [Validators.required]),
    contrasena2: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }



}
