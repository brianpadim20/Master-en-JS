import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { videoJuegoComponent } from './videojuego/videojuego.component';

@NgModule({
  declarations: [
    AppComponent,
    videoJuegoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
