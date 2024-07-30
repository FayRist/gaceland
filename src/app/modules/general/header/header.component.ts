import { TranslateService } from '@ngx-translate/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  lg = new FormGroup({
    language: new FormControl(null, Validators.required)
  });

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
