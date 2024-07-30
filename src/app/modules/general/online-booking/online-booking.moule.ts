import { NgbAlertModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OnlineBookingRoutingModule } from './online-booking-routing.module';
import { OnlineBookingComponent } from './online-booking.component';


@NgModule({
    imports: [
        CommonModule,
        OnlineBookingRoutingModule,
        NgbPaginationModule,
        NgbAlertModule,
    ],
    exports: [
        OnlineBookingComponent
    ],
    declarations: [
        OnlineBookingComponent
    ],
    providers:[],
})
export class OnlineBookingModule { }