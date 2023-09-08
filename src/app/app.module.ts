import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartasComponent } from './componentes/cartas/cartas.component';
import { ResultadosComponent } from './componentes/resultados/resultados.component';
import { ApuestasComponent } from './componentes/apuestas/apuestas.component';
import { RondaService } from './servicios/ronda-service.service';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './componentes/modal/modal.component';
import { EstablecerRondaService } from './servicios/establecer-ronda.service';
import { PantallaVictoriaComponent } from './componentes/pantalla-victoria/pantalla-victoria.component';
import { VistaMobileComponent } from './componentes/vista-mobile/vista-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    CartasComponent,
    ResultadosComponent,
    ApuestasComponent,
    ModalComponent,
    PantallaVictoriaComponent,
    VistaMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RondaService, EstablecerRondaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
