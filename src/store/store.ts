import { Preferences } from '@capacitor/preferences';
import { registerInDevtools } from 'pullstate';
import { logger } from '@utils/Logger';
import { AppStore } from './AppStore';

const APP_KEY = 'appState';
// Multiple Store Keys
// const storeName_KEY = 'storeNameState';

export const subscribeStores = (): void => {
  logger.warn('Subscribing stores...');
  // * Saves State to Local Storage
  // AppStore.subscribe(
  //   (s) => s,
  //   (appState) => {
  //     localStorage.setItem(APP_KEY, JSON.stringify(appState));
  //   }
  // );

  // * Saves State to Capacitor Preferences
  AppStore.subscribe(
    (s) => s,
    (appState) => {
      Preferences.set({ key: APP_KEY, value: JSON.stringify(appState) });
    },
  );
};

/**
 * Rehydrates Store from Local Storage
 */
export const rehydrateStores = async (): Promise<void> => {
  try {
    logger.warn('Rehydrating stores...');
    // * Load State from Local Storage
    // const appState = localStorage.getItem('appState');
    // if (appState !== null) {
    //   const data = JSON.parse(appState);
    //   AppStore.replace(data);
    // }

    // * Load State from Capacitor Preferences
    const appState = await Preferences.get({ key: APP_KEY });
    if (appState.value !== null) {
      const data = JSON.parse(appState.value);
      AppStore.replace(data);
    }
  } catch (e) {
    logger.error('Error loading from store(s):', e);
  }
};

// * Register in ReduxDevTools
registerInDevtools({
  AppStore,
});
