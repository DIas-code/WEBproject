import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitatacategoryComponent } from './citatacategory.component';

describe('CitatacategoryComponent', () => {
  let component: CitatacategoryComponent;
  let fixture: ComponentFixture<CitatacategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitatacategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitatacategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
