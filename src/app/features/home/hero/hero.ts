import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SocialNetworks } from '../social-networks/social-networks';
import { UITitle } from '../../../shared/components';
import { HeadingType } from '../../../shared/components/ui-title/ui-title';

@Component({
  selector: 'hero',
  imports: [ButtonModule, SocialNetworks, UITitle],
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
