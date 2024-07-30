import { ClubhouseComponent } from './clubhouse.component';
import { ClubhouseRoutingModule } from './clubhouse-routing.module';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgbAlertModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        ClubhouseRoutingModule,

        NgbPaginationModule,
        NgbAlertModule,
    ],
    exports: [
        ClubhouseComponent
    ],
    declarations: [
        ClubhouseComponent
    ],
    providers:[],
})
export class ClubhouseModule { }