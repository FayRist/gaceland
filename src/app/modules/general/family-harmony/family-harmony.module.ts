import { HttpLoaderFactory } from 'src/app/app.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FamilyHarmonyComponent } from './family-harmony.component';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FamilyHarmonyRoutingModule } from './family-harmony-routing.module';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
    imports: [
        CommonModule,
        FamilyHarmonyRoutingModule,
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
        FamilyHarmonyComponent
    ],
    declarations: [
        FamilyHarmonyComponent
    ],
    providers:[],
})
export class FamilyHarmonyModule { }