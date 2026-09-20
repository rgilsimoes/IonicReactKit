import { beforeEach, describe, expect, test } from 'vitest';
import { Actions, AppStore, Selectors } from './AppStore';

describe('AppStore', () => {
  beforeEach(() => {
    Actions.setSkipIntro(false);
  });

  test('updates the skip-intro preference', () => {
    expect(Selectors.getSkipShowIntro(AppStore.getRawState())).toBe(false);

    Actions.setSkipIntro(true);

    expect(Selectors.getSkipShowIntro(AppStore.getRawState())).toBe(true);
  });
});
