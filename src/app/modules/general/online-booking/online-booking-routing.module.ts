import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlineBookingComponent } from './../online-booking/online-booking.component';

const routes: Routes = [

    {
        path: '', component: OnlineBookingComponent,
        // children: []
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class OnlineBookingRoutingModule { }