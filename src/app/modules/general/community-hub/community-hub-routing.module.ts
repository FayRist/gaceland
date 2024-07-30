import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityHubComponent } from './community-hub.component';

const routes: Routes = [

  {
    path:'', component: CommunityHubComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunityHubRoutingModule { }
