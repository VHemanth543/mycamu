import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DesktopComponent } from './components/desktop/desktop.component';

const routes: Routes = [
  { path : '' , redirectTo : '/login' , pathMatch : 'full'},
  { path : 'login' , component : LoginComponent},
  { path : 'desktop' , component : DesktopComponent},
  { path : '**' , redirectTo : '/login' , pathMatch : 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
