import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  getPlatforms,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import WebFont from 'webfontloader';

/* Core CSS required for Ionic components to work properly */
import './global.scss';

/* Main Components */
import i18n from '@utils/i18n';
import * as StatusBar from '@utils/StatusBar';
import { logger } from '@utils/Logger';
import { RouteName } from '@utils/RouteName';
import { rehydrateStores, subscribeStores } from '@store/store';

import Welcome from '@pages/welcome/Welcome';
import Tabs from '@components/tabs/Tabs';
import { CAPACITOR_PLATFORM, isValidPlatform } from '@utils/Utils';
import { getCurrentNetworkStatus } from '@utils/Network';
import { Actions } from '@store/AppStore';

logger.warn('Init: Running in mode:', import.meta.env.MODE);
logger.warn('Platform is: ', getPlatforms());

setupIonicReact();
// * Init Stores
rehydrateStores().then(() => {
  subscribeStores();
});

const App: React.FC = () => {
  // * Set status bar
  if (isValidPlatform(CAPACITOR_PLATFORM)) {
    StatusBar.setStatusBarStyleLight();
    StatusBar.showStatusBar();
    StatusBar.initAndroid();
  }

  // * Preload Fonts
  WebFont.load({
    custom: {
      families: ['Signika', 'Pacifico'],
    },
  });

  // * Set Language
  i18n.changeLanguage(i18n.language);

  // * Check current network status
  getCurrentNetworkStatus().then((status) => {
    Actions.setIsOnline(status.connected);
  });

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path={RouteName.WELCOME} exact>
            <Welcome />
          </Route>
          <Route path={RouteName.TABS}>
            <Tabs />
          </Route>
          <Route path='/' exact>
            <Redirect to={RouteName.WELCOME} />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
