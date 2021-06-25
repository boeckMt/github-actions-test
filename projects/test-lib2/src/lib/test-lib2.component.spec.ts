import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLib2Component } from './test-lib2.component';

describe('TestLib2Component', () => {
  let component: TestLib2Component;
  let fixture: ComponentFixture<TestLib2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestLib2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLib2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
