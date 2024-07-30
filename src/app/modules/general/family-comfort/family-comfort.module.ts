import { HttpLoaderFactory } from 'src/app/app.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FamilyComfortRoutingModule } from './family-comfort-routing.module';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FamilyComfortComponent } from './family-comfort.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
    imports: [
        CommonModule,
        FamilyComfortRoutingModule,
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
        FamilyComfortComponent
    ],
    declarations: [
        FamilyComfortComponent
    ],
    providers:[],
})
export class FamilyComfortModule { }