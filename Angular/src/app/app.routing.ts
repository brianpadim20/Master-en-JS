// Importar módulos del router de Angular
import { Component, ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Importar componentes
import { zapatosComponent } from "./Zapatos/zapatos.component";
import { bandasComponent } from "./Bandas/bandas.component";
import { generosComponent } from "./generos/generos.component";
import { VideojuegoComponent } from "./VideoJuego/videojuego.component";
import { CursosComponent } from "./cursos/cursos.component";
import { HomeComponent } from "./home/home.component";

// Array de rutas
const appRoutes: Routes = [
    {path:'', component: HomeComponent}, //Ruta inicial vacía, es la que se carga por default cuando se ingresa a la URL
    {path: 'zapatos', component: zapatosComponent},
    {path: 'bandas', component: bandasComponent},
    {path: 'generos', component: generosComponent},
    {path: 'videoJuegos', component: VideojuegoComponent},
    {path: 'cursos', component: CursosComponent},
    {path: '**', component: HomeComponent}//ruta 404, definirla siempre de último, porque sino todas las otras rutas fallarán

]; //Se crea una constante porque es una variable que no se va a ir modificando, sino que estará fija

//Exportar el módulo
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);