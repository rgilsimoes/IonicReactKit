import { describe, expect, test } from 'vitest';
import { Actions, AppStore, Selectors } from './AppStore';

describe('Saving and Loading State', () => {
  const mockState = AppStore.getRawState();

  test('getSkipShowIntro should be set correctly', () => {
    console.log('Initial State:', mockState);
    // ----------------------------
    expect(
      Selectors.getSkipShowIntro(mockState),
      'should be false',
    ).toBeFalsy();
    Actions.setSkipIntro(!mockState.skipIntro);
    const newState = AppStore.getRawState();
    expect(Selectors.getSkipShowIntro(newState), 'should be true').toBeTruthy();
    // ----------------------------
    console.log('Changed State:', newState);
  });
});
