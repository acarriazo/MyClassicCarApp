import { NgModule } from '@angular/core';

//módulos de routing y precarga
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// componentes creados que exportamos a través de un array de componentes y que luego pueden
// ser importados por otros componentes.
import { PrincipalComponent } from './principal/principal.component';
import { TodosComponent } from './todos/todos.component';
import { SliderComponent } from './slider/slider.component';
import { ContactoComponent } from './contacto/contacto.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PutFormComponent } from './put-form/put-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//Menú, solo es elemento constructivo, no lleva routing 
import { MenuComponent } from './menu/menu.component';
//Footer, solo es elemento constructivo, no lleva routing 
import { FooterComponent } from './footer/footer.component';
//Splash screen, solo es elemento constructivo, no lleva routing 
import { SplashScreenComponent } from './splash-screen/splash-screen.component';


// definición de las rutas utilizadas
const routes: Routes = [
    // redirigimos a la página principal
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  { path: 'principal', component: PrincipalComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'carrusel', component: SliderComponent }, 
  { path: 'contacto', component: ContactoComponent }, 
  { path: 'mantenimiento', component: MantenimientoComponent},
  { path: 'mantenimiento/post-form', component: PostFormComponent },
  { path: 'mantenimiento/put-form', component: PutFormComponent },
  //que siempre al inicio 
  { path: '**',   component: PageNotFoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

//array que incluye todos los componentes y que exportamos para ser usada por 
//otros módulos-componentes
export const routingComponents = [
                                  PrincipalComponent, 
                                  TodosComponent,
                                  SliderComponent,
                                  ContactoComponent, 
                                  MantenimientoComponent,
                                  PostFormComponent,
                                  PutFormComponent,
                                  PageNotFoundComponent,
                                  MenuComponent,
                                  FooterComponent,
                                  SplashScreenComponent]
//precaraga de los módulos                                 
    RouterModule.forRoot(
        routes,
        {
            preloadingStrategy: PreloadAllModules
        }
    )
