import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupName, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef} from '@angular/material/dialog';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  formRegis = this.formBuilder.group({
    nombre: ['',Validators.required],
    apellido: ['',Validators.required],
    cedula: ['', Validators.required, [Validators.min(40000000000), Validators.max(40000000002)]],
    telefono: ['',[Validators.required, Validators.min(8999999999), Validators.max(9000000002)]],
    correo: ['', [Validators.required, Validators.email]],
    contrasena1: ['',[Validators.required, Validators.minLength(8)]],
    contrasena2: ['', [Validators.required, Validators.minLength(8)]]
  });

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<RegistrarComponent>) { }

  ngOnInit(): void {
  }

  onClickNo(): void {
    this.dialogRef.close();
  }

}
