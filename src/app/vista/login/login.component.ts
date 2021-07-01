import { RegistrarComponent } from './../registrar/registrar.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private rout: Router
  ) { }

  ngOnInit(): void {
  }
  onCreate(){
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "55%";
    // dialogConfig.height = "20%";
    this.dialog.open(RegistrarComponent,dialogConfig);  
  }

  login(){
    this.rout.navigate(['Cargardo']);
  }

}
