import { ConnectionStatus, Network } from '@capacitor/network';
import { Actions } from '@store/AppStore';

/**
 * Handles the change in network status.
 */
Network.addListener('networkStatusChange', (status) => {
  Actions.setIsOnline(status.connected);
});

/** Get current network status */
export const getCurrentNetworkStatus = async (): Promise<ConnectionStatus> =>
  await Network.getStatus();
