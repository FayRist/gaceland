import { BenefitRoutingModule } from './benefit-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { BenefitComponent } from './benefit.component';

@NgModule({
    imports: [
        CommonModule,
        BenefitRoutingModule,

        NgbPaginationModule,
        NgbAlertModule,
    ],
    exports: [
        BenefitComponent
    ],
    declarations: [
        BenefitComponent
    ],
    providers:[],
})
export class BenefitModule { }
