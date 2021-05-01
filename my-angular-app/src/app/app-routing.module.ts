import { DirectivesComponent } from './directives/directives.component';
import { ProjectComponent } from './project/project.component';
import { FormsComponent } from './forms/forms.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

    {
      path:'',
      component:HomeComponent,
      pathMatch:'full'
    },{
      path:'services',
      component:ServicesComponent
    },{
      path:'forms',
      component:FormsComponent
    },{
      path:'project',
      component:ProjectComponent
    },
    {
      path:'home',
      component:HomeComponent
     
    },{
      path:'directives',
      component:DirectivesComponent
    },{
      path:'epms',
      loadChildren:()=>import('./epms/epms.module').then(m=>m.EpmsModule)
    }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
