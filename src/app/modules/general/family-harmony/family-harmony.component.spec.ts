import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyHarmonyComponent } from './family-harmony.component';

describe('FamilyHarmonyComponent', () => {
  let component: FamilyHarmonyComponent;
  let fixture: ComponentFixture<FamilyHarmonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyHarmonyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyHarmonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
