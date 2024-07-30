import { GracelandLategratedCommunityComponent } from './graceland-lategrated-community.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path:'', component: GracelandLategratedCommunityComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GracelandLategratedCommunityRoutingModule { }
