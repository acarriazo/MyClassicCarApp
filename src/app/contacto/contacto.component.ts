import { Component, OnInit } from '@angular/core';

//Forms
import { FormGroup, FormBuilder } from  '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  formularioContacto: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {
    this.creaFormularioContacto();
  }

  ngOnInit(): void {
  }
  
  creaFormularioContacto(){
    this.formularioContacto = this.formBuilder.group({
      nombreCompleto: [''],  
      email: [''],
      mensaje: ['']
    });
  }
  
  onSubmit() {
      console.log('Datos del formulario : ', this.formularioContacto.value );
  }

}
