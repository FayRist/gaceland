import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanoramaViewRoutingModule } from './panorama-view-routing.module';
import { PanoramaViewComponent } from './panorama-view.component';
import { ViewMainComponent } from './view-main/view-main.component';
import { ViewTypeAComponent } from './view-type-a/view-type-a.component';
import { ViewTypeBComponent } from './view-type-b/view-type-b.component';
import { ViewTypeCComponent } from './view-type-c/view-type-c.component';
import { ViewTypeDComponent } from './view-type-d/view-type-d.component';


@NgModule({
  declarations: [
    PanoramaViewComponent,
    ViewMainComponent,
    ViewTypeAComponent,
    ViewTypeBComponent,
    ViewTypeCComponent,
    ViewTypeDComponent
  ],
  imports: [
    CommonModule,
    PanoramaViewRoutingModule
  ]
})
export class PanoramaViewModule { }
