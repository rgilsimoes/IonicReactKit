import {
  IonAvatar,
  IonContent,
  IonHeader,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import { logger } from '@utils/Logger';
import { RouteName } from '@utils/RouteName';
import { t } from 'i18next';
import './ShowCase.scss';

const ShowCasePage: React.FC = () => {
  logger.log('Test');

  return (
    <IonPage className='showcase-page'>
      <IonHeader>
        <IonToolbar color={'primary'}>
          <IonTitle>{t('showcase.title')}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar color={'primary'}>
            <IonTitle size='large'>{t('showcase.title')}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <h3>App support</h3>
          <IonItem
            className={'showCaseItem'}
            lines='none'
            routerLink={RouteName.SC_NATIVE}
          >
            <IonAvatar>
              {/* eslint-disable-next-line max-len */}
              <IonImg src='data:image/jpeg;base64,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' />
            </IonAvatar>
            <IonLabel>
              <h2>Mobile Native Features</h2>
              <p>
                App Badge, Network awareness, Status and Navigation Bar styling,
                Local Preferences Store
              </p>
            </IonLabel>
          </IonItem>
          <IonItem className={'showCaseItem'} lines='none'>
            <IonAvatar>
              <IonImg src='https://avatars.githubusercontent.com/u/8546082?s=200&v=4' />
            </IonAvatar>
            <IonLabel>
              <h2>Internationalization i18n</h2>
              <p>Use JSON based translation files</p>
            </IonLabel>
          </IonItem>
          <IonItem className={'showCaseItem'} lines='none'>
            <IonAvatar>
              <IonImg src='https://lostpebble.github.io/pullstate/img/icon-transparent-onlight-new.png' />
            </IonAvatar>
            <IonLabel>
              <h2>PullState</h2>
              <p>Multiple Stores, Selectors, Actions and Async Actions</p>
            </IonLabel>
          </IonItem>
          <IonItem className={'showCaseItem'} lines='none'>
            <IonAvatar>
              <IonImg src='https://lostpebble.github.io/pullstate/img/icon-transparent-onlight-new.png' />
            </IonAvatar>
            <IonLabel>
              <h2>PullState</h2>
              <p>Multiple Stores, Selectors, Actions and Async Actions</p>
            </IonLabel>
          </IonItem>
          <h3>Developer Experience</h3>
          <IonItem className={'showCaseItem'} lines='none'>
            <IonAvatar>
              <IonImg src='https://lostpebble.github.io/pullstate/img/icon-transparent-onlight-new.png' />
            </IonAvatar>
            <IonLabel>
              <h2>Linting</h2>
              <p>Multiple Stores, Selectors, Actions and Async Actions</p>
            </IonLabel>
          </IonItem>
          <IonItem className={'showCaseItem'} lines='none'>
            <IonAvatar>
              <IonImg src='https://lostpebble.github.io/pullstate/img/icon-transparent-onlight-new.png' />
            </IonAvatar>
            <IonLabel>
              <h2>Prettier</h2>
              <p>Multiple Stores, Selectors, Actions and Async Actions</p>
            </IonLabel>
          </IonItem>
          <h3>And more to come...</h3>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ShowCasePage;
