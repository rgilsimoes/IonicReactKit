import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import { clearAppBadge, setAppBadge } from '@utils/Badge';
import { logger } from '@utils/Logger';
import { t } from 'i18next';
import { useState } from 'react';
import './ShowCase.scss';

const NativePage: React.FC = () => {
  logger.log('Test');

  const [badgeCounter, setBadgeCounter] = useState(0);

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
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Native Integrations</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem lines='none'>
              <IonLabel>App Icon Badge:</IonLabel>
              <IonButton
                onClick={() => {
                  setAppBadge(badgeCounter + 1);
                  setBadgeCounter(badgeCounter + 1);
                }}
              >
                Increase Value
              </IonButton>
              <IonButton
                onClick={() => {
                  clearAppBadge();
                }}
              >
                Clear
              </IonButton>
            </IonItem>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default NativePage;
