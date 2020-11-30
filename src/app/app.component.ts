import { Component, HostListener, ElementRef } from '@angular/core';
import { ViewportScroller } from '@angular/common';

import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyClassicCarApp';
  
  //Scroll Arriba
  pageYoffset = 0;
  @HostListener('window:scroll', ['$event']) onScroll(event){
    this.pageYoffset = window.pageYOffset;
  }
  
  constructor(private scroll: ViewportScroller, private router: Router){ }
  
  ngOnInit(){ 
  
    // this.router.navigate(['/topics']);
        
  }
  
  //código para Botón Subir
  
  subirArriba(){
    this.scroll.scrollToPosition([0,0]);
  }
  
  
}
