import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  contentChild,
  input,
  TemplateRef,
} from '@angular/core';
import { UISeparator } from '../ui-separator/ui-separator';
import { UIICon } from '../ui-icon/ui-icon';

export enum HeadingType {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
}

@Component({
  selector: 'ui-title',
  imports: [CommonModule, UISeparator],
  templateUrl: './ui-title.html',
})
export class UITitle {
  heading = input.required<HeadingType>();
  showBorder = input<boolean>(true);
  iconContent = contentChild<TemplateRef<UIICon | null>>('icon');

  iconTemplate = computed<TemplateRef<UIICon | null>>(() => this.iconContent() as TemplateRef<UIICon | null>);
  HeadingType = HeadingType;
}
