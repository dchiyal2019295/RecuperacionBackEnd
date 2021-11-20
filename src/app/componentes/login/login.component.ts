import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import {Usuario} from 'src/app/modelos/usuario.model';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[UsuarioService]
})
export class LoginComponent implements OnInit {
  public usuarioModel: Usuario;
  public token;
  public identidad;

  constructor( private _usuarioService: UsuarioService, private _router: Router) {

      this.usuarioModel = new Usuario('','','')

  }

  ngOnInit(): void {
  }
  obtenertoken(){
    this._usuarioService.login(this.usuarioModel, 'true').subscribe(
      response =>{
        this.token = response.token;
        localStorage.setItem('token', this.token);
      },
      error =>{
        console.log(<any>error);
      }
    )
  }

  login(){
    this._usuarioService.login(this.usuarioModel).subscribe(
      response => {
        this.identidad = response.usuarioEncontrado;
        localStorage.setItem('identidad',JSON.stringify(this.identidad));
        this.obtenertoken();
        Swal.fire({
          icon: 'success',
          title: '!OK!',
          text: '!Binvenido¡ ' + [this.usuarioModel.usuario]
        })
          this._router.navigate(['/inicio'])
      },
        error => {
          Swal.fire ({
            icon: 'error',
            title: '!Lo sentimos no se ha podido ingresar'
          })
        }
    )
  }
}
