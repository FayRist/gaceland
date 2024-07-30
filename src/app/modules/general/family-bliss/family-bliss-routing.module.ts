import { FamilyBlissComponent } from './family-bliss.component';
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '', component: FamilyBlissComponent,
        // children: []
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class FamilyBlissRoutingModule { }