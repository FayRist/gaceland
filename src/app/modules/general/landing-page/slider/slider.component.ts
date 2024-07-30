import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  constructor() { }

  ngOnInit(): void {
  }

  images = [
    './assets/images/home/slider/slider-1.png',
    './assets/images/home/slider/slider-2.png',
    './assets/images/home/slider/slider-3.png',
  ];


  images_m = [
    './assets/images/home/slider/slider-1m.png',
    './assets/images/home/slider/slider-2m.png',
    './assets/images/home/slider/slider-3m.png',
  ];
}
