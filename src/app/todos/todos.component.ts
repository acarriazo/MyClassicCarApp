//Componente simple que lista todos los coches

import { Component, OnInit, OnDestroy } from '@angular/core';

//Importo el servicio de acceso a datos
import { ServicioDatosCarService } from '../serviciodatos/serviciodatos.service';


//Módulos necesarios para unsubscribe
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

//Módulo para paginación
import { HttpResponse } from '@angular/common/http';

//Modelo de datos pruebas previas.
//import { NewCarClass } from '../models/car.model';

//Control de formulario para filtro
import { FormControl, Validators } from '@angular/forms';

//Modals
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  
})
export class TodosComponent implements OnInit, OnDestroy {

  destroy$: Subject<boolean> = new Subject<boolean>();
  update: any; //propiedad usada para actualizar la vista cuando se modifican los datos
  
  listaCoches:any=[];//array para contener la infomación obtenida de la BBDD

  seleccionado='Sin selección';//elemento seleccionado
  idSeleccionado=-1;// id del elemento seleccionado
  
  //paginación
    page: number = 1;
    
  //filtro
    filtroCoche = new FormControl('');
    botonDesactivado=false;
 
  //Modal
  closeResult: string;
  modalOptions:NgbModalOptions;
  
  
  //nuevoCoche= new NewCarClass;
  
  constructor(private servicioCars:ServicioDatosCarService, private modalService: NgbModal) {
      //Modal
      this.modalOptions = {
      size: 'md',
      backdrop:'static',
      backdropClass:'customBackdrop'
    }
  }

  ngOnInit() {
  
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
  
 
  /*** FILTRAR  ***/

  resetSearch() {
    
    this.update = this.sendGetRequest();
    this.botonDesactivado=false;
  }
  
  onSubmit(filtro) { 
   
    
    this.listaCoches=this.listaCoches.filter(function(element) { 
        return element.Name.indexOf(filtro.value)>-1; 
        }) 
     
    this.botonDesactivado=true;

    }  
    
 /*** MODAL ***/
 
  open(content) {
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }     


}
