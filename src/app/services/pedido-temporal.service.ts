import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidoTemporalService {

  pedidoCarritoTemporal:any[]=[]; //arreglo de productos
  //para mostrar en pantalla
  courier:string="";
  subtotalCarritoTemporal:number=0;
  totalCarritoTemporal:number=0;
  costoEnvio:number=0;
  direccion:string="";
  ciudad:string="";
  pais:string="";

  constructor() { }

  agregarPedidoTemporal(productosCarrito:any[],subtotal:number,
    courier:string,totalCarrito:number,costoEnvio:number,direccion:string,
    ciudad:string,pais:string){
    this.pedidoCarritoTemporal=productosCarrito;
    this.subtotalCarritoTemporal=subtotal;
    this.courier=courier;
    this.totalCarritoTemporal=totalCarrito;
    this.costoEnvio=costoEnvio;
    this.direccion=direccion;
    this.ciudad=ciudad;
    this.pais=pais;
  }

  getProductosCarrito():any{
    return this.pedidoCarritoTemporal;
  }

  getCourier():any{
    return this.courier;
  }

  getSubtotal():any{
    return this.subtotalCarritoTemporal;
  }

  getTotal():any{
    return this.totalCarritoTemporal;
  }
  
  getCostoEnvio():any{
    return this.costoEnvio;
  }

  getDireccion():any{
    return this.direccion;
  }

  getCiudad():any{
    return this.ciudad;
  }

  getPais():any{
    return this.pais;
  }

  limpiar():void{
    this.pedidoCarritoTemporal=[];
    this.subtotalCarritoTemporal=0;
    this.courier="";
    this.totalCarritoTemporal=0;
    this.costoEnvio=0;
    this.direccion="";
    this.ciudad="";
    this.pais="";
  }
}