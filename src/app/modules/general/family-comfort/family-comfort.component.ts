import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-family-comfort',
  templateUrl: './family-comfort.component.html',
  styleUrls: ['./family-comfort.component.css']
})
export class FamilyComfortComponent implements OnInit {
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
