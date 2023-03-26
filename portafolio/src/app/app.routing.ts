//Importar librerías para configurar las rutas
import { ModuleWithProviders } from "@angular/core"; 
import { Routes, RouterModule } from "@angular/router";

//Importar los componentes

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateComponent } from './components/create/create.component';
import { ErrorComponent } from './components/error/error.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { DetailComponent } from './components/detail/detail.component';

//Creación de las rutas

const appRoutes: Routes = [
    {path:'sobre-mi', component:AboutComponent}, 
    {path:'proyectos', component:ProjectsComponent}, 
    {path:'crear-proyecto', component:CreateComponent}, 
    {path:'contacto', component:ContactComponent},
    {path:'proyecto/:id', component:DetailComponent},
    {path: '**', component:ErrorComponent}

];

//Exportación de la configuración de las rutas

export const appRoutingProviders: any [] = []; //Exportar el servicio de rutas:
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);//Exportar el routing 