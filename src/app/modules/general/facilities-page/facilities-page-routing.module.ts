import { FacilitiesPageComponent } from './facilities-page.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [

    {
        path: '', component: FacilitiesPageComponent,
        // children: []
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class FacilitiesPageRoutingModule { }