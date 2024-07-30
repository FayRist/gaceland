import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLandingComponent } from './detail-landing.component';

describe('DetailLandingComponent', () => {
  let component: DetailLandingComponent;
  let fixture: ComponentFixture<DetailLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
