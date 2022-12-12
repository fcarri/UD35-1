import { Component } from '@angular/core';
import { Cliente } from './models/cliente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'UD35-1';
  nombreCliente:string="";
  cifCliente:string="";
  direccionCliente:string="";
  grupoCliente:number=1;
  ListadoClientes: Cliente[] | null = null;

  constructor(){}

  guardar():void{

    const cliente : Cliente = {
      nombre: this.nombreCliente,
      cif: this.cifCliente,
      direccion: this.direccionCliente,
      grupo : this.grupoCliente
    }

    if(this.ListadoClientes == null) this.ListadoClientes = [];
    this.ListadoClientes.push(cliente);



  }



}
