import { DetailCeoComponent } from './detail-ceo/detail-ceo.component';
import { CeoMainComponent } from './ceo-main/ceo-main.component';
import { CeoPageComponent } from './ceo-page.component';
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';

const routes: Routes = [

    {
        path: '', component: CeoPageComponent,
        children: [
            {
                path: '',
                component: CeoMainComponent,
            },
            {
                path: 'detail',
                component: DetailCeoComponent,
            },

            { path: '', redirectTo: '', pathMatch: 'full' },
            { path: '**', redirectTo: '', pathMatch: 'full' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CeoPageRoutingModule { }