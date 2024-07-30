import { AboutUsComponent } from './about-us.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [

    {
        path: '', component: AboutUsComponent,
        // children: []
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AboutUsRoutingModule { }