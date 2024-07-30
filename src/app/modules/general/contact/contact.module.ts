import { HttpClient } from '@angular/common/http';
import { HttpLoaderFactory } from 'src/app/app.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ContactRoutingModule } from './contact-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './contact.component';

@NgModule({
    imports: [
        CommonModule,
        ContactRoutingModule,

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
        ContactComponent
    ],
    declarations: [
        ContactComponent
    ],
    providers:[],
})
export class ContactModule { }