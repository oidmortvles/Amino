import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstablecerRondaService {

  constructor() { }

  private habilitado = new BehaviorSubject<boolean>(false);
  private vidas = new BehaviorSubject<number>(0);

  intentos:number=0;
  puntosPorJugar:number=0;

  setIntentos(datos:number){
    this.intentos=datos;
  }


  setPuntosPorJugar(datos:number){
    this.puntosPorJugar=datos;
  }


  getIntentos(){
    return this.intentos;
  }

  getPuntosPorJugar(){
    return this.puntosPorJugar;
  }

  setFormularioCompleto(dato: boolean) {
    this.habilitado.next(dato);
  }

  getFormularioCompleto() {
    return this.habilitado.asObservable();
  }

  setNumeroDeIntentos( intentos: number){
    this.vidas.next(intentos);
  }

  getNumeroDeIntentos(){
    return this.vidas.asObservable();
  }





}
