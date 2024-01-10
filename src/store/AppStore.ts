import { Store } from 'pullstate';
import { createSelector } from 'reselect';
import AppState from '@models/AppState';

// Store and State
export const AppStore = new Store<AppState>({
  skipIntro: false,
  isOnline: false,
  isLoggedIn: false,
});

const getAppState = (state: AppState): AppState => state;

/**
 * Getters
 */

const getSkipShowIntro = createSelector(
  getAppState,
  (state) => state.skipIntro,
);
const getIsLoggedIn = createSelector(
  getAppState,
  (state) => state.isLoggedIn || false,
);
const getIsOnline = createSelector(getAppState, (state) => state.isOnline);
const getLanguage = createSelector(
  getAppState,
  (state): string | undefined => state.lang,
);

export const Selectors = {
  getSkipShowIntro,
  getIsLoggedIn,
  getIsOnline,
  getLanguage,
};

/**
 * Actions
 * @param value
 */

const setSkipIntro = (value: boolean): void => {
  AppStore.update((state) => {
    state.skipIntro = value;
  });
};

const setIsLoggedIn = (value: boolean): void => {
  AppStore.update((state) => {
    state.isLoggedIn = value;
  });
};

const setIsOnline = (value: boolean): void => {
  AppStore.update((state) => {
    state.isOnline = value;
  });
};

const setLanguage = (value: string): void => {
  AppStore.update((state) => {
    state.lang = value;
  });
};

export const Actions = {
  setSkipIntro,
  setIsLoggedIn,
  setIsOnline,
  setLanguage,
};

/**
 * Async Actions
 */
