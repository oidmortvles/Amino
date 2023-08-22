import { Component, OnInit } from '@angular/core';
import { Ronda } from 'src/app/modelos/ronda.model';
import { EstablecerRondaService } from 'src/app/servicios/establecer-ronda.service';
import { RondaService } from 'src/app/servicios/ronda-service.service';


@Component({
  selector: 'app-apuestas',
  templateUrl: './apuestas.component.html',
  styleUrls: ['./apuestas.component.css']
})
export class ApuestasComponent implements OnInit {

  constructor(private rondaService: RondaService, private establecerRondaService: EstablecerRondaService) { }

  rondas:Ronda[]=[];

  ngOnInit(): void {
    this.rondas=this.rondaService.rondas;
  }


  /* ARRAY DONDE SE GUARDAN LAS APUESTAS HECHAS*/
  apuestaTotal:any[]=[];


  /* ----PAR/IMPAR---- */
  voltearPar: boolean = false;
  valorSwitchPar: boolean = false;
  valuePar:string="";


  mostrarReversoPar(): void {
    this.voltearPar = !this.voltearPar;
    this.valorSwitchPar = false; // Desactivar el switch al voltear la carta
  }

  resetearEstadoPar():void{
    this.voltearPar = false;
    this.valorSwitchPar = false; // Asegurarse de que el switch esté desactivado al reiniciar
    this.valuePar="";
  }

  

  /* ----RANGO---- */
  voltearRango: boolean = false;
  valorSwitchRango: boolean = false;
  valueRango:string="";

  mostrarReversoRango(): void {
    this.voltearRango = !this.voltearRango;
    this.valorSwitchRango = false; // Desactivar el switch al voltear la carta
  }

  resetearEstadoRango():void{
    this.voltearRango = false;
    this.valorSwitchRango = false; // Asegurarse de que el switch esté desactivado al reiniciar
    this.valueRango="";
  }


  /* ----NUM EXACTO---- */
  voltearExacto: boolean = false;
  valorSwitchExacto: boolean = false;
  valueExacto:number=0;

  mostrarReversoExacto(): void {
    this.voltearExacto = !this.voltearExacto;
    this.valorSwitchExacto = false; // Desactivar el switch al voltear la carta
  }

  resetearEstadoExacto():void{
    this.voltearExacto = false;
    this.valorSwitchExacto = false; // Asegurarse de que el switch esté desactivado al reiniciar
    this.valueExacto=0;
  }


  /* ----COLOR---- */
  voltearColor: boolean = false;
  valorSwitchColor: boolean = false;
  valueColor:string="";

  mostrarReversoColor(): void {
    this.voltearColor = !this.voltearColor;
    this.valorSwitchColor = false; // Desactivar el switch al voltear la carta
  }

  resetearEstadoColor():void{
    this.voltearColor = false;
    this.valorSwitchColor = false; // Asegurarse de que el switch esté desactivado al reiniciar
    this.valueColor="";
  }

  /* ----GIRAR CARTA---- */
  voltearGirar: boolean = false;
  valorSwitchGirar: boolean = false;
  valueGirar:string="";

  mostrarReversoGirar(): void {
    this.voltearGirar = !this.voltearGirar;
    this.valorSwitchGirar = false; // Desactivar el switch al voltear la carta
  }

  resetearEstadoGirar():void{
    this.voltearGirar = false;
    this.valorSwitchGirar = false; // Asegurarse de que el switch esté desactivado al reiniciar
    this.valueGirar="";
  }



  /* --------- METODOS DE APUESTA TOTAL --------- */

  resetAll(){
    this.resetearEstadoPar();
    this.resetearEstadoRango();
    this.resetearEstadoExacto();
    this.resetearEstadoColor();
    this.resetearEstadoGirar();
    this.apuestaTotal=[];
  }


  hacerApuesta(){
    /* INGRESO CADA VALOR DE APUESTA AL ARRAY CREADO */
    this.apuestaTotal.push(this.valuePar);
    this.apuestaTotal.push(this.valueRango);
    if(this.valueExacto>0){this.apuestaTotal.push(this.valueExacto);}    
    this.apuestaTotal.push(this.valueColor);
    this.apuestaTotal.push(this.valueGirar);
    /* ENVIO ESE ARRAY AL SERVICE DONDE ESTA EL METODO CREA LA RONDA */
    let puntosPorJugar:number=this.establecerRondaService.getPuntosPorJugar();
    let intentos:number=this.establecerRondaService.getIntentos();
    this.rondaService.crearRonda(this.apuestaTotal,puntosPorJugar,intentos,1);
    /* REINICIO LOS VALORES Y RESETEO EL ARRAY */
    this.resetAll();
  }




}
