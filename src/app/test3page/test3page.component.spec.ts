import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test3pageComponent } from './test3page.component';

describe('Test3pageComponent', () => {
  let component: Test3pageComponent;
  let fixture: ComponentFixture<Test3pageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Test3pageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Test3pageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
