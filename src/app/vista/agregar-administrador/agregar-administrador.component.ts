import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupName, Validators, FormBuilder  } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IRol } from 'src/app/modelo/rol';
import { IUsuario } from 'src/app/modelo/usuario';
import { DatosService } from 'src/app/servicios/cargar/datos.service';
import { AdministradorComponent } from '../administrador/administrador.component';

@Component({
  selector: 'app-agregar-administrador',
  templateUrl: './agregar-administrador.component.html',
  styleUrls: ['./agregar-administrador.component.css']
})
export class AgregarAdministradorComponent implements OnInit {

  habilitar: boolean = true;
  usuario: IUsuario | undefined;
  contrasena: string = '';  

  formUsuario = this.formBuilder.group({
    idUsuario: ['',Validators.required],
    nombre: ['',Validators.required],
    apellido: ['',Validators.required],
    cedula: ['', Validators.required, [Validators.min(40000000000), Validators.max(40000000002)]],
    telefono: ['',[Validators.required, Validators.min(8999999999), Validators.max(9000000002)]],
    correo: ['', [Validators.required, Validators.email]],
    contrasena1: ['',[Validators.required, Validators.minLength(8)]],
    contrasena2: ['', [Validators.required, Validators.minLength(8)]],
    rol: ['',Validators.required]
  });
  constructor(
    public dialogRef: MatDialogRef<AgregarAdministradorComponent>,
    private _dato: DatosService,
    @Inject(MAT_DIALOG_DATA) public editar: { usuario: IUsuario, editar: boolean }, private formBuilder: FormBuilder
  ){}

  ngOnInit(): void {
    console.log(this.editar);
    if (this.editar != null) {
      this.onEdit();
      if (!this.editar.editar) {
        this.onInavilitar();
      }
    } else {
      this.formUsuario.controls['rol'].setValue("2")
    }
  }



  onSubmit() {
    if (this.editar == null) {
      if (this.formUsuario.value.contrasena1 == this.formUsuario.value.contrasena2) {

        this.usuario = {
          idUsuario: 0,
          nombre: this.formUsuario.value.nombre,
          apellido: this.formUsuario.value.apellido,
          idRol: this.formUsuario.value.rol,
          cedula: this.formUsuario.value.cedula,
          telefono: this.formUsuario.value.telefono,
          correo: this.formUsuario.value.correo,
          contrasena: this.contrasena
        }
        this._dato.postUsuario(this.usuario);
        alert('Usuarios registrado');
      }else{
        alert('Contraseña no coinciden');
      }
    } else {
      this.usuario = {
        idUsuario: this.editar.usuario.idUsuario,
        nombre: this.formUsuario.value.nombre,
        apellido: this.formUsuario.value.apellido,
        idRol: this.formUsuario.value.rol,
        cedula: this.formUsuario.value.cedula,
        telefono: this.formUsuario.value.telefono,
        correo: this.formUsuario.value.correo,
        contrasena: this.formUsuario.value.contrasena1
      }
     
      this._dato.putUsuario(this.usuario);
    }
    
    this.onClickNo()
  }

  onClickNo(): void {
    this.dialogRef.close();
  }


  onEdit() {
    this.formUsuario.controls['idUsuario'].setValue(this.editar.usuario.idUsuario);
    this.formUsuario.controls['nombre'].setValue(this.editar.usuario.nombre);
    this.formUsuario.controls['apellido'].setValue(this.editar.usuario.apellido);
    this.formUsuario.controls['rol'].setValue(this.editar.usuario.idRol);
    this.formUsuario.controls['cedula'].setValue(this.editar.usuario.cedula);
    this.formUsuario.controls['telefono'].setValue(this.editar.usuario.telefono);
    this.formUsuario.controls['correo'].setValue(this.editar.usuario.correo);
    this.formUsuario.controls['contrasena1'].setValue(this.editar.usuario.contrasena)
  }

  onInavilitar() {
    this.formUsuario.controls['idUsuario'].disable();
    this.formUsuario.controls['nombre'].disable();
    this.formUsuario.controls['apellido'].disable();
    this.formUsuario.controls['rol'].disable();
    this.formUsuario.controls['cedula'].disable();
    this.formUsuario.controls['telefono'].disable();
    this.formUsuario.controls['correo'].disable();
  }
}
