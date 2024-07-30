import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyDelightComponent } from './family-delight.component';

describe('FamilyDelightComponent', () => {
  let component: FamilyDelightComponent;
  let fixture: ComponentFixture<FamilyDelightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyDelightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyDelightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
