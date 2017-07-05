/**
 * Created by arnau on 5/7/17.
 */
import {Component} from "@angular/core";
@Component({
  selector: 'error',
  templateUrl: '../views/error.html'
})

export class ErrorComponent {
  public titulo: string;

  constructor (){
    this.titulo = "Error! Página no encontrada!";
  }

  ngOnInit() {
    console.error("Componente no encontrado!");
  }
}
