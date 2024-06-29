import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroEmpleadoComponent } from './registro-empleado/registro-empleado.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { FormsModule } from '@angular/forms';
import { ListadoEmpleadosComponent } from '../listado-empleados/listado-empleados.component';

@NgModule({
  declarations: [
    RegistroEmpleadoComponent,
    PaginaInicioComponent,
    ListadoEmpleadosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PaginaInicioComponent
  ]
})
export class EmpleadoModule { }
