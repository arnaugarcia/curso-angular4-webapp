/**
 * Created by arnau on 8/7/17.
 */
import {ProductoService} from "../services/producto.service";
import {Component} from "@angular/core";
import {Producto} from "../models/producto";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'producto-add',
  templateUrl: '../views/producto-add.html',
  providers: [ProductoService]
})

export class ProductoAddComponent{
    public titulo: string;
    public producto: Producto;

    constructor(
      private _productoService: ProductoService,
      private _route: ActivatedRoute,
      private _router: Router
    ){
      this.titulo = 'Crear un nuevo producto';
      this.producto = new Producto('', '', '', '', '');
    }

    ngOnInit(){
      console.log('producto-add.component cargado');
    }

    onSubmit(){
      console.log(this.producto);
      this._productoService.addProducto(this.producto).subscribe(
          response => {
              if (response.code == 200){
                this._router.navigate(['productos']);
              }else{
                console.error(response);
              }
          },
          error => {
              console.error(<any> error);
          }
      );
    }

}
