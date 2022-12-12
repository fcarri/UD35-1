import { Component, Input, OnInit} from '@angular/core';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})

export class ListadoClientesComponent implements OnInit {

  @Input() ListadoClientes : any;

  constructor(){};

  ngOnInit(): void {

  }

}
//alert(Cliente);
