import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLib3Component } from './test-lib3.component';

describe('TestLib3Component', () => {
  let component: TestLib3Component;
  let fixture: ComponentFixture<TestLib3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestLib3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLib3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
