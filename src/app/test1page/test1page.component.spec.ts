import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test1pageComponent } from './test1page.component';

describe('Test1pageComponent', () => {
  let component: Test1pageComponent;
  let fixture: ComponentFixture<Test1pageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Test1pageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Test1pageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
