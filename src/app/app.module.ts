import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartasComponent } from './componentes/cartas/cartas.component';
import { ResultadosComponent } from './componentes/resultados/resultados.component';
import { ApuestasComponent } from './componentes/apuestas/apuestas.component';
import { RondaService } from './servicios/ronda-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CartasComponent,
    ResultadosComponent,
    ApuestasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [RondaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
