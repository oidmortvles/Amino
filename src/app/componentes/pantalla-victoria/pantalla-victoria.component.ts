import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-pantalla-victoria',
  templateUrl: './pantalla-victoria.component.html',
  styleUrls: ['./pantalla-victoria.component.css']
})
export class PantallaVictoriaComponent implements OnInit {
  

  /* VALORES QUE LE PASA EL COMP PADRE AL COMP HIJO (app.component -> app-pantalla-victoria) */
  @Input() victoria:boolean;
  @Input() perdida:boolean;
  

  constructor() { }


  ngOnInit(): void {    
  }


  reiniciarPartida(){
    window.location.reload()
  }

}
