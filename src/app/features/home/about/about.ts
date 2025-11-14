import { Component } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { UIICon, UIHeading } from '../../../shared/components';
import { HeadingType } from '../../../shared/components/ui-heading/ui-heading';

@Component({
  selector: 'about',
  imports: [TimelineModule, UIICon, UIHeading],
  templateUrl: './about.html',
  styles: `
  strong {
    color: var(--p-primary-color);
  }`,
})
export class About {
  HeadingType = HeadingType;
}
