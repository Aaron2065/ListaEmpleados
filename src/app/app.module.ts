import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoModule } from './empleado/empleado.module';
import { ListadoEmpleadosComponent } from './listado-empleados/listado-empleados.component'; // Importa el módulo Empleado

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmpleadoModule // Importa el módulo Empleado
  ],
  providers: [],
  bootstrap: [AppComponent, ListadoEmpleadosComponent]
})
export class AppModule { }
