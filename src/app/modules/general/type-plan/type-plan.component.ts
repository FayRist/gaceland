import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-plan',
  templateUrl: './type-plan.component.html',
  styleUrls: ['./type-plan.component.css']
})
export class TypePlanComponent implements OnInit {
  imageObjectTypeA = [
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2FtypeAndPlane%2FA.png?alt=media&token=6ff57340-9eca-46d2-b95e-7c43433e1141',
      thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2FtypeAndPlane%2FA.png?alt=media&token=6ff57340-9eca-46d2-b95e-7c43433e1141',
    },{
    image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-a%2F1.webp?alt=media&token=d661d7c7-f03c-4cf8-9918-5cb4777781eb',
    thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-a%2F1.webp?alt=media&token=d661d7c7-f03c-4cf8-9918-5cb4777781eb',
  }, {
    image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-a%2F2.webp?alt=media&token=30d1f114-9739-4331-9cb5-7e6dc6407db2',
    thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-a%2F2.webp?alt=media&token=30d1f114-9739-4331-9cb5-7e6dc6407db2'
  }, {
    image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-a%2F3.webp?alt=media&token=fe7daf87-b6fc-4872-b4bc-18b751b9ad40',
    thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-a%2F3.webp?alt=media&token=fe7daf87-b6fc-4872-b4bc-18b751b9ad40',
  }, {
    image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-a%2F4.webp?alt=media&token=4a8e8787-4cfb-4079-a202-e47f548102e7',
    thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-a%2F4.webp?alt=media&token=4a8e8787-4cfb-4079-a202-e47f548102e7',
  }, {
    image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-a%2Fa1.png?alt=media&token=df9b5893-2653-4a74-a3d0-d90fecf93486',
    thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-a%2Fa1.png?alt=media&token=df9b5893-2653-4a74-a3d0-d90fecf93486',
  }, {
    image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-a%2F6.webp?alt=media&token=3f05e3dc-edfa-40be-b13a-3085e355b670',
    thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-a%2F6.webp?alt=media&token=3f05e3dc-edfa-40be-b13a-3085e355b670'
  }, {
    image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-a%2Fa2.png?alt=media&token=e03bece8-bd2b-44ae-b6e8-9d7c64fdeb0e',
    thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-a%2Fa2.png?alt=media&token=e03bece8-bd2b-44ae-b6e8-9d7c64fdeb0e',
  },
  ];
  imageObjectTypeB = [
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2FtypeAndPlane%2FB.png?alt=media&token=0cdd9f84-df6e-4b51-a0ab-9e8a763cb5b1',
      thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2FtypeAndPlane%2FB.png?alt=media&token=0cdd9f84-df6e-4b51-a0ab-9e8a763cb5b1',
    },{
    image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-b%2FDSC01775.jpg?alt=media&token=7cf32a99-bf9f-40d3-96f9-083c12074ec8',
    thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-b%2FDSC01775.jpg?alt=media&token=7cf32a99-bf9f-40d3-96f9-083c12074ec8',
  }, {
    image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-b%2FDSC01777.jpg?alt=media&token=8a48d687-e213-4433-9aad-21f613e681fc',
    thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-b%2FDSC01777.jpg?alt=media&token=8a48d687-e213-4433-9aad-21f613e681fc'
  }, {
    image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-b%2FDSC01792.jpg?alt=media&token=3dc6b21d-0da4-488c-83d0-93841993f3d7',
    thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-b%2FDSC01792.jpg?alt=media&token=3dc6b21d-0da4-488c-83d0-93841993f3d7',
  }, {
    image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-b%2FDSC01800.jpg?alt=media&token=cf63864f-54c4-4180-9a17-9cc544e28231',
    thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-b%2FDSC01800.jpg?alt=media&token=cf63864f-54c4-4180-9a17-9cc544e28231',
  }, {
    image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-b%2FDSC01807.jpg?alt=media&token=a349a4aa-d73d-49d6-a6f4-ce2884d09f0d',
    thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-b%2FDSC01807.jpg?alt=media&token=a349a4aa-d73d-49d6-a6f4-ce2884d09f0d',
  }
  ];
  imageObjectTypeC = [
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2FtypeAndPlane%2FC.png?alt=media&token=1b742e49-8e9c-4677-8dda-16cf5b5bded5',
      thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2FtypeAndPlane%2FC.png?alt=media&token=1b742e49-8e9c-4677-8dda-16cf5b5bded5',
    },{
    image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-c%2F1.webp?alt=media&token=d8af991f-4c22-4e40-91e5-e5992ffe077c',
    thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-c%2F1.webp?alt=media&token=d8af991f-4c22-4e40-91e5-e5992ffe077c',
  }, {
    image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-c%2F2.webp?alt=media&token=b00454e2-8e8c-4a9a-b047-2bcdcb105eb3',
    thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-c%2F2.webp?alt=media&token=b00454e2-8e8c-4a9a-b047-2bcdcb105eb3'
  }, {
    image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-c%2F3.webp?alt=media&token=69cc0c1b-8c75-4dbe-88b7-9ad02c3cc0f7',
    thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-c%2F3.webp?alt=media&token=69cc0c1b-8c75-4dbe-88b7-9ad02c3cc0f7',
  }, {
    image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-c%2F4.webp?alt=media&token=29d73248-bc91-4eba-a868-9ae88cd0537a',
    thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-c%2F4.webp?alt=media&token=29d73248-bc91-4eba-a868-9ae88cd0537a',
  }, {
    image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-c%2F5.webp?alt=media&token=47c56129-574e-4bdc-877b-6ff280228f26',
    thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-c%2F5.webp?alt=media&token=47c56129-574e-4bdc-877b-6ff280228f26',
  }, {
    image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-c%2F6.webp?alt=media&token=4779ef35-e718-466a-b3e5-a1b57ea8eadc',
    thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-c%2F6.webp?alt=media&token=4779ef35-e718-466a-b3e5-a1b57ea8eadc',
  }, {
    image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-c%2F7.webp?alt=media&token=287552da-3356-4b2a-b511-7101bce11a48',
    thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-c%2F7.webp?alt=media&token=287552da-3356-4b2a-b511-7101bce11a48',
  }
  ];
  imageObjectTypeD = [
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2FtypeAndPlane%2FD.png?alt=media&token=ba0e5a9b-f827-49f8-8cf4-1782944a9815',
      thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2FtypeAndPlane%2FD.png?alt=media&token=ba0e5a9b-f827-49f8-8cf4-1782944a9815',
    },{
    image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-d%2FDSC01872.jpg?alt=media&token=8867afbb-8601-417d-95cb-c6ecc37edbaa',
    thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-d%2FDSC01872.jpg?alt=media&token=8867afbb-8601-417d-95cb-c6ecc37edbaa',
  }, {
    image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-b%2FDSC01777.jpg?alt=media&token=8a48d687-e213-4433-9aad-21f613e681fc',
    thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-b%2FDSC01777.jpg?alt=media&token=8a48d687-e213-4433-9aad-21f613e681fc'
  }, {
    image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-b%2FDSC01792.jpg?alt=media&token=3dc6b21d-0da4-488c-83d0-93841993f3d7',
    thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-b%2FDSC01792.jpg?alt=media&token=3dc6b21d-0da4-488c-83d0-93841993f3d7',
  }, {
    image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-b%2FDSC01800.jpg?alt=media&token=cf63864f-54c4-4180-9a17-9cc544e28231',
    thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-b%2FDSC01800.jpg?alt=media&token=cf63864f-54c4-4180-9a17-9cc544e28231',
  }, {
    image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-b%2FDSC01807.jpg?alt=media&token=a349a4aa-d73d-49d6-a6f4-ce2884d09f0d',
    thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Ftype-b%2FDSC01807.jpg?alt=media&token=a349a4aa-d73d-49d6-a6f4-ce2884d09f0d',
  }
  ];

  url360= [
    {
    urlTypeA: 'https://graceland360vra.firebaseapp.com/'
    }
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
