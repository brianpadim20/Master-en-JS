import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';//Servicios

//Para poner la app en español:

import  localeEs  from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs,'es');

//Componentes creados e importados
import { AppComponent } from './app.component';
import { videoJuegoComponent } from './videojuego/videojuego.component';
import { zapatosComponent } from './Zapatos/zapatos.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';
import { ContactoComponent } from './contacto/contacto.component';

//Pipes Creadas e importadas
import { calculadoraPipe } from './pipes/calculadora.pipe';

@NgModule({
  declarations: [
    AppComponent,
    videoJuegoComponent,
    zapatosComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent,
    calculadoraPipe,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders,
    {provide:LOCALE_ID, useValue:'es'}//Para poner la aplicación en español
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
