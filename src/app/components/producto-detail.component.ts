/**
 * Created by arnau on 9/7/17.
 */
import {Component} from "@angular/core";
import {ProductoService} from "../services/producto.service";
import {Producto} from "../models/producto";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'producto-detail',
  templateUrl: '../views/producto-detail.html',
  providers: [ProductoService]
})

export class ProductoDetailComponent{

  public producto: Producto;

  constructor(
    private _productoService: ProductoService,
    private _route: ActivatedRoute,
    private _router: Router
  ){

  }

  ngOnInit(){
      console.log('producto-detail.component cargado');
      this.getProducto();
  }

  getProducto(){
    this._route.params.forEach((params: Params) => {
      let id = params['id'];
      this._productoService.getProducto(id).subscribe(
        response => {
          if (response.code == 200){
            this.producto = response.data;
          }else{
            this._router.navigate(['productos']);
          }
        },
        error => {
          console.error(<any> error);
        }
      );
    })
    //this._productoService.getProducto()
  }

}
