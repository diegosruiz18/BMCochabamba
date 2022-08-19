import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  constructor(private af:AngularFirestore) { }


  getOfertas(){
    //Retorna la colección de noticias especificada
    //El snapshot sirve para ejecutar el subscribe y reciba data en realtime
    return this.af.collection('ofertas').snapshotChanges();
  }

  getOfertaEspecifica(idOferta:string){
    return this.af.collection('ofertas').doc(idOferta).valueChanges();
  }

}