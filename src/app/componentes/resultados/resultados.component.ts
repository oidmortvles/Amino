import { Component, OnInit } from '@angular/core';
import { Ronda } from 'src/app/modelos/ronda.model';
import { RondaService } from 'src/app/servicios/ronda-service.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  puntosTotales: number = 0;

  constructor(private rondaService: RondaService) { }

  ngOnInit(): void {
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
}
