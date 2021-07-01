import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupName, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-agregar-administrador',
  templateUrl: './agregar-administrador.component.html',
  styleUrls: ['./agregar-administrador.component.css']
})
export class AgregarAdministradorComponent implements OnInit {

  formAdmi = this.formBuilder.group({
    nombre: ['',Validators.required],
    apellido: ['',Validators.required],
    cedula: ['', Validators.required, [Validators.min(40000000000), Validators.max(40000000002)]],
    telefono: ['',[Validators.required, Validators.min(8999999999), Validators.max(9000000002)]],
    correo: ['', [Validators.required, Validators.email]],
    contrasena1: ['',[Validators.required, Validators.minLength(8)]],
    contrasena2: ['', [Validators.required, Validators.minLength(8)]]
  });

  // formAdmi = new FormGroup({
  //   nombre: new FormControl('', [Validators.required]),
  //   apellido: new FormControl('', [Validators.required]),
  //   cedula: new FormControl('',[Validators.required]),
  //   telefono: new FormControl('', [Validators.required, Validators.email]),
  //   correo: new FormControl('', [Validators.required]),
  //   contrasena1: new FormControl('', [Validators.required]),
  //   contrasena2: new FormControl('', [Validators.required])
  // });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
