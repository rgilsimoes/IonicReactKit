import { t } from 'i18next';
import {
  IonButtons,
  IonChip,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import './StartPage.scss';
import Welcome from '@components/welcome/Welcome';
import { AppStore, Selectors } from '@store/AppStore';

/**
 * Renders the Start page component
 *
 * @return The Start page component
 */
const StartPage: React.FC = () => {
  const isOnline = AppStore.useState(Selectors.getIsOnline);
  return (
    <IonPage className='start-page'>
      <IonHeader>
        <IonToolbar color={'primary'}>
          <IonTitle>{t('app.title')}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large' color='primary'>
              {t('app.title')}
            </IonTitle>
            <IonButtons slot='end'>
              <IonChip color={isOnline ? 'success' : 'danger'}>
                {t(isOnline ? 'app.isOnline' : 'app.isOffline')}
              </IonChip>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <Welcome />
      </IonContent>
    </IonPage>
  );
};
export default StartPage;
