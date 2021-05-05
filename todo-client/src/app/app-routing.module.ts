import { ArchiveComponent } from './archive/archive.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

    {
      path:'',
      component:LoginComponent,
      pathMatch:'full'
    },{
      path:'login',
      component:LoginComponent
    },
    {
      path:'home',
      component:HomeComponent
    },
    {
      path:'archive',
      component:ArchiveComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
