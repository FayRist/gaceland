import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

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
