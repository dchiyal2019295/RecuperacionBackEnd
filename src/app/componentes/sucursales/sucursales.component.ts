import { Component, OnInit } from '@angular/core';
import { SucursalesService } from 'src/app/servicios/sucursales.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.scss'],
  providers:[SucursalesService]
})
export class SucursalesComponent implements OnInit {
public sucursales;
  constructor(private _usuarioService: UsuarioService) { }

  ngOnInit(): void {

  }
  obtenerUsuarios(){
    this._usuarioService.obtenerSucursales().subscribe(
      response=>{
        console.log(response);
      },
      error=>{
            console.log(<any>error);
      }
    )
  }

}
