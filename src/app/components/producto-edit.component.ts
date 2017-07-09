/**
 * Created by arnau on 9/7/17.
 */
import {Component} from "@angular/core";
import {ProductoService} from "../services/producto.service";
import {Producto} from "../models/producto";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'producto-edit',
  templateUrl: '../views/producto-add.html',
  providers: [ProductoService]
})

export class ProductoEditComponent{
  public titulo: string;
  public producto: Producto;
  public filesToUpload;
  public resultUpload;

  constructor(
    private _productoService: ProductoService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
      this.titulo = 'Editar producto';
      this.producto = new Producto('','','','','');
  }

  ngOnInit(){
      console.log(this.titulo);
      console.log(this.producto.nombre);
  }

}
