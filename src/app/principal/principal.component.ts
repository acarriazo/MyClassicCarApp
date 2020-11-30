import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  // imágenes provisional
  
  imagenFrente:string='https://cdn.pixabay.com/photo/2016/01/09/17/36/steering-wheel-1130626_960_720.jpg';
  
  arrayImagenesCarrusel:string[]=
  [
  'https://images.freeimages.com/images/large-previews/3dd/1968-mustang-b-w-2-1550793.jpg',
  'https://images.freeimages.com/images/large-previews/89f/mustang-emblem-1256907.jpg',
  'https://images.freeimages.com/images/large-previews/a49/classic-car-1543446.jpg',
  'https://images.freeimages.com/images/large-previews/666/bel-air-1449710.jpg',
  'https://images.freeimages.com/images/large-previews/c5c/old-cars-1308397.jpg',
  'https://cdn.pixabay.com/photo/2017/09/01/20/23/ford-2705402_960_720.jpg',
  'https://cdn.pixabay.com/photo/2013/08/11/03/40/car-171422_960_720.jpg',
  'https://cdn.pixabay.com/photo/2019/04/02/10/58/oldtimer-4097480_960_720.jpg',
  'https://cdn.pixabay.com/photo/2018/01/20/19/05/auto-3095196_960_720.jpg',
  'https://cdn.pixabay.com/photo/2014/06/04/16/52/classic-car-362176_960_720.jpg'
  ];
  
    arrayImagenesMosaico1:string[]=
    [
    'https://cdn.pixabay.com/photo/2019/07/07/14/03/fiat-4322521_960_720.jpg',
    'https://cdn.pixabay.com/photo/2015/07/20/00/57/vintage-car-852239_960_720.jpg',
    'https://cdn.pixabay.com/photo/2018/12/09/12/19/corvette-3864797_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/03/09/09/16/car-1245706_960_720.jpg'
    ];
    
    arrayImagenesMosaico2:string[]=
    [
    'https://cdn.pixabay.com/photo/2016/11/29/10/01/vw-bully-1868890_960_720.jpg',
    'https://cdn.pixabay.com/photo/2019/11/05/12/05/oldtimer-4603360_960_720.jpg',
    'https://cdn.pixabay.com/photo/2019/04/23/05/25/car-4148514_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/09/11/22/43/old-2740697_960_720.jpg'    
    ];
    
    arrayImagenesMosaico3:string[]=
    [
    'https://cdn.pixabay.com/photo/2016/07/13/20/43/auto-1515466_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/11/29/03/14/automobile-1867006_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/01/09/17/38/steering-wheel-1130630_960_720.jpg',
    'https://cdn.pixabay.com/photo/2018/09/11/07/38/car-3668796_960_720.jpg'    
    ];
  
 

  constructor() { }

  ngOnInit(): void {
  }
  


}
