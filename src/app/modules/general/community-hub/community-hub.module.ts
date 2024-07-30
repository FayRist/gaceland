import { HttpLoaderFactory } from 'src/app/app.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityHubRoutingModule } from './community-hub-routing.module';
import { CommunityHubComponent } from './community-hub.component';
import { NgImageSliderModule } from 'ng-image-slider';


@NgModule({
  declarations: [
    CommunityHubComponent
  ],
  imports: [
    CommonModule,
    CommunityHubRoutingModule,
    NgImageSliderModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      }),
  ]
})
export class CommunityHubModule { }
