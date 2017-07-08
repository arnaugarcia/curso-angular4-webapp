/**
 * Created by arnau on 5/7/17.
 */
import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductoService} from "../services/producto.service";
@Component({
  selector: 'productos-list',
  templateUrl: '../views/productos-list.html',
  providers: [ProductoService]
})

export class ProductosListComponent{
  public titulo: string;

  constructor(
    private _route: ActivatedRoute,
    private  _router: Router,
    private _productoService: ProductoService
  ) {
    this.titulo = 'Listado de productos';
  }

  ngOnInit() {
    console.log('productos-list.component cargado');
    console.log(this._productoService.getProductos());
  }
}
