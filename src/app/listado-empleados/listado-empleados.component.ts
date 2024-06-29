import { Component } from '@angular/core';
import { IEmpleado } from '../empleado/interfaces/empleado';
import { EmpleadoService } from '../empleado/empleado.service';

@Component({
  selector: 'app-listado-empleados',
  templateUrl: './listado-empleados.component.html',
  styleUrls: ['./listado-empleados.component.css']
})
export class ListadoEmpleadosComponent {
  //Inyectar el servicio
  constructor(private empleadosService: EmpleadoService){}

  //Definimos un metodo GET para obtener la lista desde el servicio
  get empleados(): IEmpleado[] {
    return this.empleadosService.empleados
  }
  
  eliminar(index: number) {
    this.empleadosService.eliminarEmpleado(index);
  }
}
