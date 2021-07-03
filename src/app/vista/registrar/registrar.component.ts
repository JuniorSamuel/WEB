import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupName, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef} from '@angular/material/dialog';
import { IUsuario } from 'src/app/modelo/usuario';
import { DatosService } from 'src/app/servicios/cargar/datos.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  habilitar: boolean = true;
  usuario: IUsuario | undefined;
  contrasena: string = '';  

  formRegis = this.formBuilder.group({
    nombre: ['',Validators.required],
    apellido: ['',Validators.required],
    cedula: ['', Validators.required],
    telefono: ['',Validators.required],
    correo: ['', [Validators.required, Validators.email]],
    contrasena1: ['',[Validators.required, Validators.minLength(8)]],
    contrasena2: ['', [Validators.required, Validators.minLength(8)]],
    rol: ['',Validators.required]
  });

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<RegistrarComponent>,private _dato: DatosService,) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if (this.formRegis.value.contrasena1 == this.formRegis.value.contrasena2) {

      this.usuario = {
        idUsuario: 0,
        nombre: this.formRegis.value.nombre,
        apellido: this.formRegis.value.apellido,
        idRol: this.formRegis.value.rol,
        cedula: this.formRegis.value.cedula,
        telefono: this.formRegis.value.telefono,
        correo: this.formRegis.value.correo,
        contrasena: this.contrasena
      }
      this._dato.postUsuario(this.usuario);
      this.onClickNo();
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Ha sido Registrado.',
        showConfirmButton: false,
        timer: 2500
        
      })
    }else{
      // alert('Contraseña no coinciden');
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Contraseñas no coinciden!',
        text: 'Deben coincidir las contraseñas.',
        showConfirmButton: false,
        timer: 2000
      })
    }
  }
  onClickNo(): void {
    this.dialogRef.close();
  }

}
