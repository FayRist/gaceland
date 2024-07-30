import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-family-bliss',
  templateUrl: './family-bliss.component.html',
  styleUrls: ['./family-bliss.component.css']
})
export class FamilyBlissComponent implements OnInit {
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
