import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryTypeAComponent } from './gallery-type-a.component';

describe('GalleryTypeAComponent', () => {
  let component: GalleryTypeAComponent;
  let fixture: ComponentFixture<GalleryTypeAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryTypeAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryTypeAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
