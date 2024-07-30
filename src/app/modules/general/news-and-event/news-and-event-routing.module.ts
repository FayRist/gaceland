import { DetailEventComponent } from './detail-event/detail-event.component';
import { DetailNewsComponent } from './detail-news/detail-news.component';


import { MainNewsAndEventComponent } from './main-news-and-event/main-news-and-event.component';
import { NewsAndEventComponent } from './news-and-event.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [

    {
        path: '', component: NewsAndEventComponent,
        children: [
            {
                path: '',
                component: MainNewsAndEventComponent,
            },
            {
                path: 'detail-news',
                component: DetailNewsComponent,
            },
            {
                path: 'detail-event',
                component: DetailEventComponent,
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
export class NewsAndEventRoutingModule { }