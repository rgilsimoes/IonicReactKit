import { StatusBar, Style, Animation } from '@capacitor/status-bar';
import { logger } from './Logger';

import { App } from '@capacitor/app';
import { getPlatforms } from '@ionic/react';

App.addListener('appStateChange', ({ isActive }) => {
  // state.isActive contains the active state
  isActive && initAndroid();
});

// iOS only
window.addEventListener('statusTap', function (): void {
  // IDEA - Any usage for this
  logger.warn('Statusbar tapped... any usage?');
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
document.addEventListener('ionBackButton', function (ev: any): void {
  ev.detail.register(10, () => {
    history.go(-1);
  });
});

/**
 * Sets the status bar style to dark.
 */
const setStatusBarStyleDark = async (): Promise<void> => {
  await StatusBar.setStyle({ style: Style.Dark });
};

/**
 * Sets the status bar style to light.
 */
const setStatusBarStyleLight = async (): Promise<void> => {
  await StatusBar.setStyle({ style: Style.Light });
};

/**
 * Hides the status bar.
 */
const hideStatusBar = async (): Promise<void> => {
  await StatusBar.hide({ animation: Animation.Fade });
};

/**
 * Shows the status bar.
 */
const showStatusBar = async (): Promise<void> => {
  await StatusBar.show({ animation: Animation.None });
};

/**
 * Initializes the Android status bar.
 */
const initAndroid = async (): Promise<void> => {
  // Display content under transparent status bar (Android only)
  const isAndroid = getPlatforms().includes('android');
  isAndroid && (await StatusBar.setOverlaysWebView({ overlay: true }));
};

export {
  setStatusBarStyleDark,
  setStatusBarStyleLight,
  hideStatusBar,
  showStatusBar,
  initAndroid,
};
