import { GalleryTypeAComponent } from './gallery-type-a/gallery-type-a.component';
import { GalleryComponent } from './gallery.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { GalleryTypeBComponent } from './gallery-type-b/gallery-type-b.component';
import { GalleryTypeCComponent } from './gallery-type-c/gallery-type-c.component';
import { GalleryTypeDComponent } from './gallery-type-d/gallery-type-d.component';
import { GalleryMainComponent } from './gallery-main/gallery-main.component';

const routes: Routes = [

  {
    path: '', component: GalleryComponent,
    children: [
      {
        path: '',
        component: GalleryMainComponent,
      },
      {
        path: 'gallery-type-a',
        component: GalleryTypeAComponent,
      },
      {
        path: 'gallery-type-b',
        component: GalleryTypeBComponent,
      },
      {
        path: 'gallery-type-c',
        component: GalleryTypeCComponent,
      },
      {
        path: 'gallery-type-d',
        component: GalleryTypeDComponent,
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
export class GalleryRoutingModule { }