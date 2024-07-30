import { HttpLoaderFactory } from 'src/app/app.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AboutUsRoutingModule } from './about-us-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { AboutUsComponent } from './about-us.component';

@NgModule({
    imports: [
        CommonModule,
        AboutUsRoutingModule,

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
        AboutUsComponent
    ],
    declarations: [
        AboutUsComponent
    ],
    providers:[],
})
export class AboutUsModule { }