import { Badge } from '@capawesome/capacitor-badge';

const setAppBadge = async (count: number): Promise<void> => {
  await Badge.set({ count });
};

const clearAppBadge = async (): Promise<void> => {
  await Badge.clear();
};

const isBadgeSupported = async (): Promise<boolean> => {
  const result = await Badge.isSupported();
  return result.isSupported;
};

export { setAppBadge, clearAppBadge, isBadgeSupported };
