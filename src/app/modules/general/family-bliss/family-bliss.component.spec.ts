import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyBlissComponent } from './family-bliss.component';

describe('FamilyBlissComponent', () => {
  let component: FamilyBlissComponent;
  let fixture: ComponentFixture<FamilyBlissComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyBlissComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyBlissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
