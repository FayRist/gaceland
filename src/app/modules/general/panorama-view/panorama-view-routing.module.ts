import { ViewTypeDComponent } from './view-type-d/view-type-d.component';
import { ViewTypeCComponent } from './view-type-c/view-type-c.component';
import { ViewTypeBComponent } from './view-type-b/view-type-b.component';
import { ViewTypeAComponent } from './view-type-a/view-type-a.component';
import { ViewMainComponent } from './view-main/view-main.component';
import { PanoramaViewComponent } from './panorama-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '', component: PanoramaViewComponent,
    children: [
      {
        path: 'graceland',
        component: ViewMainComponent,
      },
      {
        path: 'graceland_type_a',
        component: ViewTypeAComponent,
      },
      {
        path: 'graceland_type_b',
        component: ViewTypeBComponent,
      },
      {
        path: 'graceland_type_c',
        component: ViewTypeCComponent,
      },
      {
        path: 'graceland_type_d',
        component: ViewTypeDComponent,
      },
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanoramaViewRoutingModule { }
