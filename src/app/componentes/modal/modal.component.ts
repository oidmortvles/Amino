import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstablecerRondaService } from 'src/app/servicios/establecer-ronda.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  formulario:FormGroup;
  mostrarModal:boolean=true;
  nivelDificultad:number=0;
  repeticion: number[] = [];

  constructor(private formBuilder: FormBuilder, private establecerRondaService:EstablecerRondaService) { 
    /* CREACION Y CONFIGURACION DEL FORMULARIO */
    this.formulario=this.formBuilder.group({
      cantidadIntentos:['', Validators.required],
      puntosPorJugar:['', Validators.required]
    });


    /* VERIFICAR CAMBIOS DEL FORMULARIO EN TIEMPO REAL */
    this.formulario.valueChanges.subscribe((values) => {
      let intentos=values.cantidadIntentos;
      let puntos=values.puntosPorJugar;

       // Actualizar el n° de dificultad
      this.nivelDificultad=this.revisarDificultad(intentos,puntos);
      this.repeticion=new Array(this.nivelDificultad);
    });
}

  ngOnInit(): void {  
  }


  enviarFormulario(){
    if (this.formulario.valid){
      this.mostrarModal=false;

      let intentos:number=this.formulario.get('cantidadIntentos')?.value;
      this.establecerRondaService.setIntentos(intentos);
      let puntosPorJugar:number=this.formulario.get('puntosPorJugar')?.value;
      this.establecerRondaService.setPuntosPorJugar(puntosPorJugar);
      this.establecerRondaService.setFormularioCompleto(true);
      this.establecerRondaService.setNumeroDeIntentos(intentos);
      this.resetFormulario();
    }
  }


  resetFormulario(){
    this.formulario.reset();
  }

  revisarDificultad(intentos:number, puntos:number){
    let dificultad:number=0;

    /* OPCIONES CON 3 INTENTOS */
    if(intentos==3 && puntos==100){
      dificultad=2;
    }

    if(intentos==3 && puntos==300){
      dificultad=3;
    }

    if(intentos==3 && puntos==500){
      dificultad=5;
    }

    /* OPCIONES CON 5 INTENTOS */
    if(intentos==5 && puntos==100){
      dificultad=1
    }

    if(intentos==5 && puntos==300){
      dificultad=3
    }

    if(intentos==5 && puntos==500){
      dificultad=4
    }
    
    /* OPCIONES CON 10 INTENTOS */
    if(intentos==10 && puntos==100){
      dificultad=1
    }

    if(intentos==10 && puntos==300){
      dificultad=3
    }

    if(intentos==10 && puntos==500){
      dificultad=4
    }

    return dificultad;
  }

 

}
