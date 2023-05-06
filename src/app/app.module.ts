import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './Components/employees/employees.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { UpdateFromComponent } from './Components/update-from/update-from.component';
import { UpdateEmployeesComponent } from './Components/update-employees/update-employees.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { ProjectsComponentsComponent } from './Components/projects-components/projects-components.component';

const appRoutes: Routes = [

  {path:'proyecto', component:ProjectsComponentsComponent},
  { path: 'empleados', component: EmployeesComponent },
   {path:'gestionar', component:UpdateEmployeesComponent},
  {path:'form/:id', component:UpdateFromComponent},
];
@NgModule({
  declarations: [AppComponent, EmployeesComponent, UpdateEmployeesComponent,
    UpdateFromComponent,
    ProjectsComponent,
    ProjectsComponentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //aqui hago esto y le mando por el ciclo for las rutas o el array(appRoutes)
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
