import { Component, OnInit } from '@angular/core';
import { Ronda } from 'src/app/modelos/ronda.model';
import { RondaService } from 'src/app/servicios/ronda-service.service';

@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrls: ['./cartas.component.css']
})
export class CartasComponent implements OnInit {

  /* ARRAY DONDE SE GUARDAN LAS RONDAS Y SUS DATOS */
  rondas:Ronda[]=[];


  constructor(private rondaService: RondaService) {     
  }

 
  
  ngOnInit(): void {
    this.rondas=this.rondaService.rondas;
    this.rondaService.crearRonda();
  }

 

  


}
