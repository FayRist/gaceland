import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeoMainComponent } from './ceo-main.component';

describe('CeoMainComponent', () => {
  let component: CeoMainComponent;
  let fixture: ComponentFixture<CeoMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeoMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
