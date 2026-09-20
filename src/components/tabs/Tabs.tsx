import { Navigate, Route } from 'react-router-dom';
import { t } from 'i18next';
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  useIonRouter,
} from '@ionic/react';
import { Icons } from '@utils/Icons';
// ------------------------------------------
import './Tabs.scss';
import Utils from '@utils/Utils';
import { logger } from '@utils/Logger';
import { RouteName } from '@utils/RouteName';

// Pages
import StartPage from '@pages/start/StartPage';
import ShowCasePage from '@pages/showcase/ShowCase';
import DocsPage from '@pages/docs/DocsPage';
import AboutPage from '@pages/about/AboutPage';
import NativePage from '@pages/showcase/Native';

/**
 * Renders a Tabs component that displays a tabbed navigation interface.
 *
 * @return ReactElement The rendered Tabs component.
 */
const Tabs: React.FC = () => {
  Utils.setNavigationBarColor('#334b62', true);

  const location = useIonRouter();
  logger.log('Location:', location.routeInfo.pathname);

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path='start' element={<StartPage />} />
        <Route path='showcase' element={<ShowCasePage />} />
        <Route path='showcase/native' element={<NativePage />} />
        <Route path='docs' element={<DocsPage />} />
        <Route path='about' element={<AboutPage />} />
        <Route index element={<Navigate to={RouteName.START} replace />} />
        <Route path='*' element={<Navigate to={RouteName.START} replace />} />
      </IonRouterOutlet>
      <IonTabBar slot='bottom'>
        <IonTabButton tab='tab1' href={RouteName.START}>
          <IonIcon aria-hidden='true' icon={Icons.colorWand} />
          <IonLabel>{t('tabs.start')}</IonLabel>
        </IonTabButton>
        <IonTabButton tab='tab2' href={RouteName.SHOWCASE}>
          <IonIcon aria-hidden='true' icon={Icons.bonfire} />
          <IonLabel>{t('tabs.showcase')}</IonLabel>
        </IonTabButton>
        <IonTabButton tab='tab3' href={RouteName.DOCS}>
          <IonIcon aria-hidden='true' icon={Icons.book} />
          <IonLabel>{t('tabs.docs')}</IonLabel>
        </IonTabButton>
        <IonTabButton tab='tab4' href={RouteName.ABOUT}>
          <IonIcon aria-hidden='true' icon={Icons.informationCircle} />
          <IonLabel>{t('tabs.about')}</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
