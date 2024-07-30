import { NgImageSliderModule } from 'ng-image-slider';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { LandingPageComponent } from './landing-page.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { DetailLandingComponent } from './detail-landing/detail-landing.component';
import { TypePlanComponent } from './type-plan/type-plan.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlanGracelandComponent } from './plan-graceland/plan-graceland.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpLoaderFactory } from 'src/app/app.module';
import { PanoramaBtnComponent } from './panorama-btn/panorama-btn.component';

@NgModule({
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    NgbModule,
    HttpClientModule,
    NgImageSliderModule,
    TranslateModule.forRoot({
      // defaultLanguage: 'en',
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  exports: [
    LandingPageComponent
  ],
  declarations: [
    LandingPageComponent,
    SliderComponent,
    FacilitiesComponent,
    ContactUsComponent,
    DetailLandingComponent,
    TypePlanComponent,
    PlanGracelandComponent,
    PanoramaBtnComponent,
  ],
  providers: [
  ],
})
export class LandingPageModule { }