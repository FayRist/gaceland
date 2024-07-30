import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GracelandLategratedCommunityRoutingModule } from './graceland-lategrated-community-routing.module';
import { GracelandLategratedCommunityComponent } from './graceland-lategrated-community.component';
import { NgImageSliderModule } from 'ng-image-slider';


@NgModule({
  declarations: [
    GracelandLategratedCommunityComponent
  ],
  imports: [
    CommonModule,
    NgImageSliderModule,
    GracelandLategratedCommunityRoutingModule
  ]
})
export class GracelandLategratedCommunityModule { }
