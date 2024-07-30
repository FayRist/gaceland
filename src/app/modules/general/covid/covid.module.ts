// import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpLoaderFactory } from 'src/app/app.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { CovidRoutingModule } from './covid-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { CovidComponent } from './covid.component';
import { NgImageSliderModule } from 'ng-image-slider';

// export function HttpLoaderFactory(http: HttpClient) {
//     return new TranslateHttpLoader(http, './assets/i18n/', '.json');
//   }

@NgModule({
    imports: [
        CommonModule,
        CovidRoutingModule,
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
        CovidComponent
    ],
    declarations: [
        CovidComponent
    ],
    providers:[],
})
export class CovidModule { }