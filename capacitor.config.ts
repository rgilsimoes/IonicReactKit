/// <reference types="@capawesome/capacitor-badge" />

import { CapacitorConfig } from '@capacitor/cli';
import { KeyboardResize, KeyboardStyle } from '@capacitor/keyboard';

const config: CapacitorConfig = {
  appId: 'pt.hometech.ionicReactKit',
  appName: 'IonicReactKit',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
  plugins: {
    Keyboard: {
      resize: KeyboardResize.Body,
      style: KeyboardStyle.Dark,
      resizeOnFullScreen: true,
    },
    Badge: {
      persist: true,
      autoClear: false,
    },
  },
};

export default config;
