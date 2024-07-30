import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTypeCComponent } from './view-type-c.component';

describe('ViewTypeCComponent', () => {
  let component: ViewTypeCComponent;
  let fixture: ComponentFixture<ViewTypeCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTypeCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTypeCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
