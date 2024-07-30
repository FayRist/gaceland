import { NewsAndEventRoutingModule } from './news-and-event-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { NewsAndEventComponent } from './news-and-event.component';
import { MainNewsAndEventComponent } from './main-news-and-event/main-news-and-event.component';
import { DetailNewsComponent } from './detail-news/detail-news.component';
import { DetailEventComponent } from './detail-event/detail-event.component';

@NgModule({
    imports: [
        CommonModule,
        NewsAndEventRoutingModule,

        NgbPaginationModule,
        NgbAlertModule,
    ],
    exports: [
        NewsAndEventComponent
    ],
    declarations: [
        NewsAndEventComponent,
        MainNewsAndEventComponent,
        DetailNewsComponent,
        DetailEventComponent
    ],
    providers:[],
})
export class NewsAndEventModule { }