import { HttpLoaderFactory } from 'src/app/app.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FamilyBlissRoutingModule } from './family-bliss-routing.module';
import { FamilyBlissComponent } from './family-bliss.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgbAlertModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
    imports: [
        CommonModule,
        FamilyBlissRoutingModule,
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
        FamilyBlissComponent
    ],
    declarations: [
        FamilyBlissComponent
    ],
    providers:[],
})
export class FamilyBlissModule { }