import { FamilyDelightComponent } from './family-delight.component';
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '', component: FamilyDelightComponent,
        // children: []
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class FamilyDelightRoutingModule { }