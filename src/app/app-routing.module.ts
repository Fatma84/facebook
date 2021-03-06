import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './components/home/home.module';
import { LoginComponent } from './components/login/login.component';
import { FacebookGuard } from './guards/facebook.guard';
import { HomeComponent } from './components/home/home.component'

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
    canActivate : [FacebookGuard]
  },
  {
    path:'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
