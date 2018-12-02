import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { HttpClientModule } from '@angular/common/http';
 // Import RouterModule
import { RouterModule, Routes } from '@angular/router';
import { DataTableModule, SharedModule, ButtonModule, InputTextModule } from 'primeng/primeng';
import {DialogModule} from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { EditEmployeeComponent } from './employees/edit-employee.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeAddressComponent } from './employees/employee-address.component';
import { EmployeeContactComponent } from './employees/employee-contact.component';
// Each route maps a URL path to a component
// The 3rd route specifies the route to redirect to if the path
// is empty. In our case we are redirecting to /list
// pathMatch property value can be full or prefix. For now we
// will set it to full as we want to do a full match
 const appRoutes: Routes = [
  { path: 'list', component: ListEmployeesComponent },
  { path: 'create', component: CreateEmployeeComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];
// To let the router know about the routes configured above,
// pass "appRoutes" constant to forRoot(appRoutes) method
@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    EditEmployeeComponent,
    EmployeeAddressComponent,
    EmployeeContactComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, CommonModule
    , SharedModule, DataTableModule, ButtonModule, DialogModule,
    InputTextModule, FormsModule, BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
