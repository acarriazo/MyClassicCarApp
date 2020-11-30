import { Component, OnInit, OnDestroy  } from '@angular/core';

//Controles	 de formulario reactivo y validación
import { FormGroup, FormControl, Validators } from '@angular/forms';

//Módulo de router
import { Router } from '@angular/router';

//Importo el servicio de acceso a datos
import { ServicioDatosCarService } from '../serviciodatos/serviciodatos.service';

//Módulos necesarios para unsubscribe
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

//importo el modelo CarClass
import { CarClass } from '../models/car.model';

@Component({
  selector: 'app-put-form',
  templateUrl: './put-form.component.html',
  styleUrls: ['./put-form.component.css']
})
export class PutFormComponent implements OnInit {

  formularioCoche = new FormGroup({
 //incluye validación de datos  
    idCoche: new FormControl('', Validators.required),
    nombreCoche: new FormControl('', Validators.required),
    textoCoche: new FormControl('', Validators.required),
    urlCoche: new FormControl('', Validators.required),
//    consumoCoche: new FormControl('', Validators.required),
    cilindrosCoche: new FormControl('', Validators.required),
//    desplazamientoCoche: new FormControl('', Validators.required),
    potenciaCoche: new FormControl('', Validators.required),
//    pesoCoche: new FormControl('', Validators.required),
    aceleracionCoche: new FormControl('', Validators.required),
    añoCoche: new FormControl('', Validators.required),
    origenCoche: new FormControl('', Validators.required)
  });

  destroy$: Subject<boolean> = new Subject<boolean>();
  listaCoches:any=[];//array para contener la infomación obtenida de la BBDD
  
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

        console.log('Hola, soy el "servicio de datos" Cars---> ', 'Acceso a datos a través del servicio de datos: ',                this.listaCoches, ' / Longitud del array de datos: ', this.listaCoches.length);
                }) 
                

  } 
  
  dropdownSeleccionado(coche) { 
  
    console.log(coche);
    
    /* actualizo los valores del formulario reactivo */ 
    this.formularioCoche.patchValue({
        idCoche:coche.id,
        nombreCoche:coche.Name,
        textoCoche:coche.Text,
        urlCoche:coche.Url,
        cilindrosCoche:coche.Cylinders,
        potenciaCoche:coche.Horsepower,
        aceleracionCoche:coche.Acceleration,
        añoCoche:coche.Year,
        origenCoche:coche.Origin
        });
    
  }
  
  onSubmit() {
 
  console.warn(this.formularioCoche.value.nombreCoche);
  console.warn(this.formularioCoche.value);
  
  this.servicioCars.nuevoCoche = new CarClass
  (
  
    this.formularioCoche.value.idCoche,
    this.formularioCoche.value.nombreCoche,
    this.formularioCoche.value.textoCoche,
    this.formularioCoche.value.urlCoche,
//    this.formularioCoche.value.consumoCoche,
    this.formularioCoche.value.cilindrosCoche,
//    this.formularioCoche.value.desplazamientoCoche,
    this.formularioCoche.value.potenciaCoche,
//    this.formularioCoche.value.pesoCoche,
    this.formularioCoche.value.aceleracionCoche,
    this.formularioCoche.value.añoCoche,
    this.formularioCoche.value.origenCoche
  );
   
  this.servicioCars.sendPutFromFormRequest(this.formularioCoche.value.idCoche);
  console.log(this.servicioCars.nuevoCoche);
  this.router.navigateByUrl('/mantenimiento');
  }
  
 
       

}
