import { Component, OnInit } from '@angular/core';
import { Ronda } from 'src/app/modelos/ronda.model';
import { EstablecerRondaService } from 'src/app/servicios/establecer-ronda.service';
import { RondaService } from 'src/app/servicios/ronda-service.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  ultimaRonda: Ronda | null = null;

  puntosTotales: number = 0;

  intentos:number =1;

  intentosJugados=0;

  puntosExtra:number | undefined;

  puntosObjetivo:number=0;

  apuestaPar: boolean=false;
  apuestaRango: boolean=false;
  apuestaValor: boolean=false;
  apuestaColor: boolean=false;
  apuestaGirar: boolean=false;

  constructor(private rondaService: RondaService, private establecerRondaService: EstablecerRondaService) { }

  ngOnInit(): void {

    /* METODO PARA OBTENER LA ULTIMA RONDA Y SUS VALORES*/
      this.rondaService.ultimaRonda$.subscribe(ronda => {
      this.ultimaRonda = ronda;

      this.puntosExtra=ronda?.puntosExtra;       
      this.obtenerIntentosJugados(ronda?.intentosJugados);

      this.puntosObjetivo= this.establecerRondaService.getPuntosPorJugar();

      this.resetearApuestas();
      this.comprobarApuesta(ronda?.apuestasValidas);  

    });

    /* METODO PARA LOS INTENTOS CONFIGURADOS */
    this.establecerRondaService.getNumeroDeIntentos().subscribe(numero => {
      this.intentos = numero;
      this.obtenerIntentos(numero);
    }); 


    /* METODO PARA OBTENER LOS PUNTOS TOTALES */
    this.rondaService.rondas$.subscribe(ronda => {
      this.puntosTotales = this.calcularPuntosTotales(ronda);
    });    


  }


  calcularPuntosTotales(rondas: Ronda[]): number {
    let totalPuntos = 0;
        
    rondas.forEach(r => {
      totalPuntos += r.puntos + r.puntosExtra;
    });
  
    return totalPuntos;
  }


  reiniciarPartida(){
    window.location.reload()
  }


  comprobarApuesta(validas:any[] | undefined){

    if(validas != undefined){

      validas.forEach(valida => {

      if(valida==="I" || valida==="P"){
        this.apuestaPar=true;
      }

      if(valida==="CINCO" || valida==="DIEZ" || valida==="QUINCE" || valida==="VEINTE"){
        this.apuestaRango=true;
      }

      if(valida>0){
        this.apuestaValor=true;
      }

      if(valida==="RO" || valida==="AZ" || valida==="VE" || valida==="AM" || valida==="NA" || valida==="BL"){
        this.apuestaColor=true;
      }

    });

    }

  }


  resetearApuestas(){
    this.apuestaPar=false;
    this.apuestaRango=false;
    this.apuestaValor=false;
    this.apuestaColor=false;
    this.apuestaGirar=false;
  }


  obtenerIntentos(count: number): number[] {
    return Array.from({ length: count }, (_, index) => index);
  }


  obtenerIntentosJugados(jugados : number | undefined){
    if(jugados != undefined){
      this.intentosJugados=jugados;
    }

  }





  


}
