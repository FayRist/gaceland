import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-plan',
  templateUrl: './type-plan.component.html',
  styleUrls: ['./type-plan.component.css']
})
export class TypePlanComponent implements OnInit {

  imageTypeA = [{
    image: './assets/images/home/type-plan/slider/a/A.png',
    thumbImage: './assets/images/home/type-plan/slider/a/A.png',
  },{
  image: './assets/images/home/type-plan/slider/a/1.webp',
  thumbImage: './assets/images/home/type-plan/slider/a/1.webp',
}, {
  image: './assets/images/home/type-plan/slider/a/2.webp',
  thumbImage: './assets/images/home/type-plan/slider/a/2.webp'
}, {
  image: './assets/images/home/type-plan/slider/a/3.webp',
  thumbImage: './assets/images/home/type-plan/slider/a/3.webp',
}, {
  image: './assets/images/home/type-plan/slider/a/4.webp',
  thumbImage: './assets/images/home/type-plan/slider/a/4.webp',
}, {
  image: './assets/images/home/type-plan/slider/a/a1.png',
  thumbImage: './assets/images/home/type-plan/slider/a/a1.png',
}, {
  image: './assets/images/home/type-plan/slider/a/6.webp',
  thumbImage: './assets/images/home/type-plan/slider/a/6.webp'
}, {
  image: './assets/images/home/type-plan/slider/a/a2.png',
  thumbImage: './assets/images/home/type-plan/slider/a/a2.png',
},
  ];

  imageTypeB = [{
    image: './assets/images/home/type-plan/slider/b/B.png',
    thumbImage: './assets/images/home/type-plan/slider/b/B.png',
  },{
  image: './assets/images/home/type-plan/slider/b/DSC01775.jpg',
  thumbImage: './assets/images/home/type-plan/slider/b/DSC01775.jpg',
}, {
  image: './assets/images/home/type-plan/slider/b/DSC01777.jpg',
  thumbImage: './assets/images/home/type-plan/slider/b/DSC01777.jpg'
}, {
  image: './assets/images/home/type-plan/slider/b/DSC01792.jpg',
  thumbImage: './assets/images/home/type-plan/slider/b/DSC01792.jpg',
}, {
  image: './assets/images/home/type-plan/slider/b/DSC01800.jpg',
  thumbImage: './assets/images/home/type-plan/slider/b/DSC01800.jpg',
}, {
  image: './assets/images/home/type-plan/slider/b/DSC01807.jpg',
  thumbImage: './assets/images/home/type-plan/slider/b/DSC01807.jpg',
}
  ];


  imageTypeC = [{
    image: './assets/images/home/type-plan/slider/c/C.png',
    thumbImage: './assets/images/home/type-plan/slider/c/C.png',
  },{
  image: './assets/images/home/type-plan/slider/c/1.webp',
  thumbImage: './assets/images/home/type-plan/slider/c/1.webp',
}, {
  image: './assets/images/home/type-plan/slider/c/2.webp',
  thumbImage: './assets/images/home/type-plan/slider/c/2.webp'
}, {
  image: './assets/images/home/type-plan/slider/c/3.webp',
  thumbImage: './assets/images/home/type-plan/slider/c/3.webp',
}, {
  image: './assets/images/home/type-plan/slider/c/4.webp',
  thumbImage: './assets/images/home/type-plan/slider/c/4.webp',
}, {
  image: './assets/images/home/type-plan/slider/c/5.webp',
  thumbImage: './assets/images/home/type-plan/slider/c/5.webp',
}, {
  image: './assets/images/home/type-plan/slider/c/6.webp',
  thumbImage: './assets/images/home/type-plan/slider/c/6.webp',
}, {
  image: './assets/images/home/type-plan/slider/c/7.webp',
  thumbImage: './assets/images/home/type-plan/slider/c/7.webp',
}
  ];

  imageTypeD = [{
    image: './assets/images/home/type-plan/slider/d/D.png',
    thumbImage: './assets/images/home/type-plan/slider/d/D.png',
  },{
  image: './assets/images/home/type-plan/slider/c/1.webp',
  thumbImage: './assets/images/home/type-plan/slider/c/1.webp',
  }, {
  image: './assets/images/home/type-plan/slider/c/2.webp',
  thumbImage: './assets/images/home/type-plan/slider/c/2.webp'
  }, {
  image: './assets/images/home/type-plan/slider/c/3.webp',
  thumbImage: './assets/images/home/type-plan/slider/c/3.webp',
}, {
  image: './assets/images/home/type-plan/slider/c/4.webp',
  thumbImage: './assets/images/home/type-plan/slider/c/4.webp',
}, {
  image: './assets/images/home/type-plan/slider/c/5.webp',
  thumbImage: './assets/images/home/type-plan/slider/c/5.webp',
}, {
  image: './assets/images/home/type-plan/slider/c/6.webp',
  thumbImage: './assets/images/home/type-plan/slider/c/6.webp',
}, {
  image: './assets/images/home/type-plan/slider/c/7.webp',
  thumbImage: './assets/images/home/type-plan/slider/c/7.webp',
}
  ];

  constructor(private translateService: TranslateService) { }

  public selectLanguage(event: any) {
    this.translateService.use(event.target.value);
  }

  ngOnInit(): void {
  }

}
