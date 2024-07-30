import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyComfortComponent } from './family-comfort.component';

describe('FamilyComfortComponent', () => {
  let component: FamilyComfortComponent;
  let fixture: ComponentFixture<FamilyComfortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyComfortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyComfortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
