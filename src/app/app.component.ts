import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UD35-1';
  nombre:String | undefined;
  cif:String | undefined;
  direccion:String | undefined;
  grupo:String | undefined;

  a:String = "wewe";



}
