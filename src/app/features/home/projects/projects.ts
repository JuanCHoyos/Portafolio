import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { UIICon, UISeparator, UIHeading } from '../../../shared/components';
import { HeadingType } from '../../../shared/components/ui-heading/ui-heading';

@Component({
  selector: 'projects',
  imports: [CardModule, ButtonModule, UIICon, UISeparator, UIHeading],
  templateUrl: './projects.html',
  styles: `
  :host ::ng-deep .p-card-body {
    padding: 0
  }`,
})
export class Projects {
  HeadingType = HeadingType;
}
