import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { SucursalesComponent } from './componentes/sucursales/sucursales.component';

const routes: Routes = [
  {path: 'nabvar' , component: NavbarComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sucursales', component: SucursalesComponent},
  {path: 'inicio', component: InicioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
