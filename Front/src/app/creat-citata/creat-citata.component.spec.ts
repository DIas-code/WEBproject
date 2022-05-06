import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatCitataComponent } from './creat-citata.component';

describe('CreatCitataComponent', () => {
  let component: CreatCitataComponent;
  let fixture: ComponentFixture<CreatCitataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatCitataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatCitataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
