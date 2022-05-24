import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { VideojuegoComponent } from './VideoJuego/videojuego.component';
import { zapatosComponent } from './Zapatos/zapatos.component';
import { bandasComponent } from './Bandas/bandas.component';
import { generosComponent } from './generos/generos.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    zapatosComponent,
    bandasComponent,
    generosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
