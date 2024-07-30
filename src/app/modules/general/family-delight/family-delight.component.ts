import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-family-delight',
  templateUrl: './family-delight.component.html',
  styleUrls: ['./family-delight.component.css']
})
export class FamilyDelightComponent implements OnInit {
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
