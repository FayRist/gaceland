import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery-main',
  templateUrl: './gallery-main.component.html',
  styleUrls: ['./gallery-main.component.css']
})
export class GalleryMainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // callByTypeA() {
  //   this.router.navigate(['/gallery/gallery-type-a'], { queryParams: {}})
  // }
  // callByTypeB() {
  //   this.router.navigate(['/gallery/gallery-type-b'], { queryParams: {}})
  // }
  // callByTypeC() {
  //   this.router.navigate(['/gallery/gallery-type-c'], { queryParams: {}})
  // }
  // callByTypeD() {
  //   this.router.navigate(['/gallery/gallery-type-d'], { queryParams: {}})
  // }

}
