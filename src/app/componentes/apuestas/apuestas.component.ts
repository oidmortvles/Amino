import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apuestas',
  templateUrl: './apuestas.component.html',
  styleUrls: ['./apuestas.component.css']
})
export class ApuestasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /* METODOS PARA APUESTAS */


  /* ----PAR/IMPAR---- */
  voltearPar: boolean = false;
  valorSwitchPar: boolean = false;

  mostrarReversoPar(): void {
    this.voltearPar = !this.voltearPar;
    this.valorSwitchPar = false; // Desactivar el switch al voltear la carta
  }

  resetearEstadoPar():void{
    this.voltearPar = false;
    this.valorSwitchPar = false; // Asegurarse de que el switch esté desactivado al reiniciar
  }

  

  /* ----RANGO---- */
  voltearRango: boolean = false;
  valorSwitchRango: boolean = false;

  mostrarReversoRango(): void {
    this.voltearRango = !this.voltearRango;
    this.valorSwitchRango = false; // Desactivar el switch al voltear la carta
  }

  resetearEstadoRango():void{
    this.voltearRango = false;
    this.valorSwitchRango = false; // Asegurarse de que el switch esté desactivado al reiniciar
  }


  /* ----NUM EXACTO---- */
  voltearExacto: boolean = false;
  valorSwitchExacto: boolean = false;

  mostrarReversoExacto(): void {
    this.voltearExacto = !this.voltearExacto;
    this.valorSwitchExacto = false; // Desactivar el switch al voltear la carta
  }

  resetearEstadoExacto():void{
    this.voltearExacto = false;
    this.valorSwitchExacto = false; // Asegurarse de que el switch esté desactivado al reiniciar
  }





  /* ----COLOR---- */
  voltearColor: boolean = false;
  valorSwitchColor: boolean = false;

  mostrarReversoColor(): void {
    this.voltearColor = !this.voltearColor;
    this.valorSwitchColor = false; // Desactivar el switch al voltear la carta
  }

  resetearEstadoColor():void{
    this.voltearColor = false;
    this.valorSwitchColor = false; // Asegurarse de que el switch esté desactivado al reiniciar
  }

  /* ----GIRAR CARTA---- */
  voltearGirar: boolean = false;
  valorSwitchGirar: boolean = false;
  valueGirar:string;

  mostrarReversoGirar(): void {
    this.voltearGirar = !this.voltearGirar;
    this.valorSwitchGirar = false; // Desactivar el switch al voltear la carta
  }

  resetearEstadoGirar():void{
    this.voltearGirar = false;
    this.valorSwitchGirar = false; // Asegurarse de que el switch esté desactivado al reiniciar
    this.valueGirar="";
  }


}
