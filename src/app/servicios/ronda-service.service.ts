import { Injectable } from '@angular/core';
import { Ronda } from '../modelos/ronda.model';

@Injectable({
  providedIn: 'root'
})
export class RondaService {

  constructor() { }


  /* ARRAY DONDE SE GUARDAN LAS RONDAS DEL JUGADOR Y SU INFORMACION */
  rondas:Ronda[]=[];

/* CONTADOR DE PUNTOS TOTALES DEL JUGADOR */
  totalPuntos:number= 0;


  /* METODO PARA DAR VALORES ALEATORIOS ENTRE 1 Y 5 */
  numerarCartas(){
    const randomDecimal: number = Math.random();
    const entre0y5: number = randomDecimal * 6;
    const redondeo: number= Math.floor(entre0y5);
    return redondeo;
}


/* METODO PARA CREAR RONDA */
  crearRonda(){
    let carta1=this.numerarCartas();
    let carta2=this.numerarCartas();
    let carta3=this.numerarCartas();
    let carta4=this.numerarCartas();
    let carta5=this.numerarCartas();
    let puntos = carta1 + carta2 + carta3 + carta4 + carta5;
    let arrayCartas: number[] = [carta1, carta2, carta3, carta4, carta5];
    let rondaNueva= new Ronda(carta1,carta2, carta3, carta4, carta5, arrayCartas, puntos);    
    this.rondas.push(rondaNueva);
}

/* METODO PARA REGISTRAR PUNTOS */
contadorPuntos(){ 
  this.rondas.forEach(r => {
    this.totalPuntos += r.puntos;
  });
  return this.totalPuntos;
}



}
