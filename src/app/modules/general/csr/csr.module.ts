import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { CsrRoutingModule } from './csr-routing.module';
import { CsrComponent } from './csr.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { NgbPaginationModule,NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    CsrComponent
  ],
  imports: [
    CommonModule,
    CsrRoutingModule,
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
  ]
})
export class CsrModule { }
