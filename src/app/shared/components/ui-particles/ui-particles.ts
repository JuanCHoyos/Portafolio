import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'ui-particles',
  imports: [CommonModule],
  templateUrl: './ui-particles.html',
  styleUrls: ['./ui-particles.scss'],
})
export class UIParticles {
  size = input<number>(128);
  particles = computed(() => new Array(this.size()));
}
