import { Component, OnInit } from '@angular/core';
import { RondaService } from 'src/app/servicios/ronda-service.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  /* CONTADOR DE PUNTOS TOTALES DEL JUGADOR */
  puntosTotales: number;


  constructor(private rondaService: RondaService) {     
  }
  

  ngOnInit(): void {
    this.puntosTotales = this.rondaService.contadorPuntos();
  }

}
