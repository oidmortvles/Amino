import { Component, OnInit } from '@angular/core';
import { Ronda } from './modelos/ronda.model';
import { EstablecerRondaService } from './servicios/establecer-ronda.service';
import { RondaService } from './servicios/ronda-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'amino-game';
  rondaSeteada:boolean=false;
  puntosTotales:number=0;

  mostrarPantalla:boolean=false;

  victoria:boolean=false;
  perdida:boolean=false;


  constructor(private establecerRondaService: EstablecerRondaService, 
    private rondaService: RondaService) {}



  ngOnInit(){

    /* OBSERVABLE PARA CUANDO FORMULARIO SE COMPLETE */
    this.establecerRondaService.getFormularioCompleto().subscribe(dato => {
      this.rondaSeteada = dato;
    });


    /* OBSERVABLE PARA COMPROBAR VICTORIA */
    this.rondaService.ultimaRonda$.subscribe(ronda => {      
      this.comprobarVictoria(ronda);     
    });


}


  comprobarVictoria(ultimaRonda: Ronda | null){
    if(ultimaRonda != null){

      let puntosObjetivo:number= ultimaRonda.puntosPorJugar;
      let puntosObtenidos:number = ultimaRonda.puntos + ultimaRonda.puntosExtra;
      this.puntosTotales +=puntosObtenidos;
      let intentos:number = ultimaRonda.intentos;  
      let intentosJugados:number= ultimaRonda.intentosJugados;

      if( (this.puntosTotales>=puntosObjetivo) || (intentosJugados>=intentos) ){
        /* MUESTRA LA PANTALLA DE VICTORIA */
        this.mostrarPantalla=true;
      }

      if(this.puntosTotales>=puntosObjetivo && intentosJugados<=intentos){
        /* INFORMA LA VICTORIA */
        this.victoria=true;
      }
      
      if(this.puntosTotales<puntosObjetivo && intentosJugados>=intentos){
        /* INFORMA LA DERROTA */
        this.perdida=true;
      }

    }

  }


}
