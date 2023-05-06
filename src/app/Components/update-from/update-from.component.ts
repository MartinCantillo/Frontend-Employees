import { Component, OnInit } from '@angular/core';
import { employees } from '../employees/Model/Employee';
import { UpdateEmployeesComponent } from '../update-employees/update-employees.component';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeserviceService } from 'src/app/servicios/employeeservice.service';

@Component({
  selector: 'app-update-from',
  templateUrl: './update-from.component.html',
  styleUrls: ['./update-from.component.css'],
})
export class UpdateFromComponent implements OnInit {
  id: number = 0;
  employee: employees = new employees();
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private EmployeS: EmployeeserviceService
  ) {}
  ngOnInit(): void {
    //cargo el empleado en el formulario
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.EmployeS.findById(this.id).subscribe((resp) => {
      this.employee = resp;
    });
  }

  update(employee: employees) {
    this.EmployeS.updateUser(employee.codigo, employee).subscribe((resp) => {
      this.router.navigate(['/gestionar']);
    });
  }
}
