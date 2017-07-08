/**
 * Created by arnau on 5/7/17.
 */
import {Injectable} from "@angular/core";
import {GLOBAL} from "./global";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
@Injectable()
export class ProductoService{
  public url: string;

  constructor(
    public _http: Http
  ){
    this.url = GLOBAL.url;
  }

  getProductos(){
      return "Texto desde el servicio";
  }

}
