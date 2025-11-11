import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { UIICon, UISeparator, UITitle } from '../../../shared/components';
import { HeadingType } from '../../../shared/components/ui-title/ui-title';

@Component({
  selector: 'projects',
  imports: [CardModule, ButtonModule, UIICon, UISeparator, UITitle],
  templateUrl: './projects.html',
  styles: `
  :host ::ng-deep .p-card-body {
    padding: 0
  }`,
})
export class Projects {
  HeadingType = HeadingType;
}
