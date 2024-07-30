import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeoPageComponent } from './ceo-page.component';

describe('CeoPageComponent', () => {
  let component: CeoPageComponent;
  let fixture: ComponentFixture<CeoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
