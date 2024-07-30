import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {
  name = 'Gallery';
  imageObject = [{
    image: './assets/images/covid-19/DSC06464.JPG',
    thumbImage: './assets/images/covid-19/DSC06464.JPG',
  }, {
    image: './assets/images/covid-19/DSC06483.JPG',
    thumbImage: './assets/images/covid-19/DSC06483.JPG'
  }, {
    image: './assets/images/covid-19/DSC06492.JPG',
    thumbImage: './assets/images/covid-19/DSC06492.JPG',
  }, {
    image: './assets/images/covid-19/DSC06516.JPG',
    thumbImage: './assets/images/covid-19/DSC06516.JPG',
  }, {
    image: './assets/images/covid-19/DSC06430.JPG',
    thumbImage: './assets/images/covid-19/DSC06430.JPG',
  }, {
    image: './assets/images/covid-19/DSC06440.JPG',
    thumbImage: './assets/images/covid-19/DSC06440.JPG'
  }, {
    image: './assets/images/covid-19/DSC06452.JPG',
    thumbImage: './assets/images/covid-19/DSC06452.JPG',
  },
  ];

  imageObjectCovid = [
    {
    image: './assets/images/covid-19/DSC08470.jpeg',
    thumbImage: './assets/images/covid-19/DSC08470.jpeg',
  },
   {
    image: './assets/images/covid-19/DSC08476.jpeg',
    thumbImage: './assets/images/covid-19/DSC08476.jpeg'
  }, {
    image: './assets/images/covid-19/DSC08480.jpeg',
    thumbImage: './assets/images/covid-19/DSC08480.jpeg',
  }, 
  ];

  
  
  translate!: TranslateService;
  Language: any;
  constructor(translate: TranslateService) {
    this.translate = translate
    this.Language = localStorage.getItem('Language');
    this.translate.use(this.Language);
   }

  // public selectLanguage(event: any) {
  //   this.translateService.use(event.target.value);
  // }

  ngOnInit(): void {

  }

}
