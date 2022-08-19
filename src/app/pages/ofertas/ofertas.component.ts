import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/services/ofertas.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {

  ofertas:any[]=[];

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.ofertasService.getOfertas().subscribe((querysnapshot)=>{
      this.ofertas = [];
      querysnapshot.forEach((doc)=>{
        this.ofertas.push(doc);
      })
    });
  }

}