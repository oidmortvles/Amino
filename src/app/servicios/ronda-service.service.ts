import { Injectable } from '@angular/core';
import { Ronda } from '../modelos/ronda.model';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RondaService {

  constructor() { }


  /* ARRAY DONDE SE GUARDAN LAS RONDAS DEL JUGADOR Y SU INFORMACION */
  rondas:Ronda[]=[];
  

/* OBSERVABLES DEL ARRAY "RONDAS" */
  private rondasSubject = new BehaviorSubject<Ronda[]>([]);
  rondas$ = this.rondasSubject.asObservable(); //Guarda todas las rondas creadas
  
  private ultimaRondaSubject = new BehaviorSubject<Ronda | null>(null);
  ultimaRonda$ = this.ultimaRondaSubject.asObservable(); //Esto guarda solamente la ultima ronda creada
  

/* VARIABLE PARA SETEAR LOS INTENTOS JUGADOS UNA VEZ QUE INICIO LA PARTIDA */  
  intentosJugados:number=0;
  

  /* METODOS PARA EVALUAR CADA APUESTA */

  /* -----PAR/IMAR----- */
  puntuarParImpar(puntosTotales:number,apuesta:string){
    let puntosExtra:number=0;

    if(puntosTotales % 2 === 0 && apuesta==="P"){
      puntosExtra=10;
    }

    if(puntosTotales % 2 !== 0 && apuesta === "I") {
      puntosExtra = 10;
  }
    
    return puntosExtra;      
  }

  /* -----RANGO----- */
  puntuarRango(puntosTotales:number,apuesta:string){
    let puntosExtra:number=0;

    if(apuesta==="CINCO" && puntosTotales>5){
      puntosExtra=5;
    }

    if(apuesta==="DIEZ" && puntosTotales>10){
      puntosExtra=10;
    }

    if(apuesta==="QUINCE" && puntosTotales>15){
      puntosExtra=15;
    }

    if(apuesta==="VEINTE" && puntosTotales>20){
      puntosExtra=20;
    }

    return puntosExtra;

  }

  /* -----EXACTO----- */
  puntuarExacto(puntosTotales:number,apuesta:number){
    let puntosExtra:number=0;

    if(puntosTotales === apuesta){
      puntosExtra=100;
    }

    return puntosExtra;

  }

  /* -----COLOR----- */
  puntuarColor(colores:string[], apuesta:string){
    let puntosExtra:number=0;

    let ro:number=0;
    let az:number=0;
    let ve:number=0;
    let am:number=0;
    let na:number=0;
    let bl:number=0;

    colores.forEach(c => {
      if(c==="red"){
        ro++
      }

      if(c==="blue"){
        az++
      }

      if(c==="green"){
        ve++
      }

      if(c==="yellow"){
        am++
      }

      if(c==="orange"){
        na++
      }

      if(c==="white"){
        bl++
      }
    });

    let ContadorColores:number[]=[ro,az,ve,am,na,bl];
    let masRepetido:number= Math.max(...ContadorColores);

      if(apuesta=="RO" && ro===masRepetido){
        puntosExtra=20;
      }

      if(apuesta=="AZ" && az===masRepetido){
        puntosExtra=20;
      }

      if(apuesta=="VE" && ve===masRepetido){
        puntosExtra=20;
      }

      if(apuesta=="AM" && am===masRepetido){
        puntosExtra=20;
      }

      if(apuesta=="NA" && na===masRepetido){
        puntosExtra=20;
      }

      if(apuesta=="BL" && bl===masRepetido){
        puntosExtra=20;
      }

      return puntosExtra;

  }


  verificarColor(colores:string[], apuesta:string){
    let colorDominante:string="";

    let ro:number=0;
    let az:number=0;
    let ve:number=0;
    let am:number=0;
    let na:number=0;
    let bl:number=0;

    colores.forEach(c => {
      if(c==="red"){
        ro++
      }

      if(c==="blue"){
        az++
      }

      if(c==="green"){
        ve++
      }

      if(c==="yellow"){
        am++
      }

      if(c==="orange"){
        na++
      }

      if(c==="white"){
        bl++
      }
    });

    let ContadorColores:number[]=[ro,az,ve,am,na,bl];
    let masRepetido:number= Math.max(...ContadorColores);

      if(apuesta=="RO" && ro===masRepetido){
        colorDominante="RO";
      }

      if(apuesta=="AZ" && az===masRepetido){
        colorDominante="AZ";
      }

      if(apuesta=="VE" && ve===masRepetido){
        colorDominante="VE";
      }

      if(apuesta=="AM" && am===masRepetido){
        colorDominante="AM";
      }

      if(apuesta=="NA" && na===masRepetido){
        colorDominante="NA";
      }

      if(apuesta=="BL" && bl===masRepetido){
        colorDominante="BL"
      }

      return colorDominante;

  }


  /* METODO PARA DAR VALORES ALEATORIOS ENTRE 1 Y 5 */
  numerarCartas(){
    const randomDecimal: number = Math.random();
    const entre0y5: number = randomDecimal * 6;
    const redondeo: number= Math.floor(entre0y5);
    return redondeo;
}


  /* METODO PARA COLOREAR CARTAS */
  colorearCarta(num:number){
    let colores:string[]=["red","blue","green", "yellow","orange","white"];
    let color:string=colores[num];
    return color;
  }


   /* METODO PARA RECOGER LAS APUESTAS */
   puntuarApuesta(apuestas:any[], puntoTotales:number,colores:string[]){

    let puntosPorApuesta:number=0;

    if(apuestas.length>0){
      
      apuestas.forEach(apuesta => {

        if(apuesta==="I" || apuesta==="P"){
          puntosPorApuesta +=this.puntuarParImpar(puntoTotales,apuesta);
        }
  
        if(apuesta==="CINCO" || apuesta==="DIEZ" || apuesta==="QUINCE" || apuesta==="VEINTE"){
          puntosPorApuesta +=this.puntuarRango(puntoTotales,apuesta);
        }
  
        if(apuesta>0){
          puntosPorApuesta +=this.puntuarExacto(puntoTotales,apuesta);
        }
  
        if(apuesta==="RO" || apuesta==="AZ" || apuesta==="VE" || apuesta==="AM" || apuesta==="NA" || apuesta==="BL"){
          puntosPorApuesta +=this.puntuarColor(colores,apuesta);
        }
        
      });
    }

        return puntosPorApuesta;

  }


  /* METODO PARA VALIDAR APUESTAS */
  validarApuestas(apuestasHechas:any[],puntosTotales:number,colores:string[]){

    let apuestasValidas:any=[];

    if(apuestasHechas.length>0){
      
      apuestasHechas.forEach(apuesta => {

        /* -----PAR/IMAR----- */
        if(puntosTotales % 2 === 0 && apuesta==="P"){
          apuestasValidas.push("P");
        }
    
        if(puntosTotales % 2 !== 0 && apuesta === "I") {
          apuestasValidas.push("I");
        }

        
        /* -----RANGO----- */
        if(apuesta==="CINCO" && puntosTotales>5){
          apuestasValidas.push(apuesta);
        }
    
        if(apuesta==="DIEZ" && puntosTotales>10){
          apuestasValidas.push(apuesta);
        }
    
        if(apuesta==="QUINCE" && puntosTotales>15){
          apuestasValidas.push(apuesta);
        }
    
        if(apuesta==="VEINTE" && puntosTotales>20){
          apuestasValidas.push(apuesta);
        }

        /* -----EXACTO----- */
        if(puntosTotales === apuesta){
          apuestasValidas.push(apuesta);
        }

        /* -----COLOR----- */
        let colorDominante:string=this.verificarColor(colores, apuesta)
        if(colorDominante == apuesta){
          apuestasValidas.push(colorDominante);
        }

      });
  }

    return apuestasValidas;
}


/* METODO PARA CREAR RONDA */
  crearRonda(arrayApuestas:any[],puntosPorJugar:number,intentos:number, cuentaDeIntentos:number){

    let colores:string[]=[];
    let carta1=this.numerarCartas();
    colores.push(this.colorearCarta(carta1));
    let carta2=this.numerarCartas();
    colores.push(this.colorearCarta(carta2));
    let carta3=this.numerarCartas();
    colores.push(this.colorearCarta(carta3));
    let carta4=this.numerarCartas();
    colores.push(this.colorearCarta(carta4));
    let carta5=this.numerarCartas();
    colores.push(this.colorearCarta(carta5));
    let puntos = carta1 + carta2 + carta3 + carta4 + carta5;
    let arrayCartas: number[] = [carta1, carta2, carta3, carta4, carta5];
    
    /* PRUEBA */
    let puntosExtra = this.puntuarApuesta(arrayApuestas,puntos,colores);
    let apuestasValidas:any[]= this.validarApuestas(arrayApuestas,puntos,colores);
    /* ----------- */
    this.intentosJugados+=cuentaDeIntentos;
    let rondaNueva= new Ronda(arrayCartas, puntos, arrayApuestas, colores, puntosExtra,puntosPorJugar,intentos,this.intentosJugados,apuestasValidas);    
    this.rondas.push(rondaNueva);
    this.rondasSubject.next(this.rondas);
    this.ultimaRondaSubject.next(rondaNueva);
    
}




}
