import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartasComponent } from './componentes/cartas/cartas.component';
import { ResultadosComponent } from './componentes/resultados/resultados.component';

@NgModule({
  declarations: [
    AppComponent,
    CartasComponent,
    ResultadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
