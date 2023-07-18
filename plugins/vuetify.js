import {createVuetify} from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const defaultTheme = {
  dark: false,
  colors: {
    nBackgroundPrimary: '#F5F5F5',
    nBackgroundSecondary: '#00233C',
    nBackgroundTertiary: '#191919',
    nText: '#202020',
    nWhite: '#FFFFFF',
    nBlack: '#000000',
    nLightBlue: '#AAD7E6',
    nBlue: '#0F92FF',
    nCyan: '#00FFEF',
    nLime: '#C3FF3C',
    nYellow: '#E6B400',
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: 'defaultTheme',
      themes: {
        defaultTheme,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
