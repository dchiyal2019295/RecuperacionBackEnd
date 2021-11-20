import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { SucursalesComponent } from './componentes/sucursales/sucursales.component';

const routes: Routes = [
  {path: 'nabvar' , component: NavbarComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sucursales', component: SucursalesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
