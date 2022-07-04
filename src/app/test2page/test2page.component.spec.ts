import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test2pageComponent } from './test2page.component';

describe('Test2pageComponent', () => {
  let component: Test2pageComponent;
  let fixture: ComponentFixture<Test2pageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Test2pageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Test2pageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
