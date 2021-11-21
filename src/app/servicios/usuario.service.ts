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
  public identidad;
  constructor(public _http: HttpClient) {
    this.ruta = GLOBAL.url;
   }

   login( Usuario, getToken = null): Observable<any>{

      if(getToken !=null){
        Usuario.getToken = getToken;
      }
        let params = JSON.stringify(Usuario);
        return this._http.post(this.ruta+'login', params,{headers: this.headersVariable});
   }


   }

