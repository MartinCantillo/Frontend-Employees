import { Component, Input, OnInit } from '@angular/core';
import { employees } from './Model/Employee';
import { EmployeeserviceService } from 'src/app/servicios/employeeservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {

   employee: employees=  new employees();
  constructor(private Employeservices:EmployeeserviceService, private route:Router) {}
  ngOnInit(): void {
    
  }

  redirect(){
    this.route.navigate(['gestionar']);
  }
  save() {
   
    
    console.log(this.employee),
    this.Employeservices.SaveUser(this.employee).subscribe( {
      next: (res) => this.redirect(),
      error: (error) => {
        console.log(error);
       
      }
    })
  }

  Manage(){
    this.route.navigate(['/gestionar']);
  }

 
}
