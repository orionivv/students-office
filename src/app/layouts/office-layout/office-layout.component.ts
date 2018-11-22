import { Component } from '@angular/core';

@Component({
  selector: 'office-layout',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [`
    :host {
      height: 100%;
    }
  `],
})
export class OfficeLayoutComponent {
}
