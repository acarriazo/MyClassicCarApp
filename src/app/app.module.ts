import { BrowserModule } from '@angular/platform-browser';

import { NgModule} from '@angular/core';

//Importo las rutas y los componentes definidos en el módulo de routing
import { AppRoutingModule, routingComponents } from './app-routing.module';

//Acceso a datos vía http ???
import { HttpClientModule } from '@angular/common/http';

//Importo los servicios de acceso a datos
import { ServicioDatosCarService } from './serviciodatos/serviciodatos.service';

//Angular pagination by ngx-pagination
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

//Módulo de acceso a formularios reactivos y no reactivos
import  {  FormsModule,  ReactiveFormsModule  }  from  '@angular/forms';

//Ng-bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//FontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
     // hago la declaración a través de un array que incluye todos los componentes en './app-routing.module' 
    routingComponents,
          
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [
    ServicioDatosCarService
    ],
    
   bootstrap: [AppComponent]
})

export class AppModule { }
