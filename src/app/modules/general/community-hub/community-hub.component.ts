import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community-hub',
  templateUrl: './community-hub.component.html',
  styleUrls: ['./community-hub.component.css']
})
export class CommunityHubComponent implements OnInit {
  imageCommunityHub = [{
    image: 'https://via.placeholder.com/1080x550',
    thumbImage: 'https://via.placeholder.com/1080x550',
  },{
    image: 'https://via.placeholder.com/1080x550',
    thumbImage: 'https://via.placeholder.com/1080x550',
  },{
    image: 'https://via.placeholder.com/1080x550',
    thumbImage: 'https://via.placeholder.com/1080x550',
  },{
    image: 'https://via.placeholder.com/1080x550',
    thumbImage: 'https://via.placeholder.com/1080x550',
  },{
    image: 'https://via.placeholder.com/1080x550',
    thumbImage: 'https://via.placeholder.com/1080x550',
  },{
    image: 'https://via.placeholder.com/1080x550',
    thumbImage: 'https://via.placeholder.com/1080x550',
  },{
    image: 'https://via.placeholder.com/1080x550',
    thumbImage: 'https://via.placeholder.com/1080x550',
  }
  ];

  imageFram = [{
    image: 'https://via.placeholder.com/1080x550',
    thumbImage: 'https://via.placeholder.com/1080x550',
  }, {
    image: 'https://via.placeholder.com/1080x550',
    thumbImage: 'https://via.placeholder.com/1080x550',
  }, {
    image: 'https://via.placeholder.com/1080x550',
    thumbImage: 'https://via.placeholder.com/1080x550',
  }, {
    image: 'https://via.placeholder.com/1080x550',
    thumbImage: 'https://via.placeholder.com/1080x550',
  }, {
    image: 'https://via.placeholder.com/1080x550',
    thumbImage: 'https://via.placeholder.com/1080x550',
  }, {
    image: 'https://via.placeholder.com/1080x550',
    thumbImage: 'https://via.placeholder.com/1080x550',
  }, {
    image: 'https://via.placeholder.com/1080x550',
    thumbImage: 'https://via.placeholder.com/1080x550',
  },
  ];

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

  farmAndFood = [{
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

  giSchool = [  
  // {
  //   image: './assets/img/school/08.png',
  //   thumbImage: './assets/img/school/08.png',
  // },
  {
    image: './assets/img/school/01.png',
    thumbImage: './assets/img/school/01.png',
  },{
    image: './assets/img/school/02.png',
    thumbImage: './assets/img/school/02.png',
  },{
    image: './assets/img/school/03.png',
    thumbImage: './assets/img/school/03.png',
  },{
    image: './assets/img/school/04.png',
    thumbImage: './assets/img/school/04.png',
  },{
    image: './assets/img/school/05.png',
    thumbImage: './assets/img/school/05.png',
  },
  {
    image: './assets/img/school/06.png',
    thumbImage: './assets/img/school/06.png',
  },
  {
    image: './assets/img/school/07.png',
    thumbImage: './assets/img/school/07.png',
  },

  ];


  netaTechCommunity = [  
  // {
  //   image: './assets/img/community/01.png',
  //   thumbImage: './assets/img/community/01.png',
  // },
  {
    image: './assets/img/community/02.png',
    thumbImage: './assets/img/community/02.png',
  },
  // {
  //   image: './assets/img/community/03.png',
  //   thumbImage: './assets/img/community/03.png',
  // },
  {
    image: './assets/img/community/04.png',
    thumbImage: './assets/img/community/04.png',
  },
  {
    image: './assets/img/community/05.png',
    thumbImage: './assets/img/community/05.png',
  },
  {
    image: './assets/img/community/06.png',
    thumbImage: './assets/img/community/06.png',
  },
  // {
  //   image: './assets/img/community/07.png',
  //   thumbImage: './assets/img/community/07.png',
  // },
  {
      image: './assets/img/community/08.png',
      thumbImage: './assets/img/community/08.png',
  },

  ];


  CommunityHub = [{
    image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Fcommunity-hub%2F1-1.png?alt=media&token=207e08cb-ebbd-410b-83ef-5efc3b866141',
    thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Fcommunity-hub%2F1-1.png?alt=media&token=207e08cb-ebbd-410b-83ef-5efc3b866141',
  },{
    image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Fcommunity-hub%2F10-10.png?alt=media&token=a5829d5d-a3a7-4503-bafa-6ca8f3a68cf8',
    thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Fcommunity-hub%2F10-10.png?alt=media&token=a5829d5d-a3a7-4503-bafa-6ca8f3a68cf8',
  },{
    image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Fcommunity-hub%2F11-11.png?alt=media&token=988b0d3d-6a1b-4309-80d2-cbcdaba3f98d',
    thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Fcommunity-hub%2F11-11.png?alt=media&token=988b0d3d-6a1b-4309-80d2-cbcdaba3f98d',
  },{
    image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Fcommunity-hub%2F12-12.png?alt=media&token=ed4c5c3c-b765-4008-842b-7016e59537c5',
    thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Fcommunity-hub%2F12-12.png?alt=media&token=ed4c5c3c-b765-4008-842b-7016e59537c5',
  },{
    image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Fcommunity-hub%2F13-13.png?alt=media&token=c604eedf-182b-46d6-81e8-e50f1dda9013',
    thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Fcommunity-hub%2F13-13.png?alt=media&token=c604eedf-182b-46d6-81e8-e50f1dda9013',
  },{
    image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Fcommunity-hub%2F14-14.png?alt=media&token=ada4bf72-e04d-45dd-b12c-d39d8eda0e7f',
    thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Fcommunity-hub%2F14-14.png?alt=media&token=ada4bf72-e04d-45dd-b12c-d39d8eda0e7f',
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Fcommunity-hub%2F2-2.png?alt=media&token=47aac4e8-3d3c-448d-98a8-a5ab8dc6d734',
    thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Fcommunity-hub%2F2-2.png?alt=media&token=47aac4e8-3d3c-448d-98a8-a5ab8dc6d734',
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Fcommunity-hub%2F3-3.png?alt=media&token=cb1fae22-23e5-4d6e-a351-c33319011346',
    thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Fcommunity-hub%2F3-3.png?alt=media&token=cb1fae22-23e5-4d6e-a351-c33319011346',
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Fcommunity-hub%2F4-4.png?alt=media&token=54e86696-8065-44b9-84ad-715353a008c2',
    thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Fcommunity-hub%2F4-4.png?alt=media&token=54e86696-8065-44b9-84ad-715353a008c2',
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Fcommunity-hub%2F5-5.png?alt=media&token=79f46c45-b7dc-4427-bfba-d29a1805de5b',
    thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Fcommunity-hub%2F5-5.png?alt=media&token=79f46c45-b7dc-4427-bfba-d29a1805de5b',
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Fcommunity-hub%2F6-6.png?alt=media&token=f42e9768-8c28-48e8-a808-009fcf3b0b7c',
    thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Fcommunity-hub%2F6-6.png?alt=media&token=f42e9768-8c28-48e8-a808-009fcf3b0b7c',
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Fcommunity-hub%2F7-7.png?alt=media&token=00b7c973-73bf-4d5e-af4b-4a2590d0a80e',
    thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Fcommunity-hub%2F7-7.png?alt=media&token=00b7c973-73bf-4d5e-af4b-4a2590d0a80e',
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Fcommunity-hub%2F8-8.png?alt=media&token=c26dc239-265c-4ed1-8002-1c8f2c7cbbc1',
    thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Fcommunity-hub%2F8-8.png?alt=media&token=c26dc239-265c-4ed1-8002-1c8f2c7cbbc1',
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
