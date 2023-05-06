import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProjectServicesService {

  //Endpoint del Backend
  private backendURL: string = "http://localhost:8020/empleados/";
 constructor(
   
    private httpClient: HttpClient
 ) { }
 
 public getAll():Observable<Object>{
 return this.httpClient.get(this.backendURL);
 }
}
