//Componente simple que lista todos los coches

import { Component, OnInit, OnDestroy } from '@angular/core';

//Importo el servicio de acceso a datos
import { ServicioDatosCarService } from '../serviciodatos/serviciodatos.service';


//Módulos necesarios para unsubscribe
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

//Módulo para paginación
import { HttpResponse } from '@angular/common/http';

//Módulo de router
import { Router } from '@angular/router';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css']
})
export class MantenimientoComponent implements OnInit , OnDestroy {

  destroy$: Subject<boolean> = new Subject<boolean>();
  update: any; //propiedad usada para actualizar la vista cuando se modifican los datos
  
  listaCoches:any=[];//array para contener la infomación obtenida de la BBDD
  
  seleccionado='Sin selección';//elemento seleccionado
  idSeleccionado=-1;// id del elemento seleccionado

  //paginación
    page: number = 1;

  constructor(private router: Router, private servicioCars:ServicioDatosCarService) { }

  ngOnInit(): void {
    this.sendGetRequest();
  }
  
    
 //Unsubscribe on destroy 
  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe del subject
    this.destroy$.unsubscribe();
  } 
  
 
   /*** GET ***/
  sendGetRequest(){
 
        this.servicioCars.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe(cars=>{
            console.log('Total de coches: ', cars);
            this.listaCoches = cars;
            console.log('Total de coches en array: ', this.listaCoches);

        console.log('Hola, soy el "servicio de datos" Cars---> ', 'Acceso a datos a través del servicio de datos: ',                this.listaCoches,'/ Actualmente seleccionado: ', this.seleccionado, ' / Longitud del array de datos: ', this.listaCoches.length);
                }) 
                

  } 
  

    
   /*** DELETE ***/
      
  sendDeleteRequest(id){
    console.log('Delete Button Clicked');
    this.servicioCars.sendDeleteRequest(id);
    this.update = this.sendGetRequest();
   
  }
  

  /*** FORMULARIO POST***/
    
  abreFormularioPost(){
    console.log('Form Button Clicked');
    this.router.navigateByUrl('mantenimiento/post-form');
  }
  
  /*** FORMULARIO PUT***/
    
  abreFormularioPut(){
    console.log('Form Button Clicked');
    this.router.navigateByUrl('mantenimiento/put-form');
  }  

}
