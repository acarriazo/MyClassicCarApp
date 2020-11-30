//Servicio de datos inyectable para conpartir imformación entre los componentes
import { Injectable, OnInit } from '@angular/core';

//Módulo de acceso a datos vía http y gestión de errores. Adición de parámetros
//y paginación.
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { takeUntil, retry, catchError, tap } from 'rxjs/operators';

//Importo los datos a los que quiero tener acceso
import { CarClass } from '../models/car.model';

//Defino y utilizo el servicio de acceso a datos, que se comporta como 
//"singleton" para que solamente exista una instancia del servicio.
import { CategoriaClass } from '../models/categoria.model';


@Injectable({
  providedIn: 'root'
})

//Clase aplicable a los "topics"
export class ServicioDatosCategoriaService {
  
  data = new CategoriaClass;
  longitud = this.data.categorias.length;
  seleccionado='Sin selección';
  idSeleccionado=-1;

  constructor() { 
  }
  
  ngOnInit(){
  }
  
}


//Clase aplicable a "cars"
export class ServicioDatosCarService {

  //private REST_API_SERVER = "https://my-json-rest-server.herokuapp.com/cars";
  private REST_API_SERVER = "http://localhost:3000/cars"

  private carsObservable : Observable<any> ;
  private ngUnsubscribe = new Subject();

//String variables para paginación
  public longitudPaginaUno='13'; //Podemos establecer la longitud de la página. 
  public longitudPaginaDos='_page=1&_limit=';
  public longitudPaginaURL = this.longitudPaginaDos.concat(this.longitudPaginaUno); 
  
  
  public first: string = "";
  public prev: string = "";
  public next: string = "";
  public last: string = "";


// Inyecto http en el constructor
  constructor(private httpClient: HttpClient) { 
    this.carsObservable = this.httpClient.get(this.REST_API_SERVER);
    console.log(this.carsObservable);     
  }
  
    ngOnInit(){
  }
  
  //Invoco el método GET de HttpClient para enviar solicitudes al servidor REST API 
  //con gestión de errores y tres reintentos
  
  //Antes conocer el número total de elementos.
  
  public longitudPagina(){
    return Number(this.longitudPaginaUno);
  }
  
  public sendGetRequestLongitud(){
    //return this.httpClient.get(this.REST_API_SERVER).pipe(retry(3), catchError(this.gestionaError));
    return this.carsObservable = this.httpClient.get(this.REST_API_SERVER);
  }
   
  /*** GET ***/
  
  public sendGetRequest(){
  
    return this.carsObservable = this.httpClient.get(this.REST_API_SERVER);
  }
  
  //Gestión de errores
  
    gestionaError(error: HttpErrorResponse) {
    let mensajeError = 'Error desconocido!';
    if (error.error instanceof ErrorEvent) {
      // Errores del lado cliente
      mensajeError = `Error: ${error.error.message}`;
    } else {
      // Errores del lado servidor
      mensajeError = `Error Código: ${error.status}\nMensaje: ${error.message}`;
    }
    window.alert(mensajeError);
    return throwError(mensajeError);
  }
  
  
 //Paginación 
  parseLinkHeader(header) {
    if (header.length == 0) {
      return ;
    }

    let parts = header.split(',');
    var links = {};
    parts.forEach( p => {
      let section = p.split(';');
      var url = section[0].replace(/<(.*)>/, '$1').trim();
      var name = section[1].replace(/rel="(.*)"/, '$1').trim();
      links[name] = url;

    });

    this.first  = links["first"];
    this.last   = links["last"];
    this.prev   = links["prev"];
    this.next   = links["next"]; 
  }
  
  
  //Paginación. Este método es similar a sendGetRequest() excepto que toma la URL a la que necesitamos enviar una HTTP GET request. 
    public sendGetRequestToUrl(url: string){
        return this.httpClient.get(url, { observe: "response"}).pipe(retry(3), catchError(this.gestionaError), tap(cars => {
      console.log(cars.headers.get('Link'));
        this.parseLinkHeader(cars.headers.get('Link'));

    }));
  }
 
 /*** POST ***/
 
 public sendPostRequest() {
    console.log('POST');
    //this.httpClient.post(this.REST_API_SERVER, { foo:"foo"});
 
  
    
     this.httpClient.post(this.REST_API_SERVER,
        {
    Name: "Porche 911 Turbo",
    Miles_per_Gallon: 10,
    Cylinders2: 6,
    Displacement: 5,
    Horsepower: 480,
    Weight_in_lbs: 3500,
    Acceleration: 4.2,
    Year: "1998",
    Origin: "Europe"
        })
        
          .pipe(
        takeUntil(this.ngUnsubscribe)
            )
        
        .subscribe(
        data  => {
        console.log("POST Request is successful ", data);
              
        },
        
        error  => {
        console.log("Error", error);
                }
            );
            
 
            
      
        }
 
 
        
      

  
}
