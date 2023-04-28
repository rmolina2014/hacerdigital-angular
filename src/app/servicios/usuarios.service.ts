import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Usuario } from './Usuario';
import {Empleado} from './Empleado';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  API: string='http://localhost/empleados'

  constructor( private clienteHttp:HttpClient) { }

  AgregarEmpleado(datosEmpleado:Empleado):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertar=1",datosEmpleado)
  }

  login(usuario:Usuario): Observable<any> {
    return this.clienteHttp.post(this.API+"?validar",usuario);
  }
    
}
