import { HttpLoaderFactory } from 'src/app/app.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CeoPageRoutingModule } from './ceo-page-routing.module';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CeoPageComponent } from './ceo-page.component';
import { DetailCeoComponent } from './detail-ceo/detail-ceo.component';
import { CeoMainComponent } from './ceo-main/ceo-main.component';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
    imports: [
        CommonModule,
        CeoPageRoutingModule,
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
        CeoPageComponent
    ],
    declarations: [
        CeoPageComponent,
        DetailCeoComponent,
        CeoMainComponent
    ],
    providers:[],
})
export class CeoPageModule { }