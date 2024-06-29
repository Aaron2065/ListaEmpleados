import { Injectable } from '@angular/core';
import { IEmpleado } from './interfaces/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private _empleados: IEmpleado[] = [];

  get empleados(): IEmpleado[] {
    return this._empleados;
  }

  agregarEmpleado(empleado: IEmpleado) {
    this._empleados.push(empleado);
    localStorage.setItem('empleados', JSON.stringify(this._empleados));
  }

  eliminarEmpleado(index: number) {
    this._empleados.splice(index, 1);
    localStorage.setItem('empleados', JSON.stringify(this._empleados));
  }

  constructor() { 
    this._empleados = JSON.parse(localStorage.getItem('empleados')!) || [];
  }
}
