import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTypeBComponent } from './view-type-b.component';

describe('ViewTypeBComponent', () => {
  let component: ViewTypeBComponent;
  let fixture: ComponentFixture<ViewTypeBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTypeBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTypeBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
