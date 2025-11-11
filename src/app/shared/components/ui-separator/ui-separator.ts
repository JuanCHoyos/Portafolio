import { Component } from '@angular/core';

@Component({
  selector: 'ui-separator',
  template: ` <div
    class="h-0.5 bg-linear-to-r from-transparent via-primary-500/70 to-transparent"
    style="width: 100%"
  ></div>`,
})
export class UISeparator {}
