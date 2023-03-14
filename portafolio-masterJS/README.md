# Portafolio Frontend

# Creación de componentes: 

- Crear los componentes en una carpeta de componentes:
    - Mediante el cmd de windows (abrir la carpeta del proyecto y en la ruta, escribir cmd) escribir el comando: ng g component [nombre de la carpeta]/[nombre del componente]
    - Automáticamente creará una carpeta de componentes y el componente creado allí dentro
    - Para todos los componentes necesarios será necesario escribir [nombre de la carpeta]/[nombre del componente]

# Fichero de rutas
- Ir a la carpeta app, click derecho, crear archivo, nombre app.routing.ts
- **Configuración de las rutas:**
    - Importar los módulos del router

    ---
    import { ModuleWithProviders } from "@angular/core";
    import { Routes, RouterModule } from "@angular/router";

    ---
    - Importar los componentes creados desde app.module.ts:

    ---
    import { AboutComponent } from './components/about/about.component';
    import { ProjectsComponent } from './components/projects/projects.component';
    import { CreateProjectComponent } from './components/create/create.component';
    import { ContactComponent } from './components/contact/contact.component';

    ---

    - Definir las rutas mediante una constante, crear un array de rutas con objetos JSON, para este portafolio se usan las siguientes rutas:

    ---    
    const appRoutes: Routes = [
        {path:'', component:AboutComponent},
        {path:'sobre-mi', component:AboutComponent},
        {path:'proyectos', component:ProjectsComponent},
        {path:'crear-proyecto', component:CreateComponent},
        {path:'contacto', component:ContactComponent},
        {path: '**', component:ErrorComponent}
    ];

    ---
    - Exportar la configuración de las rutas
    ---
        //Exportar el servicio de rutas:
        export const appRoutingProviders: any [] = [];
        //Exportar el routing 
        export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
    
    ---

    - Importar este fichero en el app.module.ts (debajo del import { ngModule })

    ---
    import { routing, appRoutingProviders } from './app.routing';

    ---

    - Cargar el routing en el apartado de imports de app.module.ts, porque es un módulo 

    ---
    imports: [
    BrowserModule,
    routing
    ],
    providers: [
        appRoutingProviders
    ],

    ---

Si intento ingresar a las rutas creadas no va a funcionar, porque no se está usando el router outlet, que es lo que dispara el funcionamiento del router y carga un componente dentro de la página en función de la URL que se había puesto, si pongo una ruta y corresponde a un componente, entonces va a cargar el componente asociado a esa ruta dentro de una etiqueta, para hacerlo seguir los pasos:

- Ir a app.component.html, borrar lo que hay dentro de ella, agregar una etiqueta de título (opcional)
- Se puede crear una lista de links con los links creados

    ---
    < ul>
        < li>< a [routerLink]="['/sobre-mi']">Sobre mi</ a>< /li>
        < li>< a [routerLink]="['/proyectos']">Proyectos</ a>< /li>
        < li>< a [routerLink]="['/crear-proyecto']">Crear proyecto</ a></ li>
        < li>< a [routerLink]="['/contacto']">Contacto</ a></ li>
    </ ul>

    ---

- Poner la etiqueta < router-outlet></ router-outlet>

