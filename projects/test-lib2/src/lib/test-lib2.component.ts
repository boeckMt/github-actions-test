import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-test-lib2',
  template: `
    <p>
      test-lib2 works!
    </p>
  `,
  styles: [
  ]
})
export class TestLib2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
