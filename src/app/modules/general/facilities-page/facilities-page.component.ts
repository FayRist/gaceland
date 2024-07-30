import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facilities-page',
  templateUrl: './facilities-page.component.html',
  styleUrls: ['./facilities-page.component.css']
})
export class FacilitiesPageComponent implements OnInit {
  imageFaci = [{
    image: './assets/images/facilities/facilities.png',
    thumbImage: './assets/images/facilities/facilities.png',
  },{
    image: './assets/images/facilities/facilities0.png',
    thumbImage: './assets/images/facilities/facilities0.png',
  },
  ];

  giSchool = [
  {
    image: './assets/images/facilities/school/01.png',
    thumbImage: './assets/images/facilities/school/01.png',
  },{
    image: './assets/images/facilities/school/02.png',
    thumbImage: './assets/images/facilities/school/02.png',
  },{
    image: './assets/images/facilities/school/03.png',
    thumbImage: './assets/images/facilities/school/03.png',
  },{
    image: './assets/images/facilities/school/04.png',
    thumbImage: './assets/images/facilities/school/04.png',
  },{
    image: './assets/images/facilities/school/05.png',
    thumbImage: './assets/images/facilities/school/05.png',
  },
  {
    image: './assets/images/facilities/school/06.png',
    thumbImage: './assets/images/facilities/school/06.png',
  },
  {
    image: './assets/images/facilities/school/07.png',
    thumbImage: './assets/images/facilities/school/07.png',
  },

  ];


  netaTechCommunity = [
  {
    image: './assets/images/facilities/community/02.png',
    thumbImage: './assets/images/facilities/community/02.png',
  },
  {
    image: './assets/images/facilities/community/04.png',
    thumbImage: './assets/images/facilities/community/04.png',
  },
  {
    image: './assets/images/facilities/community/05.png',
    thumbImage: './assets/images/facilities/community/05.png',
  },
  {
    image: './assets/images/facilities/community/06.png',
    thumbImage: './assets/images/facilities/community/06.png',
  },
  {
      image: './assets/images/facilities/community/08.png',
      thumbImage: './assets/images/facilities/community/08.png',
  },

  ];


  CommunityHub = [{
    image: './assets/images/facilities/netatech/1-1.png',
    thumbImage: './assets/images/facilities/netatech/1-1.png',
  },{
    image: './assets/images/facilities/netatech/10-10.png',
    thumbImage: './assets/images/facilities/netatech/10-10.png',
  },{
    image: './assets/images/facilities/netatech/11-11.png',
    thumbImage: './assets/images/facilities/netatech/11-11.png',
  },{
    image: './assets/images/facilities/netatech/12-12.png',
    thumbImage: './assets/images/facilities/netatech/12-12.png',
  },{
    image: './assets/images/facilities/netatech/13-13.png',
    thumbImage: './assets/images/facilities/netatech/13-13.png',
  },{
    image: './assets/images/facilities/netatech/14-14.png',
    thumbImage: './assets/images/facilities/netatech/14-14.png',
  },
  {
    image: './assets/images/facilities/netatech/2-2.png',
    thumbImage: './assets/images/facilities/netatech/2-2.png',
  },
  {
    image: './assets/images/facilities/netatech/3-3.png',
    thumbImage: './assets/images/facilities/netatech/3-3.png',
  },
  {
    image: './assets/images/facilities/netatech/4-4.png',
    thumbImage: './assets/images/facilities/netatech/4-4.png',
  },
  {
    image: './assets/images/facilities/netatech/5-5.png',
    thumbImage: './assets/images/facilities/netatech/5-5.png',
  },
  {
    image: './assets/images/facilities/netatech/6-6.png',
    thumbImage: './assets/images/facilities/netatech/6-6.png',
  },
  {
    image: './assets/images/facilities/netatech/7-7.png',
    thumbImage: './assets/images/facilities/netatech/7-7.png',
  },
  {
    image: './assets/images/facilities/netatech/8-8.png',
    thumbImage: './assets/images/facilities/netatech/8-8.png',
  }];

  translate!: TranslateService;
  Language: any;

  constructor(translate: TranslateService) { 
    this.translate = translate
    this.Language = localStorage.getItem('Language');
    this.translate.use(this.Language);
  }

  ngOnInit(): void {
    console.log(this.Language);
    
  }

}
