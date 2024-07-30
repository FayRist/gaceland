import { PlanGracelandComponent } from './plan-graceland/plan-graceland.component';
import { FooterComponent } from '../footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { FacilitiesComponent } from './facilities/facilities.component';
import { SliderComponent } from './slider/slider.component';
import { DetailLandingComponent } from './detail-landing/detail-landing.component';
import { TypePlanComponent } from './type-plan/type-plan.component';
import { LandingPageComponent } from './landing-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanoramaBtnComponent } from './panorama-btn/panorama-btn.component';



const routes: Routes = [

  { path: '', component: LandingPageComponent,
    children: [
      {
        path: 'slider',
        component: SliderComponent,
      },
      {
        path: 'detail-landing',
        component: DetailLandingComponent,
      },
      {
        path: 'type-plan',
        component: TypePlanComponent,
      },
      {
        path: 'facilities',
        component: FacilitiesComponent,
      },
      {
        path: 'plan-gracelan',
        component: PlanGracelandComponent,
      },
      {
        path: 'contact-us',
        component: ContactUsComponent,
      },
      {
        path: 'panorama-btn',
        component: PanoramaBtnComponent,
      },
      { path: '', redirectTo: 'facilities', pathMatch: 'full' },
      { path: '**', redirectTo: 'facilities', pathMatch: 'full' }
    ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }