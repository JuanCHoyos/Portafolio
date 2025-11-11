import { Component, input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';

import { ICONS } from './constants/icons';
export type IconType = keyof typeof ICONS;
@Component({
  selector: 'ui-icon',
  imports: [NgIcon],
  viewProviders: [provideIcons(ICONS)],
  template: ` <ng-icon name="{{ name() }}"> </ng-icon>`,
  styles: [
    `
      :host {
        display: inline-flex;
      }
    `,
  ],
})
export class UIICon {
  name = input.required<IconType>();
  size = input<string | number>(18);
}
