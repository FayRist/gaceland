import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNewsAndEventComponent } from './main-news-and-event.component';

describe('MainNewsAndEventComponent', () => {
  let component: MainNewsAndEventComponent;
  let fixture: ComponentFixture<MainNewsAndEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainNewsAndEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNewsAndEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
