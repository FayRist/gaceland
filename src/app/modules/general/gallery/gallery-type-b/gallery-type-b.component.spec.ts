import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryTypeBComponent } from './gallery-type-b.component';

describe('GalleryTypeBComponent', () => {
  let component: GalleryTypeBComponent;
  let fixture: ComponentFixture<GalleryTypeBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryTypeBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryTypeBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
