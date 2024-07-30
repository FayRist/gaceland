import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panorama-btn',
  templateUrl: './panorama-btn.component.html',
  styleUrls: ['./panorama-btn.component.css']
})
export class PanoramaBtnComponent implements OnInit {
  

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
