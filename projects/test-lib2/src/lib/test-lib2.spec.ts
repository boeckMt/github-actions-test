import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLib2 } from './test-lib2';

describe('TestLib2', () => {
  let component: TestLib2;
  let fixture: ComponentFixture<TestLib2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestLib2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestLib2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
