import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Sucursales } from '../modelos/sucursales.model';

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {
  public ruta: String;
  public headersVariable = new HttpHeaders().set('Content-Type','application/json');
  public token;
  public identidad;

  constructor(public _http: HttpClient) {
    this.ruta = GLOBAL.url;
  }

  obtenerSucursales(): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

      return this._http.get(this.ruta+'obtenerSucursales', {headers: headersToken})
  }

  agregarSucursal(sucursal: Sucursales): Observable<any>{
    let params = JSON.stringify(sucursal);

    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

    return this._http.post(this.ruta + 'agregarSucursal', params, {headers: headersToken});
  }



  EditarSucursal(sucursal: Sucursales): Observable<any>{
    let params = JSON.stringify(sucursal);

    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

    return this._http.put(this.ruta + 'EditarSucursal/' + sucursal._id, params, {headers: headersToken});
  }

  obtenerSucursalID(id: string): Observable<any>{

    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

    return this._http.get(this.ruta + 'obtenerSucursalesID/' + id, {headers: headersToken});
  }

  EliminarSucursal(id: String): Observable<any>{

    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

    return this._http.delete(this.ruta + 'EliminarSucursal/' + id, {headers: headersToken});
  }
  obtenerToken(){
    var token2 = localStorage.getItem('token')

    if(token2 != 'undefined'){
      this.token = token2;
    } else {
      this.token = null;
    }

    return this.token
  }
}
