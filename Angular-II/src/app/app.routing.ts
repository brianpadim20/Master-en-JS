// Importar módulos del router de Angular

import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule } from '@angular/router';

// Importar componentes, para hacer una página para cada componente

import { HomeComponent } from "./home/home.component";
import { zapatosComponent } from "./Zapatos/zapatos.component";
import { videoJuegoComponent } from "./videojuego/videojuego.component";
import { CursosComponent } from "./cursos/cursos.component";
import { ExternoComponent } from "./externo/externo.component";

// Array de rutas

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path:'zapatos', component: zapatosComponent},
    {path:'videojuegos', component: videoJuegoComponent},
    {path:'cursos', component: CursosComponent},
    {path:'cursos/:nombre', component: CursosComponent},
    {path:'cursos/:nombre/:followers', component: CursosComponent},
    {path:'externo', component: ExternoComponent},
    {path:'**', component:HomeComponent}
];

// Exportar el módulo del router

export const appRoutingProviders:any[] = [];
export const routing:ModuleWithProviders<any> =RouterModule.forRoot(appRoutes);