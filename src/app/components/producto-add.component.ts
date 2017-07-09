/**
 * Created by arnau on 8/7/17.
 */
import {ProductoService} from "../services/producto.service";
import {Component} from "@angular/core";
import {Producto} from "../models/producto";

@Component({
  selector: 'producto-add',
  templateUrl: '../views/producto-add.html',
  providers: [ProductoService]
})

export class ProductoAddComponent{
    public titulo: string;
    public producto: Producto;

    constructor(){
      this.titulo = 'Crear un nuevo producto';
      this.producto = new Producto('', '', '', '', '');
    }

    ngOnInit(){
      console.log('producto-add.component cargado');
    }

  onSubmit(){
      console.log(this.producto);
  }
}
