import { Component, OnInit } from '@angular/core';
import { ProjectServicesService } from 'src/app/servicios/project-services.service';

@Component({
  selector: 'app-projects-components',
  templateUrl: './projects-components.component.html',
  styleUrls: ['./projects-components.component.css']
})
export class ProjectsComponentsComponent implements OnInit {
  
  participantes :any
constructor(private pjservic :ProjectServicesService ){

}
  ngOnInit(): void {
    this.pjservic.getAll().subscribe( {
      next: (res) =>console.log(this.participantes=res),
      
      error: (error) => {
        console.log(error);
       
   
      }
    })


  }
}
