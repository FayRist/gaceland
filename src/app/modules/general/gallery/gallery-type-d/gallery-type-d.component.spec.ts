import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryTypeDComponent } from './gallery-type-d.component';

describe('GalleryTypeDComponent', () => {
  let component: GalleryTypeDComponent;
  let fixture: ComponentFixture<GalleryTypeDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryTypeDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryTypeDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
