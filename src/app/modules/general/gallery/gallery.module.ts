import { GalleryTypeDComponent } from './gallery-type-d/gallery-type-d.component';
import { GalleryTypeCComponent } from './gallery-type-c/gallery-type-c.component';
import { GalleryTypeBComponent } from './gallery-type-b/gallery-type-b.component';
import { GalleryTypeAComponent } from './gallery-type-a/gallery-type-a.component';
import { GalleryRoutingModule } from './gallery-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { GalleryComponent } from './gallery.component';
import { GalleryMainComponent } from './gallery-main/gallery-main.component';

@NgModule({
    imports: [
        CommonModule,
        GalleryRoutingModule,

        NgbPaginationModule,
        NgbAlertModule,
    ],
    exports: [
        GalleryComponent
    ],
    declarations: [
        GalleryComponent,
        GalleryTypeAComponent,
        GalleryTypeBComponent,
        GalleryTypeCComponent,
        GalleryTypeDComponent,
        GalleryMainComponent
    ],
    providers:[],
})
export class GalleryModule { }