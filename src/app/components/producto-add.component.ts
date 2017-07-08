/**
 * Created by arnau on 8/7/17.
 */
import {ProductoService} from "../services/producto.service";
import {Component} from "@angular/core";

@Component({
  selector: 'producto-add',
  templateUrl: '../views/producto-add.html',
  providers: [ProductoService]
})

export class ProductoAddComponent{
    public titulo: string;

    constructor(){
      this.titulo = 'Crear un nuevo producto'
    }

    ngOnInit(){
      console.log('producto-add.component cargado');
    }
}
