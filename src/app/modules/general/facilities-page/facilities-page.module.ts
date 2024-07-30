import { HttpLoaderFactory } from 'src/app/app.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FacilitiesPageRoutingModule } from './facilities-page-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { FacilitiesPageComponent } from './facilities-page.component';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
    imports: [
        CommonModule,
        FacilitiesPageRoutingModule,
        NgImageSliderModule,
        NgbPaginationModule,
        NgbAlertModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
              provide: TranslateLoader,
              useFactory: HttpLoaderFactory,
              deps: [HttpClient],
            },
          }),
    ],
    exports: [
        FacilitiesPageComponent
    ],
    declarations: [
        FacilitiesPageComponent
    ],
    providers:[],
})
export class FacilitiesPageModule { }