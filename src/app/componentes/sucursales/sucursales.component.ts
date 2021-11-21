import { Component, OnInit } from '@angular/core';
import { Sucursales } from 'src/app/modelos/sucursales.model';
import { SucursalesService } from 'src/app/servicios/sucursales.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.scss'],
  providers:[SucursalesService]
})
export class SucursalesComponent implements OnInit {
    public sucursalesList;
    public sucursalModel: Sucursales;
    public buscarSucursalNombre;
  constructor(private _sucursalesService: SucursalesService ) { }

  ngOnInit(): void {
    this.obtenerSucursales();
  }

  obtenerSucursales(){
    this._sucursalesService.obtenerSucursales().subscribe(

       response=>{

        console.log(response);
        this.sucursalesList = response.Sucursal;
       },error=>{
         console.log(<any>error)

       }
    )
  }
  agregarSucursal(){
    this._sucursalesService.agregarSucursal(this.sucursalModel).subscribe(
      response => {
        console.log(response);
        Swal.fire({
          icon: 'success',
          title: '!Ok!',
          text: 'Sucursal Agregada Correctamente'
        });
        this.obtenerSucursales();
      },
      error =>{
        console.log(<any>error);
        Swal.fire({
          icon: 'warning',
          title: '!Error!',
          text: 'La sucursal Ya existe'
        })
      }
    )
  }
  ObtenerSucursalesID(id){
    this._sucursalesService.obtenerSucursalID(id).subscribe(
      response => {
        this.sucursalModel = response.sucursalEncontrada;
        console.log(response.sucursalEncontrada);
        Swal.fire({
          icon: 'success',
          title: '!Ok!',
          text: 'Datos de la sucursal obtenidos correctamente'
        })
      },
      error => {
        console.log(<any>error);
        Swal.fire({
          icon: 'error',
          title: '!Error!',
          text: 'No se ha podido obtener los datos de la sucursal'
        })
      }
    )
  }



  EditarSucursal(id){
    this._sucursalesService.EditarSucursal(id).subscribe(
      response => {
        console.log(response);
        Swal.fire({
          icon: 'success',
          title: '!Ok!',
          text: 'Sucursal Editada Correctamente'
        })
        this.obtenerSucursales();
      },
      error => {
        console.log(<any>error);
        Swal.fire({
          icon: 'error',
          title: '!Error',
          text: 'No se ha podido editar la sucursal'
        })
      }
    )
  }

  EliminarSucursal(id){
    this._sucursalesService.EliminarSucursal(id).subscribe(
      response => {
        console.log(response)
        Swal.fire({
          icon: 'success',
          title: '!Ok!',
          text: 'Sucursal eliminada de la base de datos'
        })
        this.obtenerSucursales()
      },
      error => {
        console.log(<any>error);
        Swal.fire({
          icon: 'error',
          title: '!Error',
          text: 'No se ha podido eliminar la sucursal de la apliacion'
        })
      }
    )
  }

}
