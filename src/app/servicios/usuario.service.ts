import { Injectable, Type } from '@angular/core';
import { GLOBAL } from './global.service';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  public ruta: String;
  public token;
  public headersVariable = new HttpHeaders().set('Content-Type','application/json');
  constructor(public _http: HttpClient) {
    this.ruta = GLOBAL.url;
   }

   obtenerSucursales(): Observable<any>{

    return this._http.get(this.ruta+'obtenerSucursales', {headers: this.headersVariable})

   }


   }

