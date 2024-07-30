import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCeoComponent } from './detail-ceo.component';

describe('DetailCeoComponent', () => {
  let component: DetailCeoComponent;
  let fixture: ComponentFixture<DetailCeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCeoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
