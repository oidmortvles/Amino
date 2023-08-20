import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Ronda } from 'src/app/modelos/ronda.model';
import { RondaService } from 'src/app/servicios/ronda-service.service';

@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrls: ['./cartas.component.css']
})
export class CartasComponent implements OnInit {

  /* ARRAY DONDE SE GUARDAN TODAS LAS RONDAS Y SUS DATOS */
  cartas: Ronda[] = [];
  
/* ARRAY DONDE SE GUARDA LA ULTIMA RONDA Y SUS DATOS  */
  ultimaRonda: Ronda | null = null;

  constructor(private rondaService: RondaService, private cdRef: ChangeDetectorRef) {     
  }
 
  ngOnInit(): void {    
    this.rondaService.ultimaRonda$.subscribe(ronda => {
      this.ultimaRonda = ronda;
      console.log(JSON.stringify(ronda, null, 2));
    });
  }

 

  
}
