import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTypeDComponent } from './view-type-d.component';

describe('ViewTypeDComponent', () => {
  let component: ViewTypeDComponent;
  let fixture: ComponentFixture<ViewTypeDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTypeDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTypeDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
