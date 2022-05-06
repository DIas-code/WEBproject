import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPgaeComponent } from './no-pgae.component';

describe('NoPgaeComponent', () => {
  let component: NoPgaeComponent;
  let fixture: ComponentFixture<NoPgaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoPgaeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoPgaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
