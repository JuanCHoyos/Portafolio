import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SocialNetworks } from '../social-networks/social-networks';
import { UIHeading } from '../../../shared/components';
import { HeadingType } from '../../../shared/components/ui-heading/ui-heading';

@Component({
  selector: 'hero',
  imports: [ButtonModule, SocialNetworks, UIHeading],
  templateUrl: './hero.html',
  styles: `
    :host ::ng-deep .p-button {
      width: 100%;
    }
  `,
})
export class Hero {
  HeadingType = HeadingType;
}
