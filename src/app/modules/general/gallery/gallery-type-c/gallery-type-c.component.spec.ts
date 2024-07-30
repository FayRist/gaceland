import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryTypeCComponent } from './gallery-type-c.component';

describe('GalleryTypeCComponent', () => {
  let component: GalleryTypeCComponent;
  let fixture: ComponentFixture<GalleryTypeCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryTypeCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryTypeCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
