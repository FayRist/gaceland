import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoramaBtnComponent } from './panorama-btn.component';

describe('PanoramaBtnComponent', () => {
  let component: PanoramaBtnComponent;
  let fixture: ComponentFixture<PanoramaBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoramaBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanoramaBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
