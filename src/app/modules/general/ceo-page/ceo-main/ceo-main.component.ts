import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ceo-main',
  templateUrl: './ceo-main.component.html',
  styleUrls: ['./ceo-main.component.css']
})
export class CeoMainComponent implements OnInit {
  imageObject = [{
    image: 'https://via.placeholder.com/620x400',
    thumbImage: 'https://via.placeholder.com/620x400',
  },{
    image: 'https://via.placeholder.com/620x400',
    thumbImage: 'https://via.placeholder.com/620x400',
  },{
    image: 'https://via.placeholder.com/620x400',
    thumbImage: 'https://via.placeholder.com/620x400',
  },{
    image: 'https://via.placeholder.com/620x400',
    thumbImage: 'https://via.placeholder.com/620x400',
  },{
    image: 'https://via.placeholder.com/620x400',
    thumbImage: 'https://via.placeholder.com/620x400',
  },{
    image: 'https://via.placeholder.com/620x400',
    thumbImage: 'https://via.placeholder.com/620x400',
  },{
    image: 'https://via.placeholder.com/620x400',
    thumbImage: 'https://via.placeholder.com/620x400',
  },
  ];

  imageObjectCeo = [{
    image: './assets/img/Netatech.jpeg',
    thumbImage: './assets/img/Netatech.jpeg',
  },{
    image: 'https://player.vimeo.com/video/87701971',
    thumbImage: 'https://player.vimeo.com/video/87701971',
  },
  ];

  translate!: TranslateService;
  Language: any;
  constructor(translate: TranslateService) {
    this.translate = translate
    this.Language = localStorage.getItem('Language');
    this.translate.use(this.Language);
   }

  ngOnInit(): void {
  }

}
