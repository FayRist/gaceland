import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-online-booking',
  templateUrl: './online-booking.component.html',
  styleUrls: ['./online-booking.component.css']
})
export class OnlineBookingComponent implements OnInit {
  currentstep: any = 1;
  constructor() { }

  ngOnInit(): void {

  }

  clickStep(stepid: any ,hometype: any) {
    this.currentstep = stepid;
  }

}
