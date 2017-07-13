/**
 * Created by arnau on 5/7/17.
 */
import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductoService} from "../services/producto.service";
import {Producto} from "../models/producto";
@Component({
  selector: 'productos-list',
  templateUrl: '../views/productos-list.html',
  providers: [ProductoService]
})

export class ProductosListComponent{
  public titulo: string;
  public productos: Array<Producto>;
  public confirmado: string;

  constructor(
    private _route: ActivatedRoute,
    private  _router: Router,
    private _productoService: ProductoService
  ) {
    this.titulo = 'Listado de productos';
  }

  ngOnInit() {
    console.log('productos-list.component cargado');
    this.getProductos();
    this.confirmado == null;
  }

  getProductos(){
    this._productoService.getProductos().subscribe(
      result => {
        console.log(result);
        if (result.code != 200){
          console.error(result);
        }else{
          this.productos = result.data;
        }
      },
      error => {
        console.error(<any> error);
      }
    )
  }

  borrarConfirm(id){
    this.confirmado = id;
  }

  cancelarConfirm() {
    this.confirmado = null;
  }

  onDeleteProducto(id: string){
    this._productoService.deleteProducto(id).subscribe(
      response => {
        if (response.code == 200){
          this.getProductos();
        }else{
          console.error("Error al borrar del servidor");
        }
      },
      error => {
        console.error(<any> error);
      }
    )
  }
}
