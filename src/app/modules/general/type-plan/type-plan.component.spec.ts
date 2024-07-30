import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypePlanComponent } from './type-plan.component';

describe('TypePlanComponent', () => {
  let component: TypePlanComponent;
  let fixture: ComponentFixture<TypePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypePlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
