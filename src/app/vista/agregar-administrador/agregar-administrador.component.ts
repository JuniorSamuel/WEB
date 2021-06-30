import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IUsuario } from 'src/app/modelo/usuario';
import { DatosService } from 'src/app/servicios/cargar/datos.service';

@Component({
  selector: 'app-agregar-administrador',
  templateUrl: './agregar-administrador.component.html',
  styleUrls: ['./agregar-administrador.component.css']
})
export class AgregarAdministradorComponent implements OnInit {

  usuario: IUsuario | undefined;
  formUsuario = new FormGroup({
    idUsuario: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    cedula: new FormControl('',[Validators.required]),
    telefono: new FormControl('', [Validators.required, Validators.email]),
    correo: new FormControl('', [Validators.required]),
    rol: new FormControl('', [Validators.required]),
    contrasena1: new FormControl('', [Validators.required]),
    contrasena2: new FormControl('', [Validators.required])
  });

  constructor(public dialogRef: MatDialogRef<AgregarAdministradorComponent>,private _dato: DatosService, @Inject(MAT_DIALOG_DATA) public editar: IUsuario) { }

  ngOnInit(): void {
    console.log(this.editar)
    if(this.editar != null){
      this.onEdit();
    }
  }
  onSubmit() {
    if (this.editar == null) {
      this.usuario = {
        idUsuario: 0,
        nombre: this.formUsuario.value.nombre,
        apellido: this.formUsuario.value.apellido,
        idRol: 1,
        cedula: this.formUsuario.value.cedula,
        telefono: this.formUsuario.value.telefono,
        correo: this.formUsuario.value.correo
      }
      this._dato.postUsuario(this.usuario);
    } else {
      this.usuario = {
        idUsuario: this.editar.idUsuario,
        nombre: this.formUsuario.value.nombre,
        apellido: this.formUsuario.value.apellido,
        idRol: 1,
        cedula: this.formUsuario.value.cedula,
        telefono: this.formUsuario.value.telefono,
        correo: this.formUsuario.value.correo
      }
      this._dato.putUsuario(this.usuario);
    }

    this.onClickNo()
  }

  onClickNo(): void {
    this.dialogRef.close();
  }


  onEdit() {
    this.formUsuario.controls['idUsuario'].setValue(this.editar.idUsuario);
    this.formUsuario.controls['nombre'].setValue(this.editar.nombre);
    this.formUsuario.controls['apellido'].setValue(this.editar.apellido);
    this.formUsuario.controls['rol'].setValue(this.editar.idRol);
    this.formUsuario.controls['cedula'].setValue(this.editar.cedula);
    this.formUsuario.controls['telefono'].setValue(this.editar.telefono);
    this.formUsuario.controls['correo'].setValue(this.editar.correo);
  }
}
