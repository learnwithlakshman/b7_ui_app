import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { DirectivesComponent } from './directives/directives.component';
import { ProjectComponent } from './project/project.component';
import { FormsComponent } from './forms/forms.component';

import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    component: LoginComponent,
    pathMatch:'full',

  },
  {
    path: 'login',
    component: LoginComponent

  },{
      path:'forms',
      component:FormsComponent,
      canActivate: [AuthGuard]
    },{
      path:'project',
      component:ProjectComponent,
      canActivate: [AuthGuard]
    },
    {
      path:'home',
      component:HomeComponent,
      canActivate: [AuthGuard]
     
    },{
      path:'directives',
      component:DirectivesComponent,
      canActivate: [AuthGuard]
    },{
      path:'epms',
      loadChildren:()=>import('./epms/epms.module').then(m=>m.EpmsModule),
      canActivate: [AuthGuard]
    }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
