import { Component } from '@angular/core';
// ACA EEN LA ANOTACION COMPONENT PODEMOS VER TODOS LOS PARAMETROS DEL COMPONENTE
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-clase-21-4';
  nombre = 'Mateo';
  textoPlaceHolder = 'Escriba aqui'
  disabledInput = true;
 
  textoEventBinding = "Binding";
  textoTwoDataBinding = '';


  constructor() {
    setInterval(() => {
      this.nombre = 'Mateito';
      this.disabledInput = false
    },
      5000
    )

  }
  Suma(num1: number, num2: number) {
    return num1 + num2

  }
  cambiarTexto(){
    this.textoEventBinding = "Texto Modificado desde el Controlador"
  }

}


