import { HttpClient } from '@angular/common/http';
import { HttpLoaderFactory } from 'src/app/app.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FamilyDelightComponent } from './family-delight.component';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FamilyDelightRoutingModule } from './family-delight-routing.module';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
    imports: [
        CommonModule,
        FamilyDelightRoutingModule,
        NgImageSliderModule,
        NgbPaginationModule,
        NgbAlertModule,
        TranslateModule.forRoot({
            loader: {
              provide: TranslateLoader,
              useFactory: HttpLoaderFactory,
              deps: [HttpClient],
            },
          }),
    ],
    exports: [
        FamilyDelightComponent
    ],
    declarations: [
        FamilyDelightComponent
    ],
    providers:[],
})
export class FamilyDelightModule { }