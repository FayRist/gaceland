import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanGracelandComponent } from './plan-graceland.component';

describe('PlanGracelandComponent', () => {
  let component: PlanGracelandComponent;
  let fixture: ComponentFixture<PlanGracelandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanGracelandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanGracelandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
