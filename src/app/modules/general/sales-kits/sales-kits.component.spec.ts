import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesKitsComponent } from './sales-kits.component';

describe('SalesKitsComponent', () => {
  let component: SalesKitsComponent;
  let fixture: ComponentFixture<SalesKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesKitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
