import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutGreacelandComponent } from './about-greaceland.component';

describe('AboutGreacelandComponent', () => {
  let component: AboutGreacelandComponent;
  let fixture: ComponentFixture<AboutGreacelandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutGreacelandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutGreacelandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
