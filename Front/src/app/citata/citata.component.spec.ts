import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitataComponent } from './citata.component';

describe('CitataComponent', () => {
  let component: CitataComponent;
  let fixture: ComponentFixture<CitataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
