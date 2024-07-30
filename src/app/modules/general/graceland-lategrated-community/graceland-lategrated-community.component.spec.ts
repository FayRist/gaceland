import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GracelandLategratedCommunityComponent } from './graceland-lategrated-community.component';

describe('GracelandLategratedCommunityComponent', () => {
  let component: GracelandLategratedCommunityComponent;
  let fixture: ComponentFixture<GracelandLategratedCommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GracelandLategratedCommunityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GracelandLategratedCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
