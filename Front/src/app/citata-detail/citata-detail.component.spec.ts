import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitataDetailComponent } from './citata-detail.component';

describe('CitataDetailComponent', () => {
  let component: CitataDetailComponent;
  let fixture: ComponentFixture<CitataDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitataDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitataDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
