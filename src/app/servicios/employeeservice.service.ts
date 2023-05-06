import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { employees } from '../Components/employees/Model/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

   //Endpoint del Backend
   private backendURL: string = "http://localhost:8020/empleados/";
   //private backendURLdelete: string = "http://localhost:8020/empleados/delete";
  constructor(
     //HttpClient para proporcionar métodos que reciben datos del backend
     private httpClient: HttpClient
  ) { }
  
  public SaveUser(employe:employees):Observable<Object>{
  return this.httpClient.post(`${this.backendURL}`,employe);
  }

  public deleteUser(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.backendURL}delete/${id}`);
  }

  findAllUsers(): Observable<employees[]>{
    return this.httpClient.get<employees[]>(`${this.backendURL}`);
  }
  updateUser(id: number, employee: employees): Observable<Object>{
    console.log(employee)
    return this.httpClient.put(`${this.backendURL}update/${id}`, employee);
  }
  
  findById(id: number): Observable<employees>{
    return this.httpClient.get<employees>(`${this.backendURL}find/${id}`);
  }

}
