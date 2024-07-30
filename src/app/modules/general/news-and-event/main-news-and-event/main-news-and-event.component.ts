import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-news-and-event',
  templateUrl: './main-news-and-event.component.html',
  styleUrls: ['./main-news-and-event.component.css']
})
export class MainNewsAndEventComponent implements OnInit {

  constructor(private router: Router) {  }

  ngOnInit(): void {
  }

  callByDetailNews(){
    this.router.navigate(['/news&event/detail-news'], { queryParams: {} })
  }
  callByDetailEvent(){
    this.router.navigate(['/news&event/detail-event'], { queryParams: {} })
  }

}
