import { Component } from '@angular/core';
import { IEmpleado } from '../interfaces/empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-registro-empleado',
  templateUrl: './registro-empleado.component.html',
  styleUrls: ['./registro-empleado.component.css']
})
export class RegistroEmpleadoComponent {
  //Creamos un nuevo objeto cliente
  nuevo: IEmpleado = {
    noEmpleado: 0,
    nombre: '',
    correo: '',
    telefono: '',
    fechaNacimiento: '',
    sexo: ''
  }

  //Inyectar el servicio
  constructor(private empleadosService: EmpleadoService){}

  agregar(){
    if(this.nuevo.noEmpleado === null)
      return;
    if(this.nuevo.nombre.trim().length === 0)
      return;
    if(this.nuevo.correo.trim().length <= 10)
      return;
    if(this.nuevo.telefono.trim().length < 10)
      return;
    if(this.nuevo.fechaNacimiento === null)
      return;
    if(this.nuevo.sexo === null)
      return;

    //Agregamos el nuevo cliente invocando al servicio
    this.empleadosService.agregarEmpleado(this.nuevo);

    //Emitimos un nuevo evento de tipo "on NuevoCliente"
    //this.onNuevoCliente.emit(this.nuevo)

    this.nuevo = {
      noEmpleado: 0,
      nombre: '',
      correo: '',
      telefono: '',
      fechaNacimiento: '',
      sexo: ''
    }
  }
}
