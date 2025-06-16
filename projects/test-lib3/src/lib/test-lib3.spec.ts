import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLib3 } from './test-lib3';

describe('TestLib3', () => {
  let component: TestLib3;
  let fixture: ComponentFixture<TestLib3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestLib3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestLib3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
