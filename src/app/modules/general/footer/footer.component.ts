import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  translate!: TranslateService;
  Language: any;

  constructor(translate: TranslateService,private router: Router) { 
    this.translate = translate
    this.Language = localStorage.getItem('Language');
    this.translate.use(this.Language);
  }


  ngOnInit(): void {
  }

}
