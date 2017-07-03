/**
 * Created by arnau on 3/7/17.
 */
import {Component} from "@angular/core";

@Component({
  selector: 'home',
  templateUrl: '../views/home.html'
})
export class HomeComponent {
  public titulo: String;

  constructor(){
    this.titulo = 'WebApp de productos con Angular 4';
  }

  ngOnInit(){
    console.log("Se ha cargado el componente home.component.ts")
  }
}
