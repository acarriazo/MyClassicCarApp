import { Component, OnInit } from '@angular/core';

/*PENDIENTE ELIMINAR!!!*/

import { faHome, faClipboardCheck, faCar, faCameraRetro, faEnvelope, faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  //Icons
  
  faHome=faHome;
  faClipboardCheck=faClipboardCheck;
  faCar= faCar;
  faCameraRetro=faCameraRetro;
  faEnvelope=faEnvelope;
  faCog=faCog;
  
  constructor() { }

  ngOnInit(): void {
   
  }
  


}
