import { Component, OnInit } from '@angular/core';

//Controles	 de formulario reactivo y validación
import { FormGroup, FormControl, Validators } from '@angular/forms';

//Módulo de router
import { Router } from '@angular/router';

//Importo el servicio de acceso a datos
import { ServicioDatosCarService } from '../serviciodatos/serviciodatos.service';

//importo el modelo CarClass
import { CarClass } from '../models/car.model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {


  formularioCoche = new FormGroup({
 //incluye validación de datos  
   // idCoche: new FormControl('', Validators.required),
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

  
  constructor(private router: Router, private servicioCars:ServicioDatosCarService) { }

  ngOnInit(): void {
  }
  
  onSubmit() {

  let aleatorio:number= Math.floor(Math.random() * (10000 - 1000)) + 1000; // Math.floor(Math.random() * (max - min)) + min
  
  console.warn(this.formularioCoche.value.nombreCoche);
  console.warn(this.formularioCoche.value);
  
  this.servicioCars.nuevoCoche = new CarClass
  (
  
    //this.formularioCoche.value.idCoche,
    aleatorio,
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
   
  this.servicioCars.sendPostFromFormRequest();
  console.log(this.servicioCars.nuevoCoche);
  this.router.navigateByUrl('/mantenimiento');
  }
  
 
       

}
