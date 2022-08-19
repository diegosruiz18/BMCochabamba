import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  idDocumento: string = 'sinID';
  infoProducto: any = '';

  productoSeleccionado!:string;

  constructor(
    private rutaActiva: ActivatedRoute,
    private productoService: ProductosService
  ) { }

  ngOnInit(): void {
    this.idDocumento = this.rutaActiva.snapshot.params.id;
    this.productoService
      .getProductoEspecifico(this.idDocumento)
      .subscribe((querysnapshot) => {
        this.infoProducto = querysnapshot;
      });
  }

  mostrarPrendasAccesorios():void{
    this.productoSeleccionado="Prendas y accesorios";
  }

  mostrarMaquillaje():void{
    this.productoSeleccionado="Maquillaje";
  }

  mostrarPerfumes():void{
    this.productoSeleccionado="Perfume";
  }

}