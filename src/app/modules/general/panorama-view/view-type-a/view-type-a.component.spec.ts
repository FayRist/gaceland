import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTypeAComponent } from './view-type-a.component';

describe('ViewTypeAComponent', () => {
  let component: ViewTypeAComponent;
  let fixture: ComponentFixture<ViewTypeAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTypeAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTypeAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
