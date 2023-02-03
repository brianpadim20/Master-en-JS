import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { videoJuegoComponent } from './videojuego/videojuego.component';
import { zapatosComponent } from './Zapatos/zapatos.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    videoJuegoComponent,
    zapatosComponent,
    CursosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
