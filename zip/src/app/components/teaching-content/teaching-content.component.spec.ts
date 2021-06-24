import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingContentComponent } from './teaching-content.component';

describe('TeachingContentComponent', () => {
  let component: TeachingContentComponent;
  let fixture: ComponentFixture<TeachingContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachingContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
