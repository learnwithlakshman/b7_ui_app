import { CreateComponent } from './create/create.component';
import { SearchComponent } from './search/search.component';
import { EpmsComponent } from './epms.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path:'',
      component:EpmsComponent,
      children:[
        {
          path:'',
          redirectTo:'search'
          
        },
        {
          path:'search',
          component:SearchComponent
        },{
          path:'create',
          component:CreateComponent
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpmsRoutingModule { }
