import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInstituteComponent } from './my-institute.component';

describe('MyInstituteComponent', () => {
  let component: MyInstituteComponent;
  let fixture: ComponentFixture<MyInstituteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyInstituteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyInstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
