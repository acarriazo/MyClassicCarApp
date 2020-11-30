import { Component, OnInit, OnDestroy  } from '@angular/core';

//Importo el servicio de acceso a datos
import { ServicioDatosCarService } from '../serviciodatos/serviciodatos.service';

//Módulos necesarios para unsubscribe
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

//importo el modelo CarClass
import { CarClass } from '../models/car.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  destroy$: Subject<boolean> = new Subject<boolean>();
  listaCoches:any=[];//array para contener la infomación obtenida de la BBDD
  
  constructor(private servicioCars:ServicioDatosCarService) { }

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

        console.log('Hola, soy el "servicio de datos" Cars---> ', 'Acceso a datos a través del servicio de datos: ',                this.listaCoches, ' / Longitud del array de datos: ', this.listaCoches.length);
                }) 
                

  } 
  

}
