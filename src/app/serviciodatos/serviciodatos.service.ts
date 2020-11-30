//Servicio de datos inyectable para conpartir imformación entre los componentes
import { Injectable, OnInit } from '@angular/core';

//Módulo de acceso a datos vía http y gestión de errores. Adición de parámetros
//y paginación.
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Subject, throwError } from 'rxjs'; 
import { takeUntil, retry, catchError, tap } from 'rxjs/operators';

//Importo los datos a los que quiero tener acceso

//Defino y utilizo el servicio de acceso a datos, que se comporta como 
//"singleton" para que solamente exista una instancia del servicio.
import { CarClass } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})



//Clase aplicable a "cars"
export class ServicioDatosCarService {

  private REST_API_SERVER = "https://my-json-rest-server.herokuapp.com/cars";
  //private REST_API_SERVER = "http://localhost:3000/cars";
 
  private ngUnsubscribe = new Subject();

  public nuevoCoche:CarClass;

// Inyecto http en el constructor
  constructor(private httpClient: HttpClient) { }
  
    ngOnInit(){}
  
  //Invoco el método GET de HttpClient para enviar solicitudes al servidor REST API 
  //con gestión de errores y tres reintentos
  
  //Antes cococer el número total de elementos.
  
  /*** GET ***/
  
  public sendGetRequest(){
  
      // Add safe, URL encoded_page parameter y paginación.
         
    return this.httpClient.get(this.REST_API_SERVER).pipe(retry(3), catchError(this.gestionaError));

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
  
 
 
 /*** DELETE ***/
 
 public sendDeleteRequest(id:number) {
 
    console.log('DELETE');
    let destino:string = this.REST_API_SERVER + '/' + id;
    this.httpClient.delete(destino)
    
    .pipe(
        takeUntil(this.ngUnsubscribe), catchError(this.gestionaError)
            )
        
    .subscribe(
        data  => {
        console.log("DELETE Request is successful ", data);
       
        }
    
             );
              
    }
    
 
 /*** POST FORM ***/
 
 public sendPostFromFormRequest() {
     console.log('POST FORM');
    
       
     this.httpClient.post(this.REST_API_SERVER,this.nuevoCoche)

        
          .pipe(
        takeUntil(this.ngUnsubscribe), catchError(this.gestionaError)
            )
        
        .subscribe(
        data  => {
        console.log("POST Request is successful ", data);
        
       
        },
            
             );
             
    }
    
 /*** PUT FORM ***/
 
 public sendPutFromFormRequest(id:number) {
     console.log('PUT FORM');
         
     let destino:string = this.REST_API_SERVER + '/' + id;
       
     this.httpClient.put(destino,this.nuevoCoche)

        
          .pipe(
        takeUntil(this.ngUnsubscribe), catchError(this.gestionaError)
            )
        
        .subscribe(
        data  => {
        console.log("PUT Request is successful ", data);
        
       
        },
            
             );
             
    }   
  
}
