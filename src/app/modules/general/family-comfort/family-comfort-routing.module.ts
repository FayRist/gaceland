import { FamilyComfortComponent } from './family-comfort.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '', component: FamilyComfortComponent,
        // children: []
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class FamilyComfortRoutingModule { }