import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

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
