import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const PORTAFOLIO_THEME = definePreset(Aura, {
  extend: {
    fontSizeBase: '14px',
  },
  semantic: {},
  components: {
    popover: {
      content: {
        padding: '8px 4px',
      },
      root: {
        borderRadius: '0.5rem',
        gutter: '0.5rem',
      },
      css: `
        .p-popover:before, .p-popover:after {
          display: none
        }
      `,
    },
    timeline: {
      colorScheme: {
        light: {
          eventConnector: {
            color: '{primary.500}',
          },
          eventMarker: {
            background: '{primary.500}',
            borderColor: '{primary.500}',
            content: {
              background: '{primary.100}',
            },
          },
        },
      },
    },
  },
});
