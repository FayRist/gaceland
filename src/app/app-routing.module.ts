import { VideoModule } from './modules/general/video/video.module';
import { CovidComponent } from './modules/general/covid/covid.component';
import { CommunityHubModule } from './modules/general/community-hub/community-hub.module';
import { GracelandLategratedCommunityModule } from './modules/general/graceland-lategrated-community/graceland-lategrated-community.module';
import { CsrModule } from './modules/general/csr/csr.module';
import { CommunityModule } from './modules/general/community/community.module';
import { LandingPageComponent } from './modules/general/landing-page/landing-page.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { NotFoundComponent } from './modules/general/not-found/not-found.component';

const routes: Routes = [

  { path: '', component: LandingPageComponent },
  {
    path: 'about',
    loadChildren: () => import('./modules/general/about-us/about-us.module')
      .then(mod => mod.AboutUsModule)
  },
  {
    path: 'benefit',
    loadChildren: () => import('./modules/general/benefit/benefit.module')
      .then(mod => mod.BenefitModule)
  },
  {
    path: 'ceo',
    loadChildren: () => import('./modules/general/ceo-page/ceo-page.module')
      .then(mod => mod.CeoPageModule)
  },
  {
    path: 'clubhouse',
    loadChildren: () => import('./modules/general/clubhouse/clubhouse.module')
      .then(mod => mod.ClubhouseModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/general/contact/contact.module')
      .then(mod => mod.ContactModule)
  },
  {
    path: 'csr',
    loadChildren: () => import('./modules/general/csr/csr.module')
      .then(mod => mod.CsrModule)
  },
  {
    path: 'community',
    loadChildren: () => import('./modules/general/community/community.module')
      .then(mod => mod.CommunityModule)
  },
  {
    path: 'community-hub',
    loadChildren: () => import('./modules/general/community-hub/community-hub.module')
      .then(mod => mod.CommunityHubModule)
  },
  {
    path: 'graceland-lategrated-community',
    loadChildren: () => import('./modules/general/graceland-lategrated-community/graceland-lategrated-community.module')
      .then(mod => mod.GracelandLategratedCommunityModule)
  },
  {
    path: 'covid',
    loadChildren: () => import('./modules/general/covid/covid.module')
      .then(mod => mod.CovidModule)
  },
  {
    path: 'facilities',
    loadChildren: () => import('./modules/general/facilities-page/facilities-page.module')
      .then(mod => mod.FacilitiesPageModule)
  },
  {
    path: 'family-bliss',
    loadChildren: () => import('./modules/general/family-bliss/family-bliss.module')
      .then(mod => mod.FamilyBlissModule)
  },
  {
    path: 'family-comfort',
    loadChildren: () => import('./modules/general/family-comfort/family-comfort.module')
      .then(mod => mod.FamilyComfortModule)
  },
  {
    path: 'family-delight',
    loadChildren: () => import('./modules/general/family-delight/family-delight.module')
      .then(mod => mod.FamilyDelightModule)
  },
  {
    path: 'family-harmony',
    loadChildren: () => import('./modules/general/family-harmony/family-harmony.module')
      .then(mod => mod.FamilyHarmonyModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./modules/general/gallery/gallery.module')
      .then(mod => mod.GalleryModule)
  },
  {
    path: 'landing-page',
    loadChildren: () => import('./modules/general/landing-page/landing-page.module')
      .then(mod => mod.LandingPageModule)
  },
  {
    path: 'news&event',
    loadChildren: () => import('./modules/general/news-and-event/news-and-event.module')
      .then(mod => mod.NewsAndEventModule)
  },
  {
    path: 'type-plan',
    loadChildren: () => import('./modules/general/type-plan/type-plan.module')
      .then(mod => mod.TypePlanModule)
  },
  {
    path: 'online-booking',
    loadChildren: () => import('./modules/general/online-booking/online-booking.moule')
      .then(mod => mod.OnlineBookingModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./modules/general/video/video.module')
      .then(mod => mod.VideoModule)
  },
  {
    path: 'view360',
    loadChildren: () => import('./modules/general/panorama-view/panorama-view.module')
      .then(mod => mod.PanoramaViewModule)
  },
  {
    path: 'csr',
    loadChildren: () => import('./modules/general/csr/csr.module')
      .then(mod => mod.CsrModule)
  },
  { path: '**', component: LandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
