/**
 * Created by arnau on 5/7/17.
 */
import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'productos-list',
  templateUrl: '../views/productos-list.html'
})

export class ProductosListComponent{
  public titulo: string;

  constructor(
    private _route: ActivatedRoute,
    private  _router: Router
  ) {
    this.titulo = 'Listado de productos';
  }

  ngOnInit() {
    console.log('productos-list.component cargado');
  }
}
