import { ClubhouseComponent } from './clubhouse.component';
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';

const routes: Routes = [

    {
        path: '', component: ClubhouseComponent,
        // children: []
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ClubhouseRoutingModule { }