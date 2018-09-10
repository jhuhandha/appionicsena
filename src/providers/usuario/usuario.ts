import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from '../../app/config';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {

  constructor(public http: HttpClient) {
  }

  registrar(datos) : Observable<any>{
    return this.http.post(URL+"registro", datos);
  }

  login_google(data) : Observable<any>{
    return this.http.post(URL+"login/google", data);
  }

}
