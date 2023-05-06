import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeserviceService } from 'src/app/servicios/employeeservice.service';
import { employees } from '../employees/Model/Employee';

@Component({
  selector: 'app-update-employees',
  templateUrl: './update-employees.component.html',
  styleUrls: ['./update-employees.component.css'],
})
export class UpdateEmployeesComponent {
  // creo mi lista de tipo employee
    EmployeList: employees[] = [];
  constructor(
    private Employeservices: EmployeeserviceService,
    private router: Router
  ) {
    //mando a llamar el metodo para que inicialize
    this.getUsers();
  }

  private getUsers() {
    //Utilizo el servicio inyectado para encontrar los usuarios
    this.Employeservices.findAllUsers().subscribe(
      //Arrow function, funcion anónima similar a expersiones Lambda , aqui relleno el vector
      (userData) => {
        this.EmployeList = userData;
      }
    );
  }

  deleteEmployee(employe: employees) {
    this.Employeservices.deleteUser(employe.codigo).subscribe((resp) => {
      console.log(resp);
      this.router.navigate(['/empleados']);
    });
  }
 
 FindEmployee(employe: employees,id:number) {
    this.router.navigate(['form',id]);
 }

}
