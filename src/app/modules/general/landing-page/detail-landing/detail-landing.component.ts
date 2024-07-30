import { Component, Injectable, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-detail-landing',
  templateUrl: './detail-landing.component.html',
  styleUrls: ['./detail-landing.component.css']
})
export class DetailLandingComponent implements OnInit {

  imageDetailLanding = [{
    image: './assets/images/home/detail-landing/slid-1.webp',
    thumbImage: './assets/images/home/detail-landing/slid-1.webp',
  }, {
    image: './assets/images/home/detail-landing/slid-2.webp',
    thumbImage: './assets/images/home/detail-landing/slid-2.webp'
  }, {
    image: './assets/images/home/detail-landing/slid-3.webp',
    thumbImage: './assets/images/home/detail-landing/slid-3.webp',
  }, {
    image: './assets/images/home/detail-landing/slid-4.webp',
    thumbImage: './assets/images/home/detail-landing/slid-4.webp',
  }
  ];

  constructor(private translateService: TranslateService) {
  }

  public selectLanguage(event: any) {
    this.translateService.use(event.target.value);
  }
  
  ngOnInit(): void {
  }

}
