import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lg = new FormGroup({
    language: new FormControl(null, Validators.required)
  });
  title = 'angular-starter';
  version = 'Angular version 12.1.3';
  Language: any = 'en';
  constructor(private translateService: TranslateService) {
    const lg = localStorage.getItem('Language');
    if (lg === 'th') {
      this.Language = 'th';
    } else {
      localStorage.setItem('Language','en');
      this.Language = 'en';
    }
   
    this.translateService.use(this.Language);
    this.lg.controls.language.setValue(this.Language);

  }

  public selectLanguage(event: any) {
    localStorage.setItem('Language',event.target.value);
    this.translateService.use(event.target.value);
    this.lg.controls.language.setValue(event.target.value);
    window.location.reload();
    
  }


}