import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import { PORTAFOLIO_THEME } from './core/primeng/theme';
import { MessageService } from 'primeng/api';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    providePrimeNG({
      theme: {
        preset: PORTAFOLIO_THEME,
        options: {
          darkModeSelector: '.dark',
        },
      },
    }),
    MessageService,
  ],
};
