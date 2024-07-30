import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-csr',
  templateUrl: './csr.component.html',
  styleUrls: ['./csr.component.css']
})
export class CsrComponent implements OnInit {
  translate!: TranslateService;
  Language: any;


  constructor(translate: TranslateService) {
    this.translate = translate
    this.Language = localStorage.getItem('Language');
    this.translate.use(this.Language);
   }

  ngOnInit(): void {  }

  
  nursingCollege = [
    {
      image: './assets/images/csr/4.png',
      thumbImage: './assets/images/csr/4.png',
    },
    {
      image: './assets/images/csr/S11.png',
      thumbImage: './assets/images/csr/S11.png',
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Fcsr%2FS12.png?alt=media&token=090b9694-c09e-424a-9d45-30b82ead95a8',
      thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Fcsr%2FS12.png?alt=media&token=090b9694-c09e-424a-9d45-30b82ead95a8',
    }
  ];
  
  donation = [
    {
      image: './assets/images/csr/card/S6.png',
      thumbImage: './assets/images/csr/card/S6.png',
    },
    {
      image: './assets/images/csr/card/S7.png',
      thumbImage: './assets/images/csr/card/S7.png',
    },
    {
      image: './assets/images/csr/card/S9.png',
      thumbImage: './assets/images/csr/card/S9.png',
    }
  ];
  
  blooddonationandAnddonationBlower = [
    {
      image: './assets/images/csr/card/S4.png',
      thumbImage: './assets/images/csr/card/S4.png',
    },
    {
      image: './assets/images/csr/card/S5.png',
      thumbImage: './assets/images/csr/card/S5.png',
    },
    {
      image: './assets/images/csr/card/S10.png',
      thumbImage: './assets/images/csr/card/S10.png',
    }
  ];
  
  
  educational = [
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Fcsr%2Fed-1.png?alt=media&token=b3f3cf8d-41cb-43ac-a388-0fb025ebd60f',
      thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Fcsr%2Fed-1.png?alt=media&token=b3f3cf8d-41cb-43ac-a388-0fb025ebd60f',
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Fcsr%2Fed-2.png?alt=media&token=e733c7ba-19b0-44b6-879c-b0325cec1f07',
      thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Fcsr%2Fed-2.png?alt=media&token=e733c7ba-19b0-44b6-879c-b0325cec1f07',
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Fcsr%2Fed-3.png?alt=media&token=3961ba05-8f51-41ae-9b5a-13953911de95',
      thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Fcsr%2Fed-3.png?alt=media&token=3961ba05-8f51-41ae-9b5a-13953911de95',
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Fcsr%2Fed-4.png?alt=media&token=49fc1f66-8738-4173-8f5a-bbd201b54ea7',
      thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Fcsr%2Fed-4.png?alt=media&token=49fc1f66-8738-4173-8f5a-bbd201b54ea7',
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Fcsr%2Fed-5.png?alt=media&token=46d4c20a-a746-4258-8197-8751ce91df0d',
      thumbImage: 'https://firebasestorage.googleapis.com/v0/b/rabbit-official.appspot.com/o/graceland%2Fcsr%2Fed-5.png?alt=media&token=46d4c20a-a746-4258-8197-8751ce91df0d',
    },
  ];
}