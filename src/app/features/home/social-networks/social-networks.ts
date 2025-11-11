import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'social-networks',
  imports: [ButtonModule],
  templateUrl: './social-networks.html',
  styles: `
    :host ::ng-deep .p-button {
      width: 100%;
    }
  `,
})
export class SocialNetworks {}
