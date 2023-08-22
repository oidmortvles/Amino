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
  

  constructor(private formBuilder: FormBuilder, private establecerRondaService:EstablecerRondaService) { 
    /* CREACION Y CONFIGURACION DEL FORMULARIO */
    this.formulario=this.formBuilder.group({
      cantidadIntentos:['', Validators.required],
      puntosPorJugar:['', Validators.required]
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

 

}
