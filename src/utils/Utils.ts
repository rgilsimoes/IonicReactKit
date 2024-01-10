import _ from 'underscore';
import { getPlatforms } from '@ionic/react';
import { logger } from './Logger';
import { NavigationBar } from '@hugotomazi/capacitor-navigation-bar';
import config from '@assets/data/config.json';

/**
 * List of known and usable platforms
 */
export type Platforms = (
  | 'hybrid'
  | 'ios'
  | 'ipad'
  | 'iphone'
  | 'android'
  | 'phablet'
  | 'tablet'
  | 'cordova'
  | 'capacitor'
  | 'electron'
  | 'pwa'
  | 'mobile'
  | 'mobileweb'
  | 'desktop'
)[];
export const MOBILE_PLATFORMS: Platforms = [
  'android',
  'ios',
  'ipad',
  'iphone',
  'mobile',
  'mobileweb',
  'pwa',
];
export const CAPACITOR_PLATFORM: Platforms = ['capacitor', 'cordova'];

/**
 * Checks if the given platforms are valid.
 *
 * @param platforms platforms - An array of platforms to check.
 * @return boolean True if at least one platform is valid, false otherwise.
 */
export function isValidPlatform(required: Platforms): boolean {
  const valid = _.intersection(getPlatforms(), required);
  return valid.length == required.length;
}

/**
 * Utility class for common functions
 */
export default class Utils {
  /**
   * Configuration info loaded from JSON
   */
  public static CONFIG = config;

  /**
   * Sets the color of the navigation bar.
   *
   * @param {string} color - The color to set for the navigation bar.
   * @param {boolean} dark - (Optional) Whether the navigation bar buttons should be dark.
   * @return {void}
   */
  public static setNavigationBarColor(color: string, dark?: boolean): void {
    if (
      isValidPlatform(CAPACITOR_PLATFORM) &&
      !getPlatforms().includes('ios')
    ) {
      logger.log('Setting Navigation bar color to:', color);
      NavigationBar.setColor({
        color: color,
        darkButtons: dark ?? false,
      });
    }
  }
}
